import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public validateForm!: FormGroup;
  public listOfData = [];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      number: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }


  createUser(): void {

    const name = this.validateForm.value.name;
    const dateOfBirth = this.validateForm.value.dateOfBirth;
    const email = this.validateForm.value.email;
    const number = this.validateForm.value.number;

    const Object = {
      name: name,
      dateOfBirth: dateOfBirth,
      email: email,
      number: number
    }

    this.userService.createUser(Object).subscribe(data => {
      alert('Add Successful!');
      this.ngOnInit();
      this.router.navigateByUrl(`/dashboard/list-of-users`);
    })

  }

}
