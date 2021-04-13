/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataProviderService } from './data-provider.service';

describe('Service: DataProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProviderService]
    });
  });

  it('should ...', inject([DataProviderService], (service: DataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
