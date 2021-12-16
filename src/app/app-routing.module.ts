import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LoginAppComponent } from './components/login-app/login-app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegAppComponent } from './components/reg-app/reg-app.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'login', component: LogInComponent },
  // { path: 'register', component: RegisterComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginAppComponent },
  { path: 'register', component: RegAppComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
