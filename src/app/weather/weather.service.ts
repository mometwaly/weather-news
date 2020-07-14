import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    countryCode : string;
    header = new HttpHeaders({'x-rapidapi-host':'wft-geo-db.p.rapidapi.com'});
    constructor(private http: HttpClient) { }
    private getHeader(){
        return this.header.append('x-rapidapi-key','b065627277mshe91f49d801162bbp17a603jsn44dced02f342')
    }
    getIPAddress() {
        return this.http.get("http://api.ipify.org/?format=json");
    }
    getDataByIp(ip : string){
        return this.http.get("http://api.ipstack.com/"+ip,{
            params : new HttpParams().set('access_key','810972e197ef6fca9c99cfd05f877f3e')
        })
    }
    getTemp(city:string){
        return this.http.get( "http://api.weatherapi.com/v1/current.json?key=9e876fa03db24599aed231809202906&q="+city);
    }
    getCities(countryCode:string){
        this.getHeader();
        return this.http.get("https://wft-geo-db.p.rapidapi.com/v1/geo/countries/"+countryCode+"/regions",{
            headers : this.getHeader()
        });
    }
}