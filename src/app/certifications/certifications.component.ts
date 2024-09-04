import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppBase} from "../app-base";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsComponent extends AppBase {}
