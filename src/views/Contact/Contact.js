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

import { FaEnvelope, FaTelegramPlane, FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaGithub, FaYoutube, FaLinkedin, FaSoundcloud, FaQuestion } from "react-icons/fa";

import imgContact from "../../assets/img/contact/message.jpg"
import imgSocialNetworks from "../../assets/img/contact/social_networks.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

import Snakke from 'react-snakke'

const useStyles = makeStyles(styles);

export default function Media(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = "Daniel Brito | Contact"
  })

  return (
    <div>
      <Snakke
        color="#39ff14"
        top="80px"
        height="3px"
        opacity="1"
        zIndex="10"
        shadow={true}
      />
      
      <Header
        color="transparent"
        brand={logo}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
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
                        .typeString('~$ CONTACT')
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
        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginBottom: "50px" }}>
          <Grid item lg={6}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <Zoom>
                <img src={imgContact} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <HeadShake>
                  <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>SEND A MESSAGE</h1>
                </HeadShake>
                <FaEnvelope color="yellow" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><em><a href="mailto: danielhbrito@outlook.com" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", color: "white" }} title="Send an email">danielhbrito@outlook.com</a></em><br /><br />

                <FaTelegramPlane color="#0088cc" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><em><a href="https://t.me/danielhbrito" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", color: "white" }} title="Send a message on Telegram">@danielhbrito</a></em>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px" }}>
          <Grid item lg={6}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <Zoom>
                <img src={imgSocialNetworks} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <HeadShake>
                  <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>FOLLOW ME</h1>
                </HeadShake>
                <FaFacebookSquare color="#3b5998" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://www.facebook.com/daniel.brito.jumper" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Friend me on Facebook">Facebook</a><br /><br />

                <FaInstagram color="#e1306c" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://www.instagram.com/danielbrito41/" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Follow me on Instagram">Instagram</a><br /><br />

                <FaPinterest color="#bd081c" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://br.pinterest.com/danielbrito41/" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Follow me on Pinterest">Pinterest</a><br /><br />

                <FaTwitter color="#1da1f2" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://twitter.com/danielhbrito" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Follow me on Twitter">Twitter</a><br /><br />

                <FaLinkedin color="#0077b5" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://www.linkedin.com/in/daniel-brito" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Follow me on LinkedIn">LinkedIn</a><br /><br />

                <FaGithub color="#8f9696" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://github.com/DanielBrito" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Follow me on GitHub">GitHub</a><br /><br />

                <FaYoutube color="#ff0000" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://www.youtube.com/user/59336197" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Subscribe to my channel">YouTube</a><br /><br />

                <FaSoundcloud color="#ff8800" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://soundcloud.com/dani-el-brito" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Follow me on Soundcloud">Soundcloud</a><br /><br />

                <FaQuestion color="#db3552" size="0.9em" className={classes.icons} style={{ marginRight: "10px" }} /><a href="https://ask.fm/danielbrito41" target="_blank" rel="noopener noreferrer" className={classes.contactLink} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }} title="Ask me something">Ask.fm</a>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}