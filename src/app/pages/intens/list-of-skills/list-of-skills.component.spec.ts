import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSkillsComponent } from './list-of-skills.component';

describe('ListOfSkillsComponent', () => {
  let component: ListOfSkillsComponent;
  let fixture: ComponentFixture<ListOfSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
