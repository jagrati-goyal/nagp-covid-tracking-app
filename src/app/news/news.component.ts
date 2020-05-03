import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isAdminLoggedIn: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  isAdminLogged(): boolean {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.isAdminLoggedIn = false;
    }
    return this.isAdminLoggedIn;
  }

}
