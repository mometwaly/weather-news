import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCountryComponent } from './user-country/user-country.component';
import { CitiesComponent } from './cities/cities.component';


const routes: Routes = [
    {
        path: '', component: UserCountryComponent , children : [
            {
                path : 'nearest-cities' , component : CitiesComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})



export class WeatherRoutingModule {

}