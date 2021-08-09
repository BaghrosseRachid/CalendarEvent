import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles.css";
import CalendarEvent from "./CalendarEvent";
import "react-calendar/dist/Calendar.css";

export class App extends Component {
  render() {
    return (
      
      <div className="App">
        <h1>My Calendar</h1>
        <h2>Click on a day to add an event.</h2>
        <hr />

        <hr />
        <div>Develop calendar here</div>

        <hr />
        <div>Develop form for event here</div>
        <div>
          <CalendarEvent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sample: state.sample
});

export default connect(mapStateToProps)(App);
