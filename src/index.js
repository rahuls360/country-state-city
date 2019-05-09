import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import countryData from "./country.json";
import statesData from "./states.json";
import cityData from "./cities.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "101",
      state: "17",
      city: "1558"
    }
  }

  getCountry = () => {
    if (countryData) {
      return countryData.countries.map(country => {
          return <option value={country.id} key={country.id}>{country.name}</option>;
      });
    }
  };

  getState = () => {
    if (statesData) {
      return statesData.states.map(state => {
        if(state.country_id === this.state.country){
          return <option value={state.id} key={state.id}>{state.name}</option>;
        }
      });
    }
  };

  getCity = () => {
    if (cityData) {
      return cityData.cities.map(city => {
        if (city.state_id === this.state.state) {
          return <option value={city.id} key={city.id}>{city.name}</option>;
        }
      });
    }
  };

  handleCountry = (event) => {
    console.log(event.target.value, "value");
    this.setState({ country: event.target.value});
  }

  handleState = (event) => {
    console.log(event.target.value, "value");
    this.setState({ state: event.target.value });
  }

  handleCity = (event) => {
    console.log(event.target.value, "value");
    this.setState({ city: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Import Location</h1>
        <select value={this.state.country} onChange={this.handleCountry}>{this.getCountry()}</select>
        <select value={this.state.state} onChange={this.handleState}>{this.getState()}</select>
        <select value={this.state.city} onChange={this.handleCity}>{this.getCity()}</select>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
