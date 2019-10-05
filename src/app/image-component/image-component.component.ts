import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent {

  private params: any;
  private styles: any;
  agInit(params: any): void {
      this.params = params;
      this.styles = {
        width: this.params.value.width + 'px',
        height: this.params.value.height + 'px'
      };
  }
}
