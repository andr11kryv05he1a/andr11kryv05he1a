import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {Data, DataExportService} from "../data";
import {BehaviorSubject, tap} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {AppBase} from "./app-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public readonly data$ = this.dataExportService.getData();
  public readonly darkModeSubject = new BehaviorSubject<boolean>(true);

  constructor(
      @Inject(DOCUMENT) private readonly document: Document,
      private readonly renderer: Renderer2,
      private readonly dataExportService: DataExportService) {}

  ngOnInit(): void {
    this.darkModeSubject.pipe(tap((value) => {
      this.renderer.setAttribute(this.document.body, 'class', value ? 'theme-dark' : 'theme-light')
    })).subscribe();
  }

  public onOutletLoaded(contentComponent: AppBase, data: Data) {
    contentComponent.data = data;
  }
}
