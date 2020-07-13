import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-user-country',
  templateUrl: './user-country.component.html',
  styleUrls: ['./user-country.component.scss']
})
export class UserCountryComponent implements OnInit {
  ipAddress: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getIPAddress().subscribe((response: any) => {
      this.ipAddress = response.ip;
      console.log(this.ipAddress)
    })
  }
  getCountry() {
    console.log("button is clicked from user-country componenet")
  }

}
