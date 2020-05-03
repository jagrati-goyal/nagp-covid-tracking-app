import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { NewsDetailsService } from 'src/app/core/services/news-details.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addNewsForm: FormGroup;

  constructor(private newsService: NewsDetailsService, private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.addNewsForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'summary': new FormControl(null, Validators.required),
      'fullNews': new FormControl(null, Validators.required)
    });
  }

  onAddNews(newsForm: INewsDetails) {
    this.newsService.addNews(newsForm).subscribe();
    this.router.navigate(['/news']);
    this.toastrService.success("News added successfully.!!", "Covid Tracking App");
  }
}
