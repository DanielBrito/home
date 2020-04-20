import React, { useEffect } from "react";

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

import imgPolymatus from "../../assets/img/polymatus_logo.jpg"
import imgPoems from "../../assets/img/poemas-autorais.jpg"
import imgArticles from "../../assets/img/artigos-noticias.jpg"
import imgReadings from "../../assets/img/biblioteca.jpg"
import imgReflections from "../../assets/img/reflexoes.jpg"
import imgDrawings from "../../assets/img/tracos.jpg"
import imgChallenges from "../../assets/img/desafios.jpg"
import imgAudioVisual from "../../assets/img/audio-visual.jpg"
import imgEvents from "../../assets/img/agenda.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(styles);

export default function Blog(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
                        .typeString('~$ BLOG')
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
              <img src={imgPolymatus} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>POLYMATYS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Where I talk about everything and the like...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgPoems} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>POEMS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Verses, concretisms, haiku, sonnets...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgArticles} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>NEWS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                What's going on in the world...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgReadings} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>READINGS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Reviews, excerpts, recommendations...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgReflections} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>REFLECTIONS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                The unexamined life is not worth living...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgDrawings} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>DRAWINGS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Sketches, paintings, digital art...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgChallenges} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>CH4LL3N635</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Brain: use it or lose it...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgAudioVisual} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>AUDIO&VISUAL</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Music, documentaries, short films, movies, animes...
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgEvents} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>EVENTS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}>
                Poetry reunions, exhibitions, lectures...
              </p>
            </div>
          </Grid>

        </Grid>
      </div>

      <Footer />
    </div>
  );
}