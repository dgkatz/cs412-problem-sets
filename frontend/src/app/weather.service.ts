import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {backendConfig} from "./config/backendConfig";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(formData: FormData): Observable<any> {
    return this.http.post(backendConfig.baseURL + '/api/weather', formData,
      {observe: "body", responseType: "json"}
    )
  }
}
