import { Component } from '@angular/core';

import { IStatusPanelParams } from 'ag-grid-community';

@Component({
    selector: 'app-status-component',
    template: `
        <div class='ag-name-value'>
            <span>Row Total Count&nbsp;:&nbsp;</span>
            <span class='ag-name-value-value'>{{count}}</span>
        </div>
    `
})
export class CountStatusBarComponent {
    private params: IStatusPanelParams;
    private model: any;
    private count: null;

    agInit(params: IStatusPanelParams): void {
        this.params = params;
        this.params.api.addEventListener('gridReady', this.onGridReady.bind(this));
    }

    onGridReady() {
        this.model = this.params.api.getModel();
        this.count = this.model.rowsToDisplay.length;
    }
}
