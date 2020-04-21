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

import Button from "../../components/CustomButtons/Button"

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

// @font-awesome/icons
import { FaBloggerB, FaPenNib, FaNewspaper, FaBookReader, FaQuestion, FaPaintBrush, FaBrain, FaVideo, FaRegCalendarCheck } from "react-icons/fa";

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

  useEffect(() => {
    document.title = "Daniel Brito - BLOG"
  })

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
        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginBottom: "30px" }}>
          <Grid item lg={6} >
            <div>
              <Zoom>
                <img src={imgPolymatus} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>POLYMATYS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Where I talk about everything and the like...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com.br/"
                  target="_blank"
                  title="Access blog">
                  <FaBloggerB className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6} >
            <div>
              <Zoom>
                <img src={imgPoems} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>POEMS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Verses, concretisms, haiku, sonnets...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/poemas-autorais_11.html"
                  target="_blank"
                  title="Access poems page">
                  <FaPenNib className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6} >
            <div>
              <Zoom>
                <img src={imgArticles} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>NEWS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                What's going on in the world...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/noticias_11.html"
                  target="_blank"
                  title="Access articles page">
                  <FaNewspaper className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img src={imgReadings} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>READINGS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Reviews, excerpts, recommendations...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/biblioteca-marginal_11.html"
                  target="_blank"
                  title="Access readings page">
                  <FaBookReader className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6} >
            <div>
              <Zoom>
                <img src={imgReflections} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>REFLECTIONS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                The unexamined life is not worth living...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/reflexoes_11.html"
                  target="_blank"
                  title="Access reflections page">
                  <FaQuestion className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6} >
            <div>
              <Zoom>
                <img src={imgDrawings} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>DRAWINGS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Sketches, paintings, digital art...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/tracos.html"
                  target="_blank"
                  title="Access drawings page">
                  <FaPaintBrush className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img src={imgChallenges} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>CH4LL3N635</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Brain: use it or lose it...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/desafios_11.html"
                  target="_blank"
                  title="Access challenges page">
                  <FaBrain className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img src={imgAudioVisual} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>AUDIO&VISUAL</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Music, documentaries, movies, animes...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/audio_11.html"
                  target="_blank"
                  title="Access audiovisual page">
                  <FaVideo className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px" }}>
          <Grid item lg={6} >
            <div>
              <Zoom>
                <img src={imgEvents} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
          <Fade>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>EVENTS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                Poetry reunions, exhibitions, lectures...
              </p>
              <HeadShake>
                <Button
                  color="neon" round style={{ marginTop: "20px" }} size="md"
                  href="http://daniel-brito.blogspot.com/p/agenda.html"
                  target="_blank"
                  title="Access events page">
                  <FaRegCalendarCheck className={classes.icons} style={{ marginRight: "5px" }} /> ACCESS
              </Button>
              </HeadShake>
            </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}