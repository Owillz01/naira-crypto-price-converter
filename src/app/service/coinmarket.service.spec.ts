import { TestBed } from '@angular/core/testing';

import { CoinmarketService } from './coinmarket.service';

describe('CoinmarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinmarketService = TestBed.get(CoinmarketService);
    expect(service).toBeTruthy();
  });
});
