import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  isUserLoggedIn() {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
    return this.isLogin;
  }
}
