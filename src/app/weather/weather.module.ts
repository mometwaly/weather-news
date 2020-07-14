import { NgModule } from '@angular/core';
import { UserCountryComponent } from './user-country/user-country.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
    imports: [
        WeatherRoutingModule,
        CommonModule
    ],
    declarations: [
        UserCountryComponent,
        LoadingSpinnerComponent,
        CitiesComponent


    ]
})
export class WeatherModule {
}