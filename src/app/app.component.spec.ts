import { TestBed, async } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyGridComponentComponent } from './my-grid-component/my-grid-component.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { CountStatusBarComponent } from './count-status-bar-component/count-status-bar-component.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ImageComponentComponent,
        MyGridComponentComponent,
        CountStatusBarComponent
      ],
      imports: [
        BrowserModule,
        AgGridModule.withComponents([ImageComponentComponent, CountStatusBarComponent]),
        HttpClientModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ag-grid-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ag-grid-test');
  });
});
