import { Component, OnInit } from '@angular/core';
import { NewsDetailsService } from 'src/app/core/services/news-details.service';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: INewsDetails[];

  constructor(private newsService: NewsDetailsService) {
  }

  ngOnInit(): void {
    this.getAllNews();
  }


  getAllNews() {
    this.newsService.getNewsDetails().subscribe(data => {
      this.news = data;
    })
    return this.news;
  }

  onFullNews() {
    console.log("button clicked");
    //console.log(id);
  }

}
