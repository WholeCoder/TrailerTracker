import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerTableComponent } from './trailer-table.component';

describe('TrailerTableComponent', () => {
  let component: TrailerTableComponent;
  let fixture: ComponentFixture<TrailerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
