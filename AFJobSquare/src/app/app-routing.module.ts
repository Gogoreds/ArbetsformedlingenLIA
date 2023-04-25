import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
