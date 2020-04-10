import React, { Component } from 'react';
import photo from './assets/pixel_art.png';
import './App.css';

import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';

const username = '<span style="color: #00FF00;"><strong>danielbrito<strong></span>'
const twoPoints = ':'
const colon = '<span style="color: #FFBC00;"><strong>~</strong></span>'
const dollar = '<strong>$</strong> '
const directory = '<span style="color: #0371EA;"><strong>/home/</strong></span>'
const helloWorld = 'hello, world!'
const poet = 'i\'m a full-stack poet'
const artist = 'and visual art(iv)ist'
const welcome = 'welcome!'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Particles id="particles-js"
          params={{
            "particles": {
              "number": {
                "value": 100
              },
              "size": {
                "value": 5
              }
            },
          }}
          style={{
            backgroundColor: "#020202",
            opacity: 0.3,
          }}
        />

        <header className="App-header">
          <img src={photo} alt="Logo" />
          <div className="text-typing">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 80,
                deleteSpeed: 15
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(username)
                  .typeString(twoPoints)
                  .typeString(colon)
                  .typeString(directory)
                  .typeString(dollar)
                  .typeString(helloWorld)
                  .pauseFor(1000)
                  .deleteChars(helloWorld.length)
                  .typeString(poet)
                  .pauseFor(1000)
                  .deleteChars(poet.length)
                  .typeString(artist)
                  .pauseFor(1000)
                  .deleteChars(artist.length)
                  .pauseFor(500)
                  .typeString(welcome)
                  .start();
              }}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
