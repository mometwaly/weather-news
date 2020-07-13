import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elements = [{
    'name': 'Weather',
    'link': '/weather',
    'class': 'fas fa-cloud fa-5x'
  },
  {
    'name': 'News',
    'link': '/news',
    'class': 'fas fa-newspaper fa-5x'

  }]

  constructor() { }

  ngOnInit(): void {
  }

}
