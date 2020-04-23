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

import imgNoRitmoDeAlgo from "../../assets/img/books/no-ritmo-de-algo.jpg"
import imgALerVazios from "../../assets/img/books/a-ler-vazios-capa.jpg"
import imgProtestizando from "../../assets/img/books/protestizando-capa.jpg"
import imgZine from "../../assets/img/books/zine_capa.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

import VisibilityIcon from '@material-ui/icons/Visibility';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import Button from "../../components/CustomButtons/Button"

const useStyles = makeStyles(styles);

export default function Books(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = "Daniel Brito - BOOKS"
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

        <Grid id={'no_ritmo_de_algo'} container spacing={5} justify="center" alignItems="center" style={{ marginBottom: "50px" }}>
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img src={imgNoRitmoDeAlgo} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>NO RITMO DE ALGO (20XX)</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  As I said on a previous occasion, my poems are files extracted from the heart.zip. Thus, following Paulo Leminski and Millôr Fernandes school, "No Ritmo de Algo" will be a directory composed of verses with wisdom, talking about the most varied subjects that alter our heart rhythm.<br /><br />

                  It was expected to be published in 2018, but academic issues made such a plan impossible. However, with the experiences of my previous books, the entire process of making it is already known to me, which will turn everything simpler when it comes time to publish it.<br /><br />

                  For those who like computing and poetry, I created a repository on GitHub with some poems that will be part of it, which use metaphors about programming, mathematics, technology, and the like.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://github.com/DanielBrito/no-ritmo-de-algo"
                    target="_blank"
                    title="Access repository">
                    <VisibilityIcon className={classes.icons} style={{ marginRight: "5px" }} /> PREVIEW
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid id={'a_ler_vazios'} container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={5} >
            <div>
              <Zoom>
                <img src={imgALerVazios} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>A LER VAZIOS (2016)</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Every poem is visual. But, in my case, I elevate this concept to the square and the cube, with poetry tending to infinity.<br /><br />

                  It turns out that, one day, I discovered that all forms keep internal secrets in their structures, and with the help of semiotics, I managed to unveil some of them. But do not think that I'll tell you what they are like that, on a silver platter. I'll present only a re-reading of them. In A LER VAZIOS, besides the various geometric shapes, numbers, and letter-words arranged on the page, the empty spaces can also be read. It'll depend only on the perception of each person.<br /><br />

                  And I say more: Who said that concrete and visual poetry is just a mental exercise devoid of subjectivity and feeling? Well, I came here to subvert this idea. So, activate your heart, connect your neurons, and have a good trip.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://produto.mercadolivre.com.br/MLB-1181107457-a-ler-vazios-daniel-brito-_JM"
                    target="_blank"
                    title="Buy it on Mercado Livre">
                    <MonetizationOnIcon className={classes.icons} style={{ marginRight: "5px" }} /> Purchase
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid id={'protestizando'} container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img src={imgProtestizando} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>PROTESTIZANDO (2015)</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  As an enthusiast of the DIY attitude, marginal literature, and the philosophy of copyleft and poetic license, I released my first book independently, running away from any form of censorship that it might suffer if it were published by bureaucratic means, which deprive people of spreading and absorbing knowledge freely.<br /><br />

                  This work is a compilation of two years of poetry, which gathers from some of the verses where I express my subjectivity, which is in constant development, to some of the poems that I've written since the beginning of everything, at the end of 2012.<br /><br />

                  They're fruits of my creativity, existential reflections, relationships, indignations, daydreams, and many other things that we all feel and experience in our brief existence, and that I wasn't able to just keep them inside my chest.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://produto.mercadolivre.com.br/MLB-1366128820-protestizando-binio-poetico-daniel-brito-_JM?quantity=1"
                    target="_blank"
                    title="Buy it on Mercado Livre">
                    <MonetizationOnIcon className={classes.icons} style={{ marginRight: "5px" }} /> Purchase
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid id={'zines'} container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px" }}>
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img src={imgZine} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>(FAN)ZINES</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Since I was a teenager, I've been a regular on the underground cultural scene. With that, I started to have contact with the various independent media, such as flyers, zines, CDs, K7 tapes, and like, where much of the material is made and distributed by the people themselves at the events they organize.<br /><br />

                  The (fan)zine is a more accessible type of publication that I use as a support to disseminate my writings and my art in the places I frequent, and which fascinates by its content and simplicity.<br /><br />

                  PROTESTIZANDO comes from the combination of the words PROTESTANDO (protesting) + POETIZANDO (making poetry), because at the time I created it, in 2014, I mostly talked about subversive themes.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://issuu.com/daniel.brito"
                    target="_blank"
                    title="Read it on Issuu">
                    <BookmarkIcon className={classes.icons} style={{ marginRight: "5px" }} /> READ
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