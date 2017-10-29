
export class AppModule {
  /**
     * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
     * This is good to prevent injecting the service as constructor parameter.
     */static injector: Injector;
  constructor(public appState: AppState, injector: Injector) {
    AppModule.injector = injector;
  }
}
