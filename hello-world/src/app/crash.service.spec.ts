import { TestBed, inject } from '@angular/core/testing';

import { CrashService } from './crash.service';

describe('CrashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrashService]
    });
  });

  it('should be created', inject([CrashService], (service: CrashService) => {
    expect(service).toBeTruthy();
  }));
});
