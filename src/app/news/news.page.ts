import { Component, OnInit } from "@angular/core";
import { NewsService } from "./news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  data: any;
  search = "covid";
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService
      .getData(`everything?q=${this.search}&from=2020-06-09&sortBy=publishedAt`)
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }
  onUpdateServerName(event: Event) {
    this.search = (<HTMLInputElement>event.target).value;
  }
  goSearch() {
    this.newsService
      .getData(`everything?q=${this.search}&from=2020-06-09&sortBy=publishedAt`)
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }
}
