import { Component, OnInit } from '@angular/core';
import {Weather} from "../data/weather";
import {weather_list} from "../data/weatherMock";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weather_list: Weather[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadWeather(): void {
    this.weather_list = weather_list
  }
}
