import { TestBed } from '@angular/core/testing';

import { HelloWorldNoNgrxService } from './hello-world-no-ngrx.service';

describe('HelloWorldNoNgrxService', () => {
  let service: HelloWorldNoNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldNoNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
