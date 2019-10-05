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

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });
  it('grid API is available after `detectChanges`', () => {
      fixture.detectChanges();
      expect(component.gridOptions.api).toBeTruthy();
  });
  it('the grid cells should be as expected', () => {
    const appElement = fixture.nativeElement;

    const cellElements = appElement.querySelectorAll('.ag-cell-value');
    expect(cellElements.length).toEqual(4);
    expect(cellElements[0].textContent).toEqual('https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg');
    expect(cellElements[1].textContent).toEqual('2011-05-12T20:01:31.000Z');
    expect(cellElements[2].textContent).toEqual('Lil Wayne - John (Explicit) ft. Rick Ross');
    expect(cellElements[2].textContent).toEqual('Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.');
  });
});
