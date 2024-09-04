import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppBase} from "../app-base";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends AppBase {}
