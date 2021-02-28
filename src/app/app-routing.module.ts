import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { AssignSkillToUserComponent } from './pages/intens/assign-skill-to-user/assign-skill-to-user.component';
import { CreateSkillComponent } from './pages/intens/create-skill/create-skill.component';
import { CreateUserComponent } from './pages/intens/create-user/create-user.component';
import { EditUserComponent } from './pages/intens/edit-user/edit-user.component';
import { IntensComponent } from './pages/intens/intens.component';
import { ListOfSkillsComponent } from './pages/intens/list-of-skills/list-of-skills.component';
import { ListOfUsersComponent } from './pages/intens/list-of-users/list-of-users.component';
import { RemoveSkillFromUserComponent } from './pages/intens/remove-skill-from-user/remove-skill-from-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/welcome' },
  { path: 'home', pathMatch: 'full', redirectTo: '/home/welcome' },
  // { path: 'dashboard', pathMatch: 'full', redirectTo: '/dashboard/list-of-users' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'not-found', component: NotFoundComponent },
    ]
  },
  {
    path: 'dashboard', component: IntensComponent, children: [

      //Users
      { path: 'list-of-users', component: ListOfUsersComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'assign-skill-to-user', component: AssignSkillToUserComponent },
      { path: 'remove-skill-from-user', component: RemoveSkillFromUserComponent },

      //Skills
      { path: 'create-skill', component: CreateSkillComponent },
      { path: 'list-of-skills', component: ListOfSkillsComponent },

    ]
  },
  { path: '**', redirectTo: '/home/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
