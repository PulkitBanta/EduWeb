import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlatformComponent } from './platform/platform.component';
import { SessionComponent } from './session/session.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'platform', canActivate: [AuthGuard], children: [
    { path: '', component: PlatformComponent },
    { path: 'session', component: SessionComponent },
    { path: 'download', component: DownloadsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
