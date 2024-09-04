import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppBase} from "../app-base";

@Component({
    selector: 'app-content',
    templateUrl: './about-me.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent extends AppBase {
}
