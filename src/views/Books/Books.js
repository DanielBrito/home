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

import imgNoRitmoDeAlgo from "../../assets/img/no-ritmo-de-algo.jpg"
import imgALerVazios from "../../assets/img/a-ler-vazios-capa.jpg"
import imgProtestizando from "../../assets/img/protestizando-capa.jpg"
import imgZine from "../../assets/img/zine_capa.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(styles);

export default function Books(props) {
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
                        .typeString('~$ BOOKS')
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

          <Grid id={'no_ritmo_de_algo'} item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgNoRitmoDeAlgo} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>NO RITMO DE ALGO</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                As I said on a previous occasion, my poems are files extracted from the heart.zip. Thus, following the school of Paulo Leminski and Millôr Fernandes, "No Ritmo de Algo" will be a directory composed of verses with wisdom, talking about the most varied subjects that alter our heart rhythm. It was expected to be published in 2018, but academic issues made such a plan impossible. However, with the experiences of my previous books, the entire process of making it is already known to me, which will make everything simpler when it comes time to publish it. For those who like computing and poetry, I created a repository on GitHub with some poems that will be part of it, and that use metaphors about programming, mathematics, technology and the like.
              </p>
            </div>
          </Grid>

          <Grid id={'a_ler_vazios'} item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgALerVazios} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>A LER VAZIOS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                Every poem is visual. But, in my case, I elevate this concept to the square and the cube, with poetry tending to infinity. It turns out that, one day, I discovered that all forms keep internal secrets in their structures and, with the help of semiotics, I managed to unveil some of them. But do not think that I will tell you what they are like that, on a silver platter. I will present only a re-reading of them. In A LER VAZIOS, besides the various geometric shapes, numbers, and letter-words arranged on the page, the empty spaces can also be read. It will depend only on the perception of each person. And I say more: Who said that concrete and visual poetry is just a mental exercise devoid of subjectivity and feeling? Well, I came here to subvert this idea. So, activate your heart, connect your neurons and have a good trip.
              </p>
            </div>
          </Grid>

          <Grid id={'protestizando'} item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgProtestizando} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>PROTESTIZANDO</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                As an enthusiast of do-it-yourself attitude, marginal literature, and the philosophy of copyleft and poetic license, I released my first book independently, running away from any form of censorship that it might suffer if it were published by bureaucratic means, which deprive people of freely spreading and absorbing knowledge. This work is a compilation of two years of poetry, which gathers from some of the verses where I express my subjectivity - which is in constant development - to some of the poems that I wrote since the beginning of everything, at the end of 2012. They are fruits of my creativity, existential reflections, love relationships, indignations, daydreams and many other things that we all feel and experience in our brief existence, and that I was not able to just keep them inside my chest.
              </p>
            </div>
          </Grid>

          <Grid id={'zines'} item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgZine} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>(FAN)ZINES</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                Since I was a teenager, I have been a regular on the underground cultural scene. With that, I started to have contact with the various independent media, such as flyers, zines, CDs, K7 tapes and like, where much of the material is made and distributed by the people themselves at the events they organize. The (fan)zine is a more accessible type of publication that I use as a support to disseminate my writings and my art in the places I frequent, and which fascinates by its content and simplicity. The name PROTESTIZANDO cames from the combination of the words PROTESTANDO (protesting) + POETIZANDO (making poetry), because at the time I created it, in 2014, I mostly talked about subversive themes.
              </p>
            </div>
          </Grid>

        </Grid>
      </div>

      <Footer />
    </div>
  );
}