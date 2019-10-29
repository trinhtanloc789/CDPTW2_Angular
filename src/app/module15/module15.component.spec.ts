import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module15Component } from './module15.component';

describe('Module15Component', () => {
  let component: Module15Component;
  let fixture: ComponentFixture<Module15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
