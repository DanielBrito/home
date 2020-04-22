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

import img0 from "../../assets/img/pictures/img0.jpg"
import img1 from "../../assets/img/pictures/img1.jpg"
import img2 from "../../assets/img/pictures/img2.jpg"
import img3 from "../../assets/img/pictures/img3.jpg"
import img4 from "../../assets/img/pictures/img4.jpg"
import img5 from "../../assets/img/pictures/img5.jpg"
import img6 from "../../assets/img/pictures/img6.jpg"
import img7 from "../../assets/img/pictures/img7.jpg"
import img8 from "../../assets/img/pictures/img8.jpg"
import img9 from "../../assets/img/pictures/img9.jpg"
import img10 from "../../assets/img/pictures/img10.jpg"
import img11 from "../../assets/img/pictures/img11.jpg"
import img12 from "../../assets/img/pictures/img12.jpg"
import img13 from "../../assets/img/pictures/img13.jpg"
import img14 from "../../assets/img/pictures/img14.jpg"
import img15 from "../../assets/img/pictures/img15.jpg"
import img16 from "../../assets/img/pictures/img16.jpg"
import img17 from "../../assets/img/pictures/img17.jpg"
import img18 from "../../assets/img/pictures/img18.jpg"
import img19 from "../../assets/img/pictures/img19.gif"
import img20 from "../../assets/img/pictures/img20.jpg"
import img21 from "../../assets/img/pictures/img21.jpg"
import img22 from "../../assets/img/pictures/img22.jpg"
import img23 from "../../assets/img/pictures/img23.jpg"
import img24 from "../../assets/img/pictures/img24.jpg"
import img25 from "../../assets/img/pictures/img25.jpg"
import img26 from "../../assets/img/pictures/img26.jpg"
import img27 from "../../assets/img/pictures/img27.jpg"
import img28 from "../../assets/img/pictures/img28.jpg"
import img29 from "../../assets/img/pictures/img29.jpg"
import img30 from "../../assets/img/pictures/img30.jpg"
import img31 from "../../assets/img/pictures/img31.jpg"
import img32 from "../../assets/img/pictures/img32.jpg"
import img33 from "../../assets/img/pictures/img33.jpg"
import img34 from "../../assets/img/pictures/img34.jpg"
import img35 from "../../assets/img/pictures/img35.jpg"
import img36 from "../../assets/img/pictures/img36.jpg"
import img37 from "../../assets/img/pictures/img37.jpg"
import img38 from "../../assets/img/pictures/img38.jpg"
import img39 from "../../assets/img/pictures/img39.jpg"
import img40 from "../../assets/img/pictures/img40.jpg"
import img41 from "../../assets/img/pictures/img41.jpg"
import img42 from "../../assets/img/pictures/img42.jpg"
import img43 from "../../assets/img/pictures/img43.jpg"

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect';

import Gallery from '../../components/Gallery/Gallery'

const useStyles = makeStyles(styles);

export default function Pictures(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const logo = <img src={srcLogo} alt="Daniel Brito logo" style={{ width: 60, height: 60 }} />

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = "Daniel Brito - PICTURES"
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
                        .typeString('~$ PICTURES')
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

        <Gallery/>

        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item lg={6}>
            <div>
              <img src={img0} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img1} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img2} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img3} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img4} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img5} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img6} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img7} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img8} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img9} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img10} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img11} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img12} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img13} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img14} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img15} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img16} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img17} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img18} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img19} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img20} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img21} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img22} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img23} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img24} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img25} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img26} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img27} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img28} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img29} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img30} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img31} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img32} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img33} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img34} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img35} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img36} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img37} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img38} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img39} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img40} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img41} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img42} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>

          <Grid item lg={6}>
            <div>
              <img src={img43} alt="Learn" width="100%" style={{ borderRadius: "10px", border: "1px solid #39ff14" }}></img>
            </div>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}