import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: []
})

export class AdminLogoutComponent {
  constructor(private authService: AuthService, private route: Router,
    private toastrService: ToastrService) {
    this.authService.logout();
    this.route.navigate(['/dashboard']);
    this.toastrService.success("Admin Logout Successfully.!!", "Covid Tracking App");
  }
}