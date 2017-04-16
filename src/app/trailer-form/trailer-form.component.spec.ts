import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {} from 'jasmine';
import {TrailerFormComponent} from './trailer-form.component';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {FormBuilder} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {StatusService} from '../status.service';
import {PassTrailerDataService} from '../pass-trailer-data.service';
import {CustomerService} from '../customer.service';
import {AccountService} from '../account.service';
import {VehicleTypeService} from '../vehicle-type.service';
import {LocationService} from '../location.service';

describe('TrailerFormComponent', () => {
  let component: TrailerFormComponent;
  let fixture: ComponentFixture<TrailerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerFormComponent],
      imports: [HttpModule, RouterTestingModule, StoreModule.provideStore({})],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [FormBuilder, StatusService, PassTrailerDataService, CustomerService, AccountService,
                  VehicleTypeService, LocationService]
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
