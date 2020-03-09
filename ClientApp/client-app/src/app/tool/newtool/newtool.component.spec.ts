import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtoolComponent } from './newtool.component';

describe('NewtoolComponent', () => {
  let component: NewtoolComponent;
  let fixture: ComponentFixture<NewtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
