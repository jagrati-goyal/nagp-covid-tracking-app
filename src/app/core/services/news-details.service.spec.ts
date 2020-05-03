import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsDetailsService } from './news-details.service';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';


describe('NewsDetailsService', () => {
    let service: NewsDetailsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [NewsDetailsService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NewsDetailsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get news from in-memory-web-api', () => {
        const news = service.getNewsDetails();
        expect(news).toBeTruthy();
    });

    it('should add new news in in-memory-data-service', () => {
        const dummyNews: INewsDetails = { id: 3, title: "Test", description: "Test", summary: "Test", fullNews: "Test" };
        const status = service.addNews(dummyNews);
        expect(status).toBeTruthy();
    });

});
