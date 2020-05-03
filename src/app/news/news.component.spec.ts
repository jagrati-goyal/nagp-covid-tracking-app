import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { By, BrowserModule } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewsDetailsService } from 'src/app/core/services/news-details.service';
import { Router } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news.component';

let comp: NewsComponent;
let fixture: ComponentFixture<NewsComponent>;

describe('NewsComponent', () => {
    let component: NewsComponent;
    let fixture: ComponentFixture<NewsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule,
                BrowserModule,
                RouterTestingModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                ToastrModule.forRoot()],
            declarations: [NewsComponent],
            providers: [ToastrService, NewsDetailsService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should set isAdminLoggedIn property based on localStorage value', () => {
        localStorage.setItem("TOKEN", "token");
        let value = localStorage.getItem("TOKEN");
        if (value === null || value === undefined) {
            component.isAdminLoggedIn = false;
        } else {
            component.isAdminLoggedIn = true;
        }
        expect(component.isAdminLoggedIn).toBeTruthy();
        localStorage.removeItem("TOKEN");
    });

    it('isAdminLoggedIn property should be false as localstorage is empty', () => {
        let value = localStorage.getItem("TOKEN");
        if (value === null || value === undefined) {
            component.isAdminLoggedIn = false;
        } else {
            component.isAdminLoggedIn = true;
        }
        expect(component.isAdminLoggedIn).toBeFalsy();
    })

});
