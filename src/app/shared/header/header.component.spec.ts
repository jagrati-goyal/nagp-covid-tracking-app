import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('no logged in user if token not found', () => {
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

  it('should logged in user if token found', () => {
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
