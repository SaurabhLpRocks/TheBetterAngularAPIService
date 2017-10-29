import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../theme/nga.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgaModule,
    ],
    exports: [],
    providers: [],
})
export class SharedModule { }
