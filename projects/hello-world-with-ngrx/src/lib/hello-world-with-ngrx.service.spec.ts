import { TestBed } from '@angular/core/testing';

import { HelloWorldWithNgrxService } from './hello-world-with-ngrx.service';

describe('HelloWorldWithNgrxService', () => {
  let service: HelloWorldWithNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldWithNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
