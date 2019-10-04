import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { FetchApiData } from '../service';
import { ImageComponentComponent } from '../image-component/image-component.component';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-my-grid-component',
  templateUrl: './my-grid-component.component.html',
  styleUrls: ['./my-grid-component.component.scss']
})
export class MyGridComponentComponent implements OnInit {

  private gridOptions: GridOptions;
  constructor(private fetchApiData: FetchApiData) {
  }
  ngOnInit() {
    this.gridOptions =  {
      pagination: true,
      rowSelection: 'multiple',
      paginationPageSize : 10,
      rowHeight : 90,
      getContextMenuItems: this.getContextMenuItems
    } as GridOptions;
    this.gridOptions.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
    };
    this.gridOptions.columnDefs = [
      {
        headerName: '',
        field: 'checkbox',
        width: 40,
        filter: false,
        sortable: false,
        resizable: false,
        checkboxSelection(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        onCellContextMenu(params) {
          return params.api.hidePopupMenu();
        }
      },
      {
        headerName: '',
        field: 'image',
        cellRendererFramework: ImageComponentComponent,
        width: 140,
        onCellContextMenu(params) {
          return params.api.hidePopupMenu();
        },
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        onCellContextMenu(params) {
          return params.api.hidePopupMenu();
        },
        width: 200
      },
      {
        headerName: 'Video Title',
        field: 'title',
        width: 500
      },
      {
        headerName: 'Description',
        field: 'description',
        onCellContextMenu(params) {
          return params.api.hidePopupMenu();
        },
        width: 500
      }
    ];
    this.setData();
  }
  getFetchData(): Observable<any[]> {
    return this.fetchApiData.getRowData();
  }
  setData() {
    this.getFetchData().subscribe(data => {
      const finalData = data.items.map(item => (
        {
          image: item.snippet.thumbnails.default,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          description: item.snippet.description,
          videoId: item.id.videoId
        }
      ));
      this.gridOptions.api.setRowData(finalData);
    });
  }
  getContextMenuItems(params) {
    const result = [
      {
        name: 'Open in new tab',
        action: () => {
          const selectedVideo = params.node.data.videoId;
          window.open('https://www.youtube.com/watch?v=' + selectedVideo, '_blank');
        },
        cssClasses: ['blueFont', 'bold']
      },
      {
        name: 'Copy',
        action: () => {
          window.alert('Copy ');
        }
      },
      {
        name: 'Paste',
        action: () => {
          window.alert('Paste ');
        },
        disabled: true
      }
    ];
    return result;
  }
}
