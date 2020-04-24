import React, { useEffect } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";
import { HashLink as Link } from 'react-router-hash-link';

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";

import styles from "../../assets/jss/home/views/home.js";

import srcLogo from "../../assets/img/logo.png"

import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import ReactPlayer from 'react-player';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(styles);

export default function Videos(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = "Daniel Brito | Videos"
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
                        .typeString('~$ VIDEOS')
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
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=9wHZYrn7aEE' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Screencast of <Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>HáLugar</Link>, an app aimed at students who wish to share housing.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid id={'programming'} container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/playlist?list=PLckh4uyjCOmjvKSfrDDJ6oh1lIF3qJ3hM' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <a href="https://github.com/DanielBrito/competitive-programming" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Access repository">Competitive Programming</a>: Evolving through the analysis and resolution of challenges.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?list=PLckh4uyjCOmgfzGEdPT_UZ14DxKlymoxX&v=J1455fDvGbA' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <a href="https://github.com/DanielBrito/videos-youtube" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Access repository">Programming Fundamentals</a> applied in practical scenarios.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=QniP7mjY9Rs' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                For those people interested in the creation process of the <Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>Aluminions</Link>.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=qRmpaXgMros' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Using the stop motion technique to create this first animation of the <Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>Aluminions</Link>.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=ICX667nOIOA' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Modeling the <Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>Aluminions</Link> is the beginning of the process in which I intend to create a game.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid id={'grajau_em_foco'} container spacing={5} justify="center" alignItems="center" style={{ marginTop: "30px", }}>
          <Grid item lg={7} style={{ marginBottom: "30px" }}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=R80bigCpxMA' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                This documentary produced by <Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>Sarau do Grajaú</Link> collective makes a sensitive cut of the so-called poetic scene in the suburb.
            </div>
            </Fade>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}