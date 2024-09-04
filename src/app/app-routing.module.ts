import {RouterModule} from "@angular/router";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from "./projects/projects.component";
import {CertificationsComponent} from "./certifications/certifications.component";

export const appRoutes = RouterModule.forRoot([
    {
        path: 'aboutMe', component: AboutMeComponent,
    },
    {
        path: 'projects', component: ProjectsComponent
    },
    {
        path: 'certifications', component: CertificationsComponent
    },
    {
        path: '', redirectTo: '/aboutMe', pathMatch: 'full'
    }
])
