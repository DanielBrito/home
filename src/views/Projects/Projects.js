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
import { FaMousePointer, FaGooglePlay, FaGitAlt, FaBrain, FaMicrophoneAlt, FaCubes, FaQuestionCircle, FaRecycle, FaDropbox, FaTshirt, FaPalette } from "react-icons/fa";

import imgCompixelar from "../../assets/img/compixelar.jpg"
import imgHaLugar from "../../assets/img/ha-lugar.jpg"
import imgPolymApp from "../../assets/img/polymapp.jpg"
import imgCelerebro from "../../assets/img/celerebro.jpg"
import imgSarauDoGrajau from "../../assets/img/sarau-do-grajau.jpg"
import imgConcretagens from "../../assets/img/coletiva-concretagens.jpg"
import imgSocrastickers from "../../assets/img/socrastickers.jpg"
import imgAluminions from "../../assets/img/aluminions.jpg"
import imgForaDaCaixa from "../../assets/img/fora-da-caixa.jpg"
import imgAntigrife from "../../assets/img/antigrife.jpg"
import imgGaleriaMarginal from "../../assets/img/galeria-marginal.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(styles);

export default function Projects(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = "Daniel Brito - PROJECTS"
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
                        .typeString('~$ PROJECTS')
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
          <Grid id={'compixelar'} item lg={5}>
            <div>
              <Zoom>
                <img src={imgCompixelar} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>COMPIXELAR</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Compixelar intends to apply the concepts of creative programming in the development of poetic-visual experiments and the composition of multimedia animations. The name intends to bring up some concepts that express its purpose, such as pixel, which is the smallest point that forms a digital image, and compile, which can be presented both as a synonym of collect (various artistic creations, in this case) as generate object code that can be interpreted by the computer.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://medium.com/compixelar"
                    target="_blank"
                    title="Access Medium blog">
                    <FaMousePointer className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'halugar'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgHaLugar} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>HáLUGAR</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  HáLugar is aimed for students who wish to share housing, proposing to make it easier for them to advertise or find a place to live. Through the application, they will be able to search for housing options that offer them the best cost-benefit, that is, that have the most affordable rental price, or that are closest to the campus, bus stop and everything else that suits them.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://play.google.com/store/apps/details?id=br.ufc.crateus.halugar"
                    target="_blank"
                    title="Download app from Play Store">
                    <FaGooglePlay className={classes.icons} style={{ marginRight: "5px" }} /> INSTALL
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'polymapp'} item lg={5}>
            <div>
              <Zoom>
                <img src={imgPolymApp} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>POLYMAPP</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  PolymApp is a personal management tool that will make it possible to control readings and studies, make long-term activity plans, budget to measure expenses and collections, list ongoing and future projects, and other features. The name is inspired by the term polymath, which refers to an individual whose knowledge covers a significant number of subjects.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://github.com/DanielBrito/polymapp"
                    target="_blank"
                    title="Access repository">
                    <FaGitAlt className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'celerebro'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgCelerebro} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>CÉLEREBRO</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  CÉLEREBRO is a math minigame for those who practice mental exercises, inspired by command-line based games. Larry Katz, a neuroscientist who created the term "neurobics", explains that logical reasoning exercises stimulate the formation of synapses, that is, regions of neurons responsible for the transmission of nerve impulses, making connections between different parts of the brain stronger and healthier.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://github.com/DanielBrito/celerebro"
                    target="_blank"
                    title="Access repository">
                    <FaBrain className={classes.icons} style={{ marginRight: "5px" }} /> DOWNLOAD
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'sarau_do_grajau'} item lg={5}>
            <div>
              <Zoom>
                <img src={imgSarauDoGrajau} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>SARAU DO GRAJAÚ</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Sarau do Grajaú was created in early 2014. It's an artistic and cultural event held every last Saturday of each month, at the Tia Nilde's Bar - Antônio Comenale Street, 166, Parque Cocaia, 04850-010, São Paulo/SP - Brazil. It brings together various artists and people from the community who are hungry to express and absorb poetry - in its various forms.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://www.facebook.com/Sarau-do-Graja%C3%BA-191479077716775/"
                    target="_blank"
                    title="Access Facebook page">
                    <FaMicrophoneAlt className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'concretagens'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgConcretagens} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>CONCRETAGENS</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Coletiva Concretagens works by publishing concrete and visual poems in the virtual environment and through interventions in the urban scenario, always with the aim of stimulating the perceptiveness and sensitivity of reader-observers, and also to make these poetic strands known.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="http://daniel-brito.blogspot.com/p/concretagens_11.html"
                    target="_blank"
                    title="Access blog posts">
                    <FaCubes className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'socrastickers'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgSocrastickers} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>SOCRASTICKERS</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  SOCRASTICKERS = Contraction of ‘SOCRATES’ (great philosopher known for encouraging people to question and seek explanations through maieutics) + ‘STICKERS’. They are a way of spreading, through interventions, our thoughts, ideas, poems, drawings and also of great philosophers, artists, and writers who changed the world and the way of thinking of many people during history, however, many people never heard about them.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://br.pinterest.com/danielbrito41/socrastickers/"
                    target="_blank"
                    title="Access Pinterest album">
                    <FaQuestionCircle className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'aluminions'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgAluminions} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>ALUMINIONS</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Aluminions are small creatures formed by aluminum seals, 13, which developed and gained consciousness after a Big Bang occurred in my mind. Like us, human beings, they learned how to communicate and express their feelings. They live a lot of adventures and are always looking for answers to their existential questions.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://www.instagram.com/aluminions.13/"
                    target="_blank"
                    title="Access Instagram page">
                    <FaRecycle className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'fora_da_caixa'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgForaDaCaixa} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>FORA DA CAIXA</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "center" }}>
                  I play making art<br />
                the inspiration<br />
                always finds me<br />
                then I keep my ideas<br />
                all<br />
                out of the box
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://br.pinterest.com/danielbrito41/fora-da-caixa/"
                    target="_blank"
                    title="Access Pinterest album">
                    <FaDropbox className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid id={'antigrife'} item lg={5} >
            <div>
              <Zoom>
                <img src={imgAntigrife} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>ANTIGR1F3</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Clothing can also be used to spread our ideas and our art. Using methods such as screen printing and hand painting to create prints is something very creative and original, as well as making buttons, patches and the like. Based on this, the intention of the ANTIGR1F3 project is to seek a way to subvert the consumerist logic, even if in a simple way, and to develop our social awareness and artistic skills.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://br.pinterest.com/danielbrito41/antigr1f3/"
                    target="_blank"
                    title="Access Pinterest album">
                    <FaTshirt className={classes.icons} style={{ marginRight: "5px" }} /> MORE
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "50px" }}>
          <Grid id={'galeria_marginal'} item lg={5}>
            <div>
              <Zoom>
                <img src={imgGaleriaMarginal} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>GALERIA MARGINAL</h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  Galeria Marginal is a virtual space that seeks to promote a type of visual literacy through the analysis of works, encouraging people to "read" the paintings and to identify the characteristics of the various artistic movements that have marked the history, as well as the artists who participate in them.
              </p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="http://daniel-brito.blogspot.com/p/galeria-marginal_11.html"
                    target="_blank"
                    title="Access blog posts">
                    <FaPalette className={classes.icons} style={{ marginRight: "5px" }} /> MORE
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