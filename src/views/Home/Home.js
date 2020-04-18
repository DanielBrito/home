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

import imgPinacograma from "../../assets/img/daniel-brito-pinacograma.gif"
import imgSophia from "../../assets/img/cooperifa.jpg"
import imgAntonioMiotto from "../../assets/img/teorema-poesia-visual-alessa-melo.jpg"
import imgEdileneSantos from "../../assets/img/sarau-do-grajau-daniel-alexandrino.jpg"
import imgLessioCardoso from "../../assets/img/sobrenome-liberdade-alessa-melo.jpg"
import imgCasulo from "../../assets/img/sarau-do-grajau-johnny-nogueira.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(styles);

export default function Home(props) {
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
                        .typeString('~$ DANIEL BRITO')
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
          <Grid item xs={12} sm={6} style={{marginTop: "30px", marginBottom: "30px"}}>
            <div>
              <img src={imgPinacograma} alt="Learn" width="100%" style={{ borderRadius: "20px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <h1 style={{ color: "#FFFFFF", textAlign: "center" }}>A LER VAZIØS</h1>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                <em>unlike anything we'<span style={{ fontWeight: "bold", color: "#39ff14" }}>D</span> expect, the poetics in "a ler vazios" makes the he<span style={{ fontWeight: "bold", color: "#39ff14" }}>A</span>rt of machines feel, not only the huma<span style={{ fontWeight: "bold", color: "#39ff14" }}>N</span>, but it also invites us to go further. it's essential to glimpse art in mathemat<span style={{ fontWeight: "bold", color: "#39ff14" }}>I</span>cs. simple and complex exp<span style={{ fontWeight: "bold", color: "#39ff14" }}>E</span>riments to be deciphered. <span style={{ fontWeight: "bold", color: "#39ff14" }}>L</span>iberty for the senses.</em><br /><br />
                <em><span style={{ fontWeight: "bold", color: "#39ff14" }}>B</span>rilliant artistic investigations by a young genius of the streets. he redoes scenes, <span style={{ fontWeight: "bold", color: "#39ff14" }}>R</span>evolutionizes, affirms his place in the world. impetuous and concrete, dan<span style={{ fontWeight: "bold", color: "#39ff14" }}>I</span>el brito spreads poetry. all dialogue will now take place in his con<span style={{ fontWeight: "bold", color: "#39ff14" }}>T</span>act with yours. listen and speak, feel and reveal. there is p<span style={{ fontWeight: "bold", color: "#39ff14" }}>O</span>etry everywhere.</em>
                <br />
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}><strong>- Janaína Moitinho</strong></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgSophia} alt="Learn" width="100%" style={{ borderRadius: "20px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                <em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span>For most existentialists, two were the privileged ways for humans to accept and face their finitude: through the arts and political-revolutionary action. In these exceptional forms of activity, they would be able to give meaning to the brevity of their lives.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em>
                <br />
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}><strong>- Sophia (PROTESTIZANDO)</strong></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgAntonioMiotto} alt="Learn" width="100%" style={{ borderRadius: "20px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                <em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span>In his early twenties, Daniel Brito, a diamond who polishes himself when he says yes to poetry! With the book he commits himself, for the second time in his life, to what I dare say: post-neo-concrete poetry. Herculean objective which was never a craziness. No reading deadlines or endless demands.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em>
                <br />
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}><strong>- Antonio Miotto (A LER VAZIOS)</strong></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgEdileneSantos} alt="Learn" width="100%" style={{ borderRadius: "20px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ backgroundColor: "#000000" }}>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                <em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span>Daniel Brito is a name that appears in the peripheral poetic scene, but who is already a citizen of the world, because of the reach of his literary ability. And the most incredible thing is that he's right here, contemporary with us, and promisses to stay.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em>
                <br />
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}><strong>- Edilene Santos (A LER VAZIOS)</strong></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgLessioCardoso} alt="Learn" width="100%" style={{ borderRadius: "20px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <div style={{ backgroundColor: "#000000" }}>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                <em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span>Each text brings the way to be read. Discovering this code will be the main challenge for the reader who, maintaining his freedom, will need a good repertoire for this decoding... The credit goes to the author who masters all these languages and managed that the next page has always a reserved surprise.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em>
                <br />
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}><strong>- Léssio Cardoso (A LER VAZIOS)</strong></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div>
              <img src={imgCasulo} alt="Learn" width="100%" style={{ borderRadius: "20px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <div style={{ backgroundColor: "#000000" }}>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "justify" }}>
                <em><span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span>The poet in question becomes a bridge architect so that readers have access to all his creativity. And I can guarantee to the future adventurers: each page is a postcard for the eyes of people hungry for visual aesthetics and linguistic content.<span style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace", color: "#39ff14" }}>"</span></em>
                <br />
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "19px", textAlign: "center" }}><strong>- Casulo (A LER VAZIOS)</strong></p>
            </div>
          </Grid>
        </Grid>
      </div>
      
      <Footer />
    </div>
  );
}
