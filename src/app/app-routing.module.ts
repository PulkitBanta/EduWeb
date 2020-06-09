import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlatformComponent } from './platform/platform.component';
import { SessionComponent } from './session/session.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'platform/session', component: SessionComponent },
  { path: 'platform/download', component: DownloadsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
