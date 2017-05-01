import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

import {UserTableComponent} from "./user-table.component";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserTestingModule} from "@angular/platform-browser/testing";
import {TransferUserInfoForPasswordResetService} from "../transfer-user-info-for-password-reset.service";

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [UserTableComponent],
      imports: [BrowserTestingModule, HttpModule, RouterTestingModule],
      providers: [TransferUserInfoForPasswordResetService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
