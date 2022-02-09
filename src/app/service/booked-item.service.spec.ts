import { TestBed } from '@angular/core/testing';

import { BookedItemService } from './booked-item.service';

describe('BookedItemService', () => {
  let service: BookedItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
