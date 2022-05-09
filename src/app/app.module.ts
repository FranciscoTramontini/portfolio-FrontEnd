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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EducationService,
    ExperienceService,
    PersonService,
    ProjectService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
