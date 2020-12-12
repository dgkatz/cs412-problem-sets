import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../data/weather";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() weather_list: Weather[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
