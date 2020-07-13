import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCountryComponent } from './user-country/user-country.component';


const routes: Routes = [
    {
        path: '', component: UserCountryComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})



export class WeatherRoutingModule {

}