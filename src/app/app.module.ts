import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbUserModule ,NbIconModule , NbThemeModule, NbLayoutModule, NbActionsModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [AppComponent, ResumeComponent, AboutComponent, HomeComponent, ProjectsComponent, PhotosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'contact', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'photos', component: PhotosComponent },
    ]),
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    NbThemeModule.forRoot({name:  'dark'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
