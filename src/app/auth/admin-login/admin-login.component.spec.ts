import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminLoginComponent } from './admin-login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/IUser';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ToastrModule.forRoot()],
      declarations: [AdminLoginComponent],
      providers: [AuthService, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display bad credentials if username is not admin', () => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.debugElement.componentInstance;
    let authService = fixture.debugElement.injector.get(AuthService);
    let user: IUser = { username: "test", password: "test" };
    let isValid = authService.validateUser(user);
    if (!isValid) {
      component.invalidFormValueMessage = "Please enter valid credentials..!!";
    }
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.invalid').textContent).toContain("Please enter valid credentials..!!");
  });

  it('When username is blank, username field should display red outline', () => {
    const inputs = fixture.debugElement.nativeElement.querySelectorAll('input');
    inputs[0].value = '';
    inputs[0].classList = 'ng-invalid';

    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    let updatesinputs = fixture.debugElement.nativeElement.querySelectorAll('input');
    const userNameInput = updatesinputs[0];
    expect(userNameInput.classList).toContain('ng-invalid');
  })
});
