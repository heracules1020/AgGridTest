import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MyGridComponentComponent } from './my-grid-component.component';
import { ImageComponentComponent } from '../image-component/image-component.component';
import { CountStatusBarComponent } from '../count-status-bar-component/count-status-bar-component.component';

describe('MyGridComponentComponent', () => {
  let component: MyGridComponentComponent;
  let fixture: ComponentFixture<MyGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          BrowserModule,
          AgGridModule.withComponents([ImageComponentComponent, CountStatusBarComponent]),
          HttpClientModule
        ],
        declarations: [MyGridComponentComponent, ImageComponentComponent, CountStatusBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyGridComponentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('grid API is available after `detectChanges`', () => {
      fixture.detectChanges();
      expect(component.gridOptions.api).toBeTruthy();
  });
  it('Grid should be created', () => {
    expect(component).toBeTruthy();
});
  it('data should be true', () => {
    expect(component.getFetchData()).not.toBeNull();
  });
  it('the grid cells should exist', () => {
    const appElement = fixture.nativeElement;

    const cellElements = appElement.querySelectorAll('.ag-cell-value');
    expect(cellElements.length > 0).toBeTruthy();
  });
});
