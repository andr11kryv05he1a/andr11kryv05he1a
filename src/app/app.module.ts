import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DataModule} from "../data/data.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {CardComponent} from './card/card.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import {AboutMeComponent} from "./about-me/about-me.component";
import {appRoutes} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutMeComponent,
        CardComponent,
        ProjectsComponent,
        CertificationsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DataModule,
        MatToolbarModule,
        MatCardModule,
        MatSlideToggleModule,
        MatIconModule,
        MatDividerModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule,
        appRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
