import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public id: any;
  public validateForm!: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.extractId();
    this.setupForm();
    this.getDetails();
  }

  getDetails(): void {
    this.userService.getuser(this.id).subscribe(data => {
      const formValues = {
        name: data.name,
        email: data.email,
        number: data.number,
        dateOfBirth: data.dateOfBirth,
      }
      this.validateForm.setValue(formValues);
    })
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      number: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  onEdit() {
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
    this.userService.editUser(this.id, Object).subscribe(data => {
      alert('Edit Successful!');
      this.ngOnInit();
      this.router.navigateByUrl('dashboard/list-of-users');
    })
  }

}


