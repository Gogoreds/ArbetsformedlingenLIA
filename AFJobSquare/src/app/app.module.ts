import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './modules/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DigiArbetsformedlingenAngularModule } from '@digi/arbetsformedlingen-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AuthComponent } from './pages/auth/auth.component';
import { GeninfoComponent } from './components/geninfo/geninfo.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FeedComponent,
    JobsComponent,
    MessagesComponent,
    AuthComponent,
    GeninfoComponent,
    ExperienceComponent,
    SkillsComponent,
    InterestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DigiArbetsformedlingenAngularModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
