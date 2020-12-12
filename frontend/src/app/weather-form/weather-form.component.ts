import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Weather} from "../data/weather";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  @Output() mewWeatherListEvent = new EventEmitter<Weather[]>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) {
    this.form = this.formBuilder.group({
      city: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  getWeatherClick() {
    this.weatherService.getWeather(this.form.get('city')?.value).subscribe(
      (response) => {
        console.log(`Weather API response: ${response}`);
        this.mewWeatherListEvent.emit(response.data);
        this.form.reset();
      }
    )
  }
}
