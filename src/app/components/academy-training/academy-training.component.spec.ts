import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyTrainingComponent } from './academy-training.component';

describe('AcademyTrainingComponent', () => {
  let component: AcademyTrainingComponent;
  let fixture: ComponentFixture<AcademyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
