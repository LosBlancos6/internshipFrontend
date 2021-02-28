import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSkillToUserComponent } from './assign-skill-to-user.component';

describe('AssignSkillToUserComponent', () => {
  let component: AssignSkillToUserComponent;
  let fixture: ComponentFixture<AssignSkillToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSkillToUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSkillToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
