import React, { useEffect } from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";
import Stars from "../../components/Stars/Stars";

import { HashLink as Link } from "react-router-hash-link";

import styles from "../../assets/jss/home/views/home.js";

import Button from "../../components/CustomButtons/Button";

import srcLogo from "../../assets/img/logo.png";

import imgPortalSertoes from "../../assets/img/media/halugar_portal_sertoes_240220.jpg";
import imgUFC from "../../assets/img/media/halugar_ufc_crateus_noticias_010320.jpg";

import { FaNewspaper } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import HeadShake from "react-reveal/HeadShake";

import Snakke from "react-snakke";

const useStyles = makeStyles(styles);

export default function Media() {
  const classes = useStyles();
  const logo = (
    <img
      src={srcLogo}
      alt="Daniel Brito logo"
      style={{ width: 60, height: 60 }}
    />
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Daniel Brito | Media";
  });

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
          color: "neon",
        }}
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
                      delay: 150,
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString("~$ ABROAD").start();
                    }}
                  />
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <Stars />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <Zoom>
                <img
                  src={imgUFC}
                  alt="Daniel Brito UFC HáLugar"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <p style={{ marginTop: "0px" }}>
                  <em>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontFamily: "monospace",
                        color: "#39ff14",
                      }}
                    >
                      "
                    </span>
                    <Link
                      to="/projects"
                      style={{ textDecoration: "none" }}
                      title="More"
                      className={classes.externalLink}
                    >
                      HáLugar
                    </Link>{" "}
                    has gained the attention of the city residents. A few days
                    after launched, it already had advertisements registered.
                    For the professor of the discipline, who suported the
                    software publication, this initiative will encourage the
                    development of more ideas by students.
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontFamily: "monospace",
                        color: "#39ff14",
                      }}
                    >
                      "
                    </span>
                  </em>
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://crateus.ufc.br/cc/2020/03/01/estudante-de-ciencia-da-computacao-desenvolve-aplicativo-para-quem-deseja-compartilhar-moradia/"
                    target="_blank"
                    title="Read full article"
                  >
                    <FaNewspaper
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    READ
                  </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          direction="row-reverse"
          alignItems="center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <Zoom>
                <img
                  src={imgPortalSertoes}
                  alt="Daniel Brito Portal Sertões HáLugar"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <p style={{ marginTop: "0px" }}>
                  <em>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontFamily: "monospace",
                        color: "#39ff14",
                      }}
                    >
                      "
                    </span>
                    <Link
                      to="/projects"
                      style={{ textDecoration: "none" }}
                      title="More"
                      className={classes.externalLink}
                    >
                      HáLugar
                    </Link>{" "}
                    was developed by Daniel Brito, a Computer Science student at
                    the Federal University of Ceará (Crateús Campus), during the
                    disciplines of Web and Mobile Development, taught by
                    professor Francisco Anderson de Almada Gomes.
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontFamily: "monospace",
                        color: "#39ff14",
                      }}
                    >
                      "
                    </span>
                  </em>
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="https://www.portalsertoes.com/2020/02/estudante-da-ufc-de-crateus-desenvolve.html"
                    target="_blank"
                    title="Read full article"
                  >
                    <FaNewspaper
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    READ
                  </Button>
                </HeadShake>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=LVshZDPiIy8"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                A brief tribute by Paola Silva in her project called <em>Curta
                Poesias</em>.
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          direction="row-reverse"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=wSN3jBGo5pQ"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <em>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      color: "#39ff14",
                    }}
                  >
                    "
                  </span>
                  Art é Arte! shows the surprising harmony within this
                  'anarchic' event and reveals the voice of artists from the
                  suburb.
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "monospace",
                      color: "#39ff14",
                    }}
                  >
                    "
                  </span>
                </em>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=T3VHeEjBwS0"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                In my first interview, which was granted to colleagues from <em>TV Grajaú</em>, I talked about myself, my projects and future plans.
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
