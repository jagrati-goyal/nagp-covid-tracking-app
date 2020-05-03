import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CovidDataService } from './covid-data.service';

describe('CovidDataService', () => {
    let service: CovidDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CovidDataService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CovidDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return states data from external URI', () => {
        const states = service.getStatesData();
        expect(states).toBeTruthy();
    });

    it('should return districts data of a state from external URI', () => {
        const state = service.getDistrictData();
        expect(state).toBeTruthy();
    });

});
