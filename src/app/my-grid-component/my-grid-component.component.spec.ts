import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridComponentComponent } from './my-grid-component.component';

describe('MyGridComponentComponent', () => {
  let component: MyGridComponentComponent;
  let fixture: ComponentFixture<MyGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
