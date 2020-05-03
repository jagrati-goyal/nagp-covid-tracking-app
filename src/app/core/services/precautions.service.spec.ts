import { TestBed } from '@angular/core/testing';
import { CovidDataService } from './covid-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrecautionService } from './precautions.service';


describe('PrecautionService', () => {
  let service: PrecautionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ PrecautionService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecautionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all precautions', () => {
    const precautions = service.getAllPrecautions();
    expect(precautions).toBeTruthy();
  });

  it('should length of all precautions to be 6', () => {
      const precautions = service.getAllPrecautions();
      const length = precautions.length;
      expect(length).toEqual(6);
  })

  it('precaution 5 should contain stay home ', () => {
    const precaution = service.getAllPrecautions();
    const precaution5 = precaution[4];
    expect(precaution5.text).toContain("Stay home");
  })

});
