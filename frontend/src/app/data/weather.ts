export class Weather {
  location: string;
  temperature: number;

  constructor(location: string, temperature: number) {
    this.location = location;
    this.temperature = temperature
  }
}
