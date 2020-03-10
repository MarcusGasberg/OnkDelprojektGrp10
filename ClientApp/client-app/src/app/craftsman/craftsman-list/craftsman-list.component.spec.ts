import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsmanListComponent } from './craftsman-list.component';

describe('CraftsmanListComponent', () => {
  let component: CraftsmanListComponent;
  let fixture: ComponentFixture<CraftsmanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftsmanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftsmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
