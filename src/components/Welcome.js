import React, { Component } from 'react'

import photo from '../assets/pixel_art.png';

import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';

const username = '<span style="color: #00FF00;"><strong>danielbrito<strong></span>'
const twoPoints = ':'
const colon = '<span style="color: #FFBC00;"><strong>~</strong></span>'
const dollar = '$ '
const directory = '<span style="color: #0371EA;"><strong>/home</strong></span>'
const helloWorld = 'hello, world!'
const poet = 'i\'m a full-stack poet'
const artist = 'and visual art(iv)ist'
const welcome = 'welcome!'

class Welcome extends Component {
  render() {
    return (
      <div>
        {/* <Particles id="particles-js"
          params={{
            "particles": {
              "number": {
                "value": 70
              },
              "size": {
                "value": 1
              }
            },
          }}
          style={{
            backgroundColor: "#020202",
          }}
        /> */}

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
                  .pauseFor(500)
                  .typeString(welcome)
                  .start();
              }}
            />
          </div>
        </header>
      </div>
    )
  }
}

export default Welcome
