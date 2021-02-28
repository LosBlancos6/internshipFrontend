import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-list-of-skills',
  templateUrl: './list-of-skills.component.html',
  styleUrls: ['./list-of-skills.component.scss']
})
export class ListOfSkillsComponent implements OnInit {

  public listOfData: any = [];

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.skillService.getAllSkills().subscribe(data => {
      this.listOfData = data;
    })
  }

}
