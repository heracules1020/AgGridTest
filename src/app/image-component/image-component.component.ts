import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent {

  private params: any;
  agInit(params: any): void {
      this.params = params;
  }
  getStyles() {
    const styles = {
      width: this.params.value.width + 'px',
      height: this.params.value.height + 'px'
    };
    return styles;
  }
}
