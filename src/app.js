import React, { Component } from 'react';

class App extends Component {
  async componentDidMount() {
    const res = await fetch('https://api.weatherserver.com/weather/cities/co');
    const json = await res.json();
    console.log(json);
  }

  render() {
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
      </div>
    );
  }
}

export default App;
