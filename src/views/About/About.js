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

import imgEducationWork from "../../assets/img/brito.gif"
import imgProjects from "../../assets/img/observar-absorver-alessa-melo-sobre.gif"
import imgInterests from "../../assets/img/insight.gif"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(styles);

var today = new Date();
var diff = new Date(today.getFullYear(), today.getMonth()+1, today.getDate()).getTime() - new Date(1993, 1, 4).getTime();
var diffDays = (diff / (1000 * 60 * 60 * 24));

export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title ="Daniel Brito - ABOUT"
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

        <Grid container spacing={5} justify="center" alignItems="center" style={{marginBottom: "50px"}}>
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img src={imgEducationWork} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}><em>MY BRIEF HISTORY</em></h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  I was born in São Paulo/SP - Brazil, {diffDays} days ago. For most of my life, I lived in the district of Grajaú, except for a year I spent in Viçosa/CE during my childhood. In this period, I enjoyed playing soccer, video-games, and creating stuff, like small towns with my toys and new technologies with parts of them. Later, I got my first computer, and I just fell in love with it. I didn't know how to program yet, but I liked to hack it, play games and surf on the (dial-up) internet.<br /><br />

                When I was 16, I got my first job as an apprentice at CAMP Pinheiros. After a while, as a result of doing good work, I achieved an effective position as an office assistant at CPFL Renováveis.<br /><br />

                After studying in different public schools, I passed the entrance exam to study Analysis and Systems Development at the Faculty of Technology (FATEC). However, in search of new challenges, I decided to move to Crateús to study Computer Science at the Federal University of Ceará (UFC). There I got some scholarships to work in projects in the field of web development, computer graphics, and education. As described on my <a href="https://drive.google.com/file/d/1bOFjCfhoyabvcZ7LXf5T3EtY9h6umsaR/view" target="_blank" rel="noopener noreferrer" className={classes.externalLink} style={{ textDecoration: "none", color: "white" }} title="Read">resumé</a>, currently, I'm an intern developing intelligent applications to the health public system management.
              </p>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" direction="row-reverse" style={{marginTop: "50px", marginBottom: "50px"}}>
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img src={imgProjects} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}><em>TO BE OR NOT TO BE</em></h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  I idealized the project <Link to="/projects#compixelar" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>COMPIXELAR</Link>. I'm a <Link to="/books#zines" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>FANZINER</Link>. I developed the app <Link to="/projects#halugar" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>HáLUGAR</Link>. I'm the creator of <Link to="/projects#aluminions" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>ALUMINIONS</Link>. I'm a thinker at <Link to="/projects#fora_da_caixa" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>FORA DA CAIXA</Link>. I'm a tailleur at <Link to="/projects#antigrife" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>ANTIGR1F3</Link>. I'm a curator at <Link to="/projects#galeria_marginal" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>GALERIA MARGINAL</Link>. I'm a kind of YouTuber, who likes to talk about <Link to="/videos" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>PROGRAMMING</Link>. I'm a worker at <Link to="/projects#concretagens" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>COLETIVA CONCRETAGENS</Link>. I disseminate Philosophy and Art through the <Link to="/projects#socrastickers" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>SOCRASTICKERS</Link>.<br/><br/>
                  
                  I integrated the collective <Link to="/projects#sarau_do_grajau" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>SARAU DO GRAJAÚ</Link>, which produced the documentary <Link to="/videos#grajau_em_foco" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>Grajaú em Foco</Link>.<br/><br/>
                  
                  I published independently the book <Link to="/books#protestizando" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>PROTESTIZANDO</Link> (2015), which compiles my first poems. I published independently the book <Link to="/books#a_ler_vazios" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>A LER VAZIOS</Link> (2016), which includes some of my poetic and visual experiments. I've also been published in several anthologies with other marginal authors.
              </p>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" alignItems="center" style={{marginTop: "50px"}}>
          <Grid item lg={5} >
            <div>
              <Zoom>
                <img src={imgInterests} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1 style={{ color: "#FFFFFF", textAlign: "center" }}><em>LIFE, THE UNIVERSE AND EVERYTHING</em></h1>
                <p style={{ color: "#FFFFFF", fontSize: "16px", textAlign: "justify" }}>
                  As an inborn scientist and visual artist, I research about <a href="https://github.com/DanielBrito/generative-design" target="_blank" rel="noopener noreferrer" className={classes.externalLink} style={{ textDecoration: "none", color: "white" }} title="More">Generative Design</a>. Through the exact sciences, I get fascinated as I discover the cosmos. Through the social sciences, I seek to understand the world that I live in and the several cultures that surround me. Through technology, I try to create solutions that promote social progress.<br /><br />

                Riding BMX and skateboarding provide me some good doses of adrenaline. Calisthenics and neurobics help me to train my body and my mind.<br /><br />

                I bring with me an increasing appreciation for the Seventh Art, and my musical taste ranges from tuned pianos to distorted guitars.<br /><br />

                I value respect in relation to every sentient being, as well as the DIY attitude, the self-teaching lifestyle, polyglotism, and <Link to="/blog" style={{ textDecoration: "none" }} title="More" className={classes.externalLink}>polymathy</Link>.<br /><br />

                Discovering new worlds is my biggest goal.
              </p>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div >
      <Footer />
    </div >
  );
}
