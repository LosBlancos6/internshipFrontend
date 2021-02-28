import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensComponent } from './intens.component';

describe('IntensComponent', () => {
  let component: IntensComponent;
  let fixture: ComponentFixture<IntensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
