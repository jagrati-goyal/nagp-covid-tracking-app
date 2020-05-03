import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { By, BrowserModule } from '@angular/platform-browser';
import { AddNewsComponent } from './add-news.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewsDetailsService } from 'src/app/core/services/news-details.service';
import { Router } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let comp: AddNewsComponent;
let fixture: ComponentFixture<AddNewsComponent>;

describe('AddNewsComponent', () => {
    let component: AddNewsComponent;
    let fixture: ComponentFixture<AddNewsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule,
                BrowserModule,
                RouterTestingModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                ToastrModule.forRoot()],
            declarations: [AddNewsComponent],
            providers: [ToastrService, NewsDetailsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    function updateForm(title, description, summary, fullNews) {
        component.addNewsForm.controls['title'].setValue(title);
        component.addNewsForm.controls['description'].setValue(description);
        component.addNewsForm.controls['summary'].setValue(summary);
        component.addNewsForm.controls['fullNews'].setValue(fullNews);
    }

    it('created a form with news input and submit button', () => {
        const titleContainer = fixture.debugElement.nativeElement.querySelector('#title');
        const descContainer = fixture.debugElement.nativeElement.querySelector('#description');
        const summaryContainer = fixture.debugElement.nativeElement.querySelector('#summary');
        const fullNewsContainer = fixture.debugElement.nativeElement.querySelector('#fullNews');
        expect(titleContainer).toBeDefined();
        expect(descContainer).toBeDefined();
        expect(summaryContainer).toBeDefined();
        expect(fullNewsContainer).toBeDefined();
    });

    it('When title is blank, title field should display red outline', () => {
        updateForm('', "Description", "Summary", "Full News");
        fixture.detectChanges();

        const button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.detectChanges();

        const inputs = fixture.debugElement.nativeElement.querySelectorAll('input');
        const titleInput = inputs[0];

        expect(titleInput.classList).toContain('ng-invalid');
    });

});
