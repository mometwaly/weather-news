import { NgModule } from '@angular/core';
import { UserCountryComponent } from './user-country/user-country.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
    imports: [
        WeatherRoutingModule,

    ],
    declarations: [
        UserCountryComponent
    ]
})
export class WeatherModule {
}