import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbCardModule,
  NbMenuModule,
  NbUserModule,
  NbIconModule,
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbButtonModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './menu/menu.component';
import { ActionsComponent } from './actions/actions.component';
import { SafePipeModule } from 'safe-pipe';
import { ReactportfolioComponent } from './reactportfolio/reactportfolio.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { GithubComponent } from './github/github.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    MenuComponent,
    ActionsComponent,
    ReactportfolioComponent,
    LinkedinComponent,
    GithubComponent,
    EmailComponent,
  ],
  imports: [
    SafePipeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'contact', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'alt-portfolio', component: ReactportfolioComponent },
      { path: 'github', component: GithubComponent },
      { path: 'linkedin', component: LinkedinComponent },
      { path: 'email', component: EmailComponent },
    ]),
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    NbMenuModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
