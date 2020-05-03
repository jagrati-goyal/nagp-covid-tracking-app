import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  creator = "Jagrati Goyal";
  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
