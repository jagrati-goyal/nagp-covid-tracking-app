import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  invalidFormValueMessage: string;

  constructor(private authService: AuthService,
    private route: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  onLogin(form: NgForm) {
    if (this.authService.validateUser(form.value)) {
      this.authService.login(form.value.username);
      this.route.navigate(['/dashboard']);
      this.invalidFormValueMessage = "";
      this.toastrService.success("Admin logged in successfully..!!", "Covid Tracking App");
    } else {
      this.invalidFormValueMessage = "Please enter valid credentials..!!";
      this.toastrService.error("No such user found..!!", "Covid Tracking App");
    }
  }
}
