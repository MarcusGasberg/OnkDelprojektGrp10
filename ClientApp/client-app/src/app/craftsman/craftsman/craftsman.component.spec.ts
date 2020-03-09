import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsmanComponent } from './craftsman.component';

describe('CraftsmanComponent', () => {
  let component: CraftsmanComponent;
  let fixture: ComponentFixture<CraftsmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftsmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
