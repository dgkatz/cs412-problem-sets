import { Component } from '@angular/core';
import {Weather} from "./data/weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  weather_list: Weather[] = [];

  updateWeatherList(weather_list: Weather[]) {
    this.weather_list = weather_list;
  }
}
