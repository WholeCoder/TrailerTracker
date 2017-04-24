import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {} from 'jasmine';
import { ResetUserPasswordComponent } from './reset-user-password.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {FormBuilder} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('ResetUserPasswordComponent', () => {
  let component: ResetUserPasswordComponent;
  let fixture: ComponentFixture<ResetUserPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [ FormBuilder ],
      declarations: [ ResetUserPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
