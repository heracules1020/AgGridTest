import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { FetchApiData } from './service';

describe('FetchApiData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchApiData]
    });
  });

  it(
    'should get data',
    inject(
      [HttpTestingController, FetchApiData],
      (
        httpMock: HttpTestingController,
        fetchApiData: FetchApiData
      ) => {
        fetchApiData.getRowData().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body.length).toEqual(50);
          }
        });
        const mockReq = httpMock.expectOne(fetchApiData.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
      }
    )
  );
});
