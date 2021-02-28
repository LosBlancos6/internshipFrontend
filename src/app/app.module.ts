import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { IntensComponent } from './pages/intens/intens.component';
import { ListOfUsersComponent } from './pages/intens/list-of-users/list-of-users.component';
import { CreateUserComponent } from './pages/intens/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './pages/intens/edit-user/edit-user.component';
import { AssignSkillToUserComponent } from './pages/intens/assign-skill-to-user/assign-skill-to-user.component';
import { RemoveSkillFromUserComponent } from './pages/intens/remove-skill-from-user/remove-skill-from-user.component';
import { CreateSkillComponent } from './pages/intens/create-skill/create-skill.component';
import { ListOfSkillsComponent } from './pages/intens/list-of-skills/list-of-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    NotFoundComponent,
    IntensComponent,
    ListOfUsersComponent,
    CreateUserComponent,
    EditUserComponent,
    AssignSkillToUserComponent,
    RemoveSkillFromUserComponent,
    CreateSkillComponent,
    ListOfSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
