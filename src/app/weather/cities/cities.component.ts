import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  countryCode = '';
  cities = [];
  isLoading = false;
  constructor(private weatherSerives: WeatherService) { }

  ngOnInit(): void {
    this.countryCode = this.weatherSerives.countryCode;
    this.weatherSerives.getCities(this.countryCode).subscribe((response : any)=>{
      for(let i of response['data']){
        this.cities.push(i.name);
      }
    })

  }


}
