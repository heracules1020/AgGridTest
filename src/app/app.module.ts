import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { MyGridComponentComponent } from './my-grid-component/my-grid-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponentComponent } from './image-component/image-component.component';
import { CountStatusBarComponent } from './count-status-bar-component/count-status-bar-component.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MyGridComponentComponent,
    ImageComponentComponent,
    CountStatusBarComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ImageComponentComponent, CountStatusBarComponent ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
