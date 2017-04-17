import {TableDemoComponent} from './table.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {TrailerService} from '../trailer.service';
import {PassTrailerDataService} from '../pass-trailer-data.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {StatusService} from '../status.service';

import {RouterTestingModule} from '@angular/router/testing';

describe('TableDemoComponent', () => {
  let component: TableDemoComponent;
  let fixture: ComponentFixture<TableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableDemoComponent],
      imports: [BrowserTestingModule, RouterTestingModule, HttpModule],
      providers: [TrailerService, PassTrailerDataService, StatusService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
