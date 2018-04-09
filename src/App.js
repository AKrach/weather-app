import React, { Component } from 'react';
import './App.css';

const api_key = "8d4ac73d7c7b4f38f8744ac3a0e889fb";

class App extends Component {
  state = {
    temperature: '',
    weather: ''
  }


  getWeather = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${api_key}&units=imperial`);

    const data = await apiCall.json();
    console.log(data);
    this.setState({
      temperature: data.list[0].main.temp,
      weather: data.list[0].weather[0].main
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <form onSubmit={this.getWeather}>
          <p>
            Give me the weather for &nbsp;
            <input placeholder={"City, Country"}
            type="text" name="location"/>
          </p>
          <button>Submit</button>
        </form>
        { this.state.temperature && <p>{this.state.temperature} F</p>}
        { this.state.weather && <p>{this.state.weather}</p>}
      </div>
    );
  }
}

export default App;
