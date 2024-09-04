import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataExportService} from "./services/data-export.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [DataExportService]
})
export class DataModule {
}
