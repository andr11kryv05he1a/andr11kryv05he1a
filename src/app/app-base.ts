import {Directive, Input} from "@angular/core";
import {Data} from "../data";

@Directive()
export abstract class AppBase {
    @Input() data!: Data | null;
}
