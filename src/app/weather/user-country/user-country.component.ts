import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-country',
  templateUrl: './user-country.component.html',
  styleUrls: ['./user-country.component.scss']
})
export class UserCountryComponent implements OnInit {
  ipAddress: string;
  country: string;
  flag: string;
  countryCode: string;
  temp = null;
  isLoading = false;
  constructor(private weatherService: WeatherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.weatherService.getIPAddress().subscribe((response: any) => {
      this.ipAddress = response.ip;
      console.log(this.ipAddress)
    })
  }
  getCountry() {
    this.isLoading = true;
    this.weatherService.getDataByIp(this.ipAddress).subscribe((response: any) => {
      this.country = response.country_name;
      this.flag = response.location["country_flag"];
      this.weatherService.countryCode = response.country_code;
      this.weatherService.getTemp(this.country).subscribe((response: any) => {
        this.isLoading = false;
        this.temp = response.current.temp_c;
      });
    });
  }
  getNearestCapital() {
    this.router.navigate(['nearest-cities'],{relativeTo : this.route});
    

  }

}
