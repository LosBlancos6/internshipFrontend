import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss']
})
export class CreateSkillComponent implements OnInit {

  public validateForm!: FormGroup;
  public listOfData = [];

  constructor(private fb: FormBuilder, private skillService: SkillService, private router: Router) {
  }

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }


  createSkill(): void {

    const name = this.validateForm.value.name;

    const Object = {
      name: name
    }

    this.skillService.createSkill(Object).subscribe(data => {
      alert('Add Successful!');
      this.ngOnInit();
      this.router.navigateByUrl(`/dashboard/list-of-skills`);
    })

  }

}
