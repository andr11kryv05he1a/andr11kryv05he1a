import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AppBase} from "../app-base";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends AppBase {
  @Input() public darkModeSubject!: BehaviorSubject<boolean>;

  public onDarkModeToggle($event: MatSlideToggleChange) {
    this.darkModeSubject?.next($event.checked);
  }
}
