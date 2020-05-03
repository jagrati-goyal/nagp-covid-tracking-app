import { Router, Routes } from "@angular/router";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NewsComponent } from 'src/app/news/news.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { AppComponent } from 'src/app/app.component';

describe('Routing Module', () => {
    let location: Location;
    let router: Router;
    let fixture;

    const routes: Routes = [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'news', component: NewsComponent },
        { path: '**', component: PagenotfoundComponent, pathMatch: 'full' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [AppComponent]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('should navigate to "" redirects you to /dashboard', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/dashboard');
    }));

    it('should navigate to "news" takes you to /news', fakeAsync(() => {
        router.navigate(["/news"]);
        tick();
        expect(location.path()).toBe("/news");
    }));
});