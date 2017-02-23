import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewCoonentComponent } from './my-new-coonent.component';

describe('MyNewCoonentComponent', () => {
  let component: MyNewCoonentComponent;
  let fixture: ComponentFixture<MyNewCoonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewCoonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewCoonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
