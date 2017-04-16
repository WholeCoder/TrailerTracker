import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerFormComponent } from './trailer-form.component';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';

describe('TrailerFormComponent', () => {
  let component: TrailerFormComponent;
  let fixture: ComponentFixture<TrailerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerFormComponent ],
      imports:      [HttpModule, RouterTestingModule, StoreModule.provideStore({})],

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
