import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  public form!: FormGroup;
  public listOfData: any = [];

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDetails();
    this.form = this.setupForm();
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      nameOfUser: [''],
      nameOfSkill: [''],
    });
  }


  getDetails(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.listOfData = data;
    })
  }

  onEdit(id: any): void {
    this.router.navigateByUrl(`dashboard/edit-user/${id}`);
  }

  onDelete(id: any): void {
    this.userService.deleteUser(id).subscribe(data => {
      alert('Delete Successful!');
      this.ngOnInit();
    })
  }

  onAssign(): void {
    this.router.navigateByUrl(`dashboard/assign-skill-to-user`);
  }

  onRemove(): void {
    this.router.navigateByUrl(`dashboard/remove-skill-from-user`);
  }

  searchByName(): void {
    console.log(this.form.value);
    this.userService.getUserByName(this.form.value.nameOfUser).subscribe(data => {
      this.listOfData = data;
    })
  }

  searchBySkill(): void {
    console.log(this.form.value);
    this.userService.getUserBySkill(this.form.value.nameOfSkill).subscribe(data => {
      this.listOfData = data;
    })
  }



}
