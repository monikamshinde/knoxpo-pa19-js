import { TestBed } from '@angular/core/testing';

import { KnoxposervService } from './knoxposerv.service';

describe('KnoxposervService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnoxposervService = TestBed.get(KnoxposervService);
    expect(service).toBeTruthy();
  });
});
