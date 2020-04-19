import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";

import styles from "../../assets/jss/home/views/home.js";

import srcLogo from "../../assets/img/logo.png"

import imgEducationWork from "../../assets/img/brito.gif"
import imgProjects from "../../assets/img/observar-absorver-alessa-melo-sobre.gif"
import imgInterests from "../../assets/img/insight.gif"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(styles);

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var birthDate = new Date(1993,1,4);
var today = new Date();

var diffDays = Math.round(Math.abs((birthDate.getTime() - today.getTime())/(oneDay)));

export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 55, height: 55 }} />

  return (
    <div>
      <Header
        color="transparent"
        brand={logo}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "neon"
        }}
        {...rest}
      />

      <Parallax image={require("../../assets/img/background.svg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      cursor: "|",
                      delay: 150
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('~$ ABOUT')
                        .start();
                    }
                    }
                  />
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <Particles id="particles-js"
        params={{
          "particles": {
            "number": {
              "value": 200,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "speed": 3,
                "size_min": 0.3
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 0.1,
              "direction": "top",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
              },
              "repulse": {
                "distance": 400,
                "duration": 4
              }
            }
          }
        }}
        style={{
          backgroundColor: "#000000",
          opacity: 1,
          float: "left",
          left: 0,
          top: 0,
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "-1"
        }}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>

        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgEducationWork} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>MY BRIEF HISTORY</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                My name is Daniel Brito. I was born in São Paulo/SP - Brazil, {diffDays} days ago. And for most of my life, I've lived in the district of Grajaú, except for a year I spent in Viçosa/CE during my childhood. When I was 16, I got my first job as an apprentice at CAMP Pinheiros. As a result of doing good work, I achieve an effective position as an office assistant at CPFL Renováveis. I've always studied in different public schools until I passed the entrance exam to study Analysis and Systems Development at the Faculty of Technology (FATEC). However, in search of new challenges, I've decided to move to Crateús to study Computer Science at the Federal University of Ceará (UFC). There I got some scholarships to work in projects in the field of web development, computer graphics, and education. Currently, I'm an intern developing intelligent applications to the health public system management, in a partnership with Pró-Hemoce Institute.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgProjects} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>TO BE OR NOT TO BE</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                I've idealized the project COMPIXELAR. I'm a FANZINER. I've developed the app HáLUGAR. I'm the creator of ALUMINIONS. I think out of the box at FORA DA CAIXA. I'm a tailleur at ANTIGR1F3. I'm a curator at GALERIA MARGINAL. I'm a kind of YouTuber who likes to teach Programming Fundamentals and talk about Competitive Programming. I disseminate Philosophy and Art through the SOCRASTICKERS. I'm a worker at COLETIVA CONCRETAGENS. I've integrated the collective SARAU DO GRAJAÚ, which produced the documentary Grajaú em Foco. I've published independently the book PROTESTIZANDO (2015), which compiles my first poems. I've published independently the book A LER VAZIOS (2016), which includes some of my poetic and visual experiments. I've also been published in several anthologies with other marginal authors.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgInterests} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>LIFE, THE UNIVERSE AND EVERYTHING</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                As an inborn scientist and visual artist, I research about Generative Design. Through the exact sciences, I get fascinated as I discover the cosmos. Through the social sciences, I try to understand the world that I live in and the several cultures that surround me. Through technology, I seek to create solutions that promote social progress. Calisthenics and neurobics help me to train my body and my mind. I enjoy riding BMX and skateboarding. I value respect in relation to every sentient being. I bring with me an increasing appreciation for the Seventh Art. My musical taste ranges from tuned pianos to distorted guitars. I appreciate the DIY attitude, the self-teaching, the polyglotism, and the polymathy. Discovering new worlds is my biggest goal.
              </p>
            </div>
          </Grid>
        </Grid>

      </div >

      <Footer />
    </div >
  );
}
