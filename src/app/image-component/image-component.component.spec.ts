import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MyGridComponentComponent } from '../my-grid-component/my-grid-component.component';
import { ImageComponentComponent } from '../image-component/image-component.component';
import { CountStatusBarComponent } from '../count-status-bar-component/count-status-bar-component.component';


describe('ImageComponentComponent', () => {
  let component: ImageComponentComponent;
  let fixture: ComponentFixture<ImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageComponentComponent,
        MyGridComponentComponent,
        CountStatusBarComponent
      ],
      imports: [
        BrowserModule,
        AgGridModule.withComponents([ImageComponentComponent, CountStatusBarComponent]),
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
