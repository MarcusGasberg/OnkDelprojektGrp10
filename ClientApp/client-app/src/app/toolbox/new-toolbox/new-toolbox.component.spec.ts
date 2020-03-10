import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToolboxComponent } from './new-toolbox.component';

describe('NewToolboxComponent', () => {
  let component: NewToolboxComponent;
  let fixture: ComponentFixture<NewToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
