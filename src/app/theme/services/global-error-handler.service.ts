import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';

import * as _ from 'lodash';
import * as SourcemappedStacktrace from 'sourcemapped-stacktrace';
import * as StackTrace from 'stacktrace-js';
import * as ErrorStackParser from 'error-stack-parser';
import * as StackTraceGPS from 'stacktrace-gps';


import { HelperService } from './helper.service';

/**
 * Global Error Handling
 * More Info: https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(public injector: Injector) { }
    handleError(error: any) {
        const helperService = this.injector.get(HelperService);
        const location = this.injector.get(LocationStrategy);

        // Get the current app location url
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        if (helperService.isDevEnv()) {
            this.gracefulErrorLog(error, helperService, url, message);
        }

        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;

    }

    gracefulErrorLog(error: any, helperService: HelperService, url: string, message: any) {
        /*
         * Parse error to parses and extracts function names, URLs, line numbers, and column numbers from
         * the given Error's stack as an Array of StackFrames.
         * More Info: https://www.stacktracejs.com/#!/docs/error-stack-parser
         */
        const parsedStackedFrames: any[] = ErrorStackParser.parse(error);
        const stackFrame = parsedStackedFrames[0];
        const callback = (errorInfo: any) => {
            /*
             * Using StackTrace.js to get the full stack and also add the current URL to the message
             * going upstream to the server.
             * Framework-agnostic, micro-library for getting stack traces in all web browsers:
             * https://www.stacktracejs.com/#!/docs/stacktrace-js
             */
            // get the stack trace, lets grab the last 10 stacks only
            StackTrace.fromError(error).then(stackframes => {

                const stackString = stackframes
                    .splice(0, 20)
                    .map(function (sf) {
                        return sf.toString();
                    }).join('\n');
                const stackInfo = { message, url, stack: stackString };

                const detailedParsedError: Object = _.merge(errorInfo, stackInfo);
                if (helperService.isDevEnv() || helperService.isStageEnv()) {
                    // tslint:disable-next-line:no-console
                    console.log(detailedParsedError);
                }
                if (helperService.isProdEnv()) {
                    // log on the server
                    helperService.serverLogger(detailedParsedError);
                }
            });
        };

        const errback = (_error) => { /*console.log('_error',StackTrace.fromError(_error));*/ };

        /*
         * Better location/name information from source maps with stacktrace-gps
         * More Info: https://www.stacktracejs.com/#!/docs/stacktrace-gps
         */
        const gps = new StackTraceGPS();
        gps.getMappedLocation(stackFrame).then(callback, errback);

        /*
         * Sourcemapped stacktrace:
         * https://stackoverflow.com/questions/42095429/error-stacktrace-with-angular-2-and-webpack-2#answer-42160797
         * More Info: https://github.com/novocaine/sourcemapped-stacktrace
         */
        // pass e.stack to window.mapStackTrace
        // SourcemappedStacktrace.mapStackTrace(error.stack, function (mappedStack) {
        //   // do what you want with mappedStack here
        //   console.log('mapStackTrace',mappedStack.join("\n"));
        // });
    }
}
