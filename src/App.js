import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// like a node 'require'
import PictureGallery from './PictureGallery';

// import the things to learn component
import ThingsToLearn from './ThingsToLearn'

// React Component Incantation
class App extends Component {

  // anything you need to know about component
  // things that can change
  // App states
  state = {
    whatDayIsIt: 'Tuesday Day',
    feeling: 'Lit'
  }

  // JSX === "javascript extender"
  render() {
    // 'this' refers to App
    console.log('App state is: ', this.state);
    console.log('this is: ', this)

    let whatDayIsIt = "Taco Day";
    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>

        <h3>Things to learn about React:</h3>
        <ThingsToLearn />

        <h3>Check it</h3>
        <PictureGallery />

        <h3>Anotha one</h3>
        <PictureGallery />
      </div>
    );
  }
}

export default App;
