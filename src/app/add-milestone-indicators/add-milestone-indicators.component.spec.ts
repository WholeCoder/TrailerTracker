import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilestoneIndicatorsComponent } from './add-milestone-indicators.component';

describe('AddMilestoneIndicatorsComponent', () => {
  let component: AddMilestoneIndicatorsComponent;
  let fixture: ComponentFixture<AddMilestoneIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMilestoneIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMilestoneIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
