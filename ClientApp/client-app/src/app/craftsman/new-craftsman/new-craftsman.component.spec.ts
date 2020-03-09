import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCraftsmanComponent } from './new-craftsman.component';

describe('NewCraftsmanComponent', () => {
  let component: NewCraftsmanComponent;
  let fixture: ComponentFixture<NewCraftsmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCraftsmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCraftsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
