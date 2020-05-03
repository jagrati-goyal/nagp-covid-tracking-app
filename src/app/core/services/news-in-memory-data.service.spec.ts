import { TestBed } from '@angular/core/testing';

import { NewsInMemoryDataService } from './news-in-memory-data.service';

describe('NewsInMemoryDataService', () => {
  let service: NewsInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create in-memory database', () => {
    const db = service.createDb();
    expect(db).toBeTruthy();
  });

  it('should auto-generate next id', () => {
    const db = service.createDb();
    const length = db.newDetail.length;
    const genId = service.genId(db.newDetail);
    expect(genId).toEqual(length + 1);
  })

});
