import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { PersonService } from './services/person.service';
import { ProjectService } from './services/project.service';
import { SkillService } from './services/skill.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AuthenticationService } from './services/authentication.service';
import { TokenService } from './services/token.service';
import { interceptorProvider } from './services/interceptor.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    ProjectComponent,
    PortfolioComponent,
    LoginComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    EducationService,
    ExperienceService,
    PersonService,
    ProjectService,
    SkillService,
    AuthenticationService,
    TokenService,
    SpinnerService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
