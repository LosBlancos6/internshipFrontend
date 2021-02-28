import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intens',
  templateUrl: './intens.component.html',
  styleUrls: ['./intens.component.scss']
})
export class IntensComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCreateUser() {
    this.router.navigateByUrl('dashboard/create-user');
  }

  toListOfUsers() {
    this.router.navigateByUrl('dashboard/list-of-users');
  }

  toCreateSkill() {
    this.router.navigateByUrl('dashboard/create-skill');
  }

  toListOfSkills() {
    this.router.navigateByUrl('dashboard/list-of-skills');
  }

}
