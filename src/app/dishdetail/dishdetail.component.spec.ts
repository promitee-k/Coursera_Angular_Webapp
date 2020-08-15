import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dishdetailComponent } from './dishdetail.component';

describe('dishdetailComponent', () => {
  let component: dishdetailComponent;
  let fixture: ComponentFixture<dishdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dishdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
