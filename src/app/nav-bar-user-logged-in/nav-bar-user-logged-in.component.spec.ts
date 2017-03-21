import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUserLoggedInComponent } from './nav-bar-user-logged-in.component';

describe('NavBarUserLoggedInComponent', () => {
  let component: NavBarUserLoggedInComponent;
  let fixture: ComponentFixture<NavBarUserLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarUserLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarUserLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
