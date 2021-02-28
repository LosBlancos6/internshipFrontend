import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSkillFromUserComponent } from './remove-skill-from-user.component';

describe('RemoveSkillFromUserComponent', () => {
  let component: RemoveSkillFromUserComponent;
  let fixture: ComponentFixture<RemoveSkillFromUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveSkillFromUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSkillFromUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
