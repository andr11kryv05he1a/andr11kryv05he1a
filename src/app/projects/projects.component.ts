import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AppBase} from "../app-base";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent extends AppBase {}
