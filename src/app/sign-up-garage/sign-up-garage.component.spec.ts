import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGarageComponent } from './sign-up-garage.component';

describe('SignUpGarageComponent', () => {
  let component: SignUpGarageComponent;
  let fixture: ComponentFixture<SignUpGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
