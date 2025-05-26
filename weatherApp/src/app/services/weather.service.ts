import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    const headers = new HttpHeaders(environment.headers);

    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json');

    return this.http.get(environment.weatherApiBaseUrl, { headers, params });
  }
}
