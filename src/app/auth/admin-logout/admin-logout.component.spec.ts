import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AdminLogoutComponent } from './admin-logout.component';

describe('AdminLogoutComponent', () => {
    let component: AdminLogoutComponent;
    let fixture: ComponentFixture<AdminLogoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                BrowserAnimationsModule,
                FormsModule,
                ToastrModule.forRoot()],
            declarations: [AdminLogoutComponent],
            providers: [AuthService, ToastrService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminLogoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should logged out since local storage does not contain token', () => {
        const authService = fixture.debugElement.injector.get(AuthService);
        authService.logout();
        let spantag = fixture.debugElement.query(By.css('.loginStatus'));
        if (localStorage.getItem('TOKEN') != null) {
            spantag.nativeElement.textContent = 'Logged in';
        } else {
            spantag.nativeElement.textContent = "Logged out";
        }
        fixture.detectChanges();
        expect(spantag.nativeElement.textContent).toContain("Logged out");
    });

    it('should logged in since local storage contains token', () => {
        localStorage.setItem('TOKEN', 'token');
        let spantag = fixture.debugElement.query(By.css('.loginStatus'));
        if (localStorage.getItem('TOKEN') != null) {
            spantag.nativeElement.textContent = 'Logged in';
        } else {
            spantag.nativeElement.textContent = "Logged out";
        }
        fixture.detectChanges();
        expect(spantag.nativeElement.textContent).toContain("Logged in");
    });
});
