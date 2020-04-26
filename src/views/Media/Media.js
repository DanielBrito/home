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

import { HashLink as Link } from 'react-router-hash-link';

import styles from "../../assets/jss/home/views/home.js";

import Button from "../../components/CustomButtons/Button"

import srcLogo from "../../assets/img/logo.png"

import imgPortalSertoes from "../../assets/img/media/halugar_portal_sertoes_240220.jpg"
import imgUFC from "../../assets/img/media/halugar_ufc_crateus_noticias_010320.jpg"

import { FaNewspaper } from "react-icons/fa";

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';
import ReactPlayer from 'react-player';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
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
    document.title = "Daniel Brito | Media"
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
                        .typeString('~$ MEDIA')
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
                <img src={imgUFC} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <p><em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span><Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>HáLugar</Link> has gained the attention of the city residents. In a few days after its launch, it already had advertisements registered. For the professor of the discipline, who encouraged the publication of the software, this initiative will encourage the development of more ideas by students.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em></p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="http://crateus.ufc.br/estudante-de-ciencia-da-computacao-desenvolve-aplicativo-para-quem-deseja-compartilhar-moradia/"
                    target="_blank"
                    title="Read full article">
                    <FaNewspaper className={classes.icons} style={{ marginRight: "5px" }} /> READ
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" direction="row-reverse" alignItems="center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Grid item lg={6}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <Zoom>
                <img src={imgPortalSertoes} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <p><em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span><Link to="/projects" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>HáLugar</Link> was developed by Daniel Brito, a Computer Science student at the Federal University of Ceará (Crateús Campus), during the disciplines of Web and Mobile Development, taught by professor Francisco Anderson de Almada Gomes.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em></p>
                <HeadShake>
                  <Button
                    color="neon" round style={{ marginTop: "20px" }} size="md"
                    href="https://portalsertoes.com/2020/02/estudante-da-ufc-de-crateus-desenvolve-aplicativo-para-quem-deseja-compartilhar-moradia.html"
                    target="_blank"
                    title="Read full article">
                    <FaNewspaper className={classes.icons} style={{ marginRight: "5px" }} /> READ
              </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginBottom: "30px" }}>
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=LVshZDPiIy8' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                A brief tribute by Paola Silva in her project called Curta Poesias.
            </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=wSN3jBGo5pQ' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span>Art é Arte! shows the surprising harmony within this “anarchic” event and reveals the voice of artists from the suburb.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{ marginTop: "30px" }}>
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=T3VHeEjBwS0' />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                My first interview, which was granted to my colleagues from TV Grajaú.
            </div>
            </Fade>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}