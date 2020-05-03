import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsService } from 'src/app/core/services/news-details.service';
import { NewsDetailsComponent } from './news-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { NewsInMemoryDataService } from 'src/app/core/services/news-in-memory-data.service';

let comp: NewsDetailsComponent;
let fixture: ComponentFixture<NewsDetailsComponent>;

describe('NewsDetailsComponent', () => {
    let component: NewsDetailsComponent;
    let fixture: ComponentFixture<NewsDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [NewsDetailsComponent],
            providers: [NewsDetailsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should get all news from the service', () => {
        let service = fixture.debugElement.injector.get(NewsDetailsService);
        expect(service.getNewsDetails()).toBeTruthy();
    });

    it('should contain Work from home in news 2 title', () => {
        let service = fixture.debugElement.injector.get(NewsInMemoryDataService);
        let news = service.createDb().newDetail;
        let specificNews = news[1];
        expect(specificNews.title).toContain("Work from home");
    });

});
