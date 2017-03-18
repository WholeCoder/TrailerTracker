import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerFormComponent } from './trailer-form.component';

describe('TrailerFormComponent', () => {
  let component: TrailerFormComponent;
  let fixture: ComponentFixture<TrailerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
