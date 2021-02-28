import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-remove-skill-from-user',
  templateUrl: './remove-skill-from-user.component.html',
  styleUrls: ['./remove-skill-from-user.component.scss']
})
export class RemoveSkillFromUserComponent implements OnInit {

  public listOfUsers: any = [];
  public listOfSkills: any = [];
  public validateForm!: FormGroup;

  constructor(private userService: UserService, private skillService: SkillService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getDetails();
    this.setupForm();
  }

  getDetails(): void {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.listOfUsers = data;
    })

    this.skillService.getAllSkills().subscribe(data => {
      console.log(data);
      this.listOfSkills = data;
    })
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      userId: [null, [Validators.required]],
      skillId: [null, [Validators.required]],
    });
  }

  remove(): void {

    const userId = this.validateForm.value.userId;
    const skillId = this.validateForm.value.skillId;

    const Object = {
      userId: userId,
      skillId: skillId
    }

    console.log(Object);

    this.userService.removeSkillFromUser(Object).subscribe(data => {
      alert('Remove Successful!');
      this.ngOnInit();
      this.router.navigateByUrl(`/dashboard/list-of-users`);
    })

  }

}
