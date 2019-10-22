import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(() => service = new AuthService(null));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
