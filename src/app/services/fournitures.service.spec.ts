import { TestBed, inject } from '@angular/core/testing';

import { FournituresService } from './fournitures.service';

describe('FournituresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FournituresService]
    });
  });

  it('should be created', inject([FournituresService], (service: FournituresService) => {
    expect(service).toBeTruthy();
  }));
});
