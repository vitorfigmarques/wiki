import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  posts$ = this.homeService.fetchLatest();
  constructor(private homeService: HomeService) {
    this.posts$.subscribe(console.log)
  }
}
