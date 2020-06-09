import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  // { paht: 'login', component: LoginComponent },
  // { paht: 'platform', component: PlatformComponent },
  // { paht: 'platform/session', component: SessionComponent },
  // { paht: 'platform/download', component: DownloadsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
