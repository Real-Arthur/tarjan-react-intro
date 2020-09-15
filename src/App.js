import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// like a node 'require'
import PictureGallery from './PictureGallery';

// import the things to learn component
import ThingsToLearn from './ThingsToLearn'

// React Component Incantation
class App extends Component {

  render() {
    return (
      <div>
        <h1>Happy React Day!</h1>

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
