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

import styles from "../../assets/jss/home/views/home.js";

import srcLogo from "../../assets/img/logo.png";

import Button from "../../components/CustomButtons/Button";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

import {
  FaBloggerB,
  FaPenNib,
  FaNewspaper,
  FaBookReader,
  FaQuestion,
  FaPaintBrush,
  FaBrain,
  FaVideo,
  FaRegCalendarCheck,
  FaSearch,
} from "react-icons/fa";

import imgPolymatus from "../../assets/img/blog/polymatus_logo.jpg";
import imgPoems from "../../assets/img/blog/poems.jpg";
import imgArticles from "../../assets/img/blog/news.jpg";
import imgReadings from "../../assets/img/blog/personal-library.jpg";
import imgReflections from "../../assets/img/blog/reflections.jpg";
import imgResearches from "../../assets/img/blog/researches.jpg";
import imgDrawings from "../../assets/img/blog/drawings.jpg";
import imgChallenges from "../../assets/img/blog/challenges.jpg";
import imgAudioVisual from "../../assets/img/blog/audiovisual.jpg";
import imgEvents from "../../assets/img/blog/events.jpg";

import Typewriter from "typewriter-effect";

import Snakke from "react-snakke";

const useStyles = makeStyles(styles);

export default function Blog() {
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
    document.title = "Daniel Brito | Blog";
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
                      typewriter.typeString("~$ POLYMATHY").start();
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
          style={{ marginBottom: "30px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgPolymatus}
                  alt="Polymatus Logo"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  POLYMATUS
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  Where I talk about everything and the like...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com.br/"
                    target="_blank"
                    title="Access blog"
                  >
                    <FaBloggerB
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          direction="row-reverse"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgPoems}
                  alt="Daniel Brito Poems"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  POEMS
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="https://pensador.uol.com.br/colecao/danielbrito41/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Pensador collection"
                  >
                    Free verses
                  </a>
                  , concretisms, haiku, sonnets...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/poemas-autorais_11.html"
                    target="_blank"
                    title="Access poems page"
                  >
                    <FaPenNib
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgArticles}
                  alt="Newspaper"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  NEWS
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  What's going on in the world...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/noticias_11.html"
                    target="_blank"
                    title="Access articles page"
                  >
                    <FaNewspaper
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          direction="row-reverse"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgReadings}
                  alt="Daniel Brito books"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  READINGS
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  Reviews, excerpts,{" "}
                  <a
                    href="https://www.skoob.com.br/usuario/1021319-dan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Skoob profile"
                  >
                    recommendations
                  </a>
                  ...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/biblioteca-marginal_11.html"
                    target="_blank"
                    title="Access readings page"
                  >
                    <FaBookReader
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgReflections}
                  alt="Daniel Brito Reflection"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  REFLECTIONS
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  The unexamined life is not worth living...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/reflexoes_11.html"
                    target="_blank"
                    title="Access reflections page"
                  >
                    <FaQuestion
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          direction="row-reverse"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgResearches}
                  alt="Research"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  RESEARCHES
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  Something about everything, everything about something...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/pesquisas.html"
                    target="_blank"
                    title="Access research page"
                  >
                    <FaSearch
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgDrawings}
                  alt="Daniel Brito Draw"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  DESIGN
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  Sketches, paintings, digital{" "}
                  <a
                    href="https://www.deviantart.com/danielhbrito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="DeviantArt profile"
                  >
                    art
                  </a>
                  ...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/tracos.html"
                    target="_blank"
                    title="Access drawings page"
                  >
                    <FaPaintBrush
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          direction="row-reverse"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgChallenges}
                  alt="Daniel Brito magazines"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  CH4LL3N635
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  Brain: use it or lose it...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/desafios_11.html"
                    target="_blank"
                    title="Access challenges page"
                  >
                    <FaBrain
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgAudioVisual}
                  alt="Daniel Brito favorite artists"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  AUDIO&VISUAL
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="https://open.spotify.com/user/xb93kruabsjskn5chjqo127ep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Spotify profile"
                  >
                    Music
                  </a>
                  , documentaries, <a
                    href="https://filmow.com/usuario/daniel_brito/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Filmow profile"
                  >
                    movies
                  </a>, <a
                    href="https://myanimelist.net/profile/danielbrito41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="MyAnimeList profile"
                  >
                    animes
                  </a>
                  ...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/audio_11.html"
                    target="_blank"
                    title="Access audiovisual page"
                  >
                    <FaVideo
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
          direction="row-reverse"
          style={{ marginTop: "50px" }}
        >
          <Grid item lg={6}>
            <div>
              <Zoom>
                <img
                  src={imgEvents}
                  alt="Daniel Brito events"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  EVENTS
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="http://daniel-brito.blogspot.com/p/saraus-e-slams.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Poetry reunions and slams page"
                  >
                    Poetry reunions
                  </a>
                  , exhibitions, lectures, workshops...
                </p>
                <HeadShake>
                  <Button
                    color="neon"
                    round
                    style={{ marginTop: "20px" }}
                    size="md"
                    href="http://daniel-brito.blogspot.com/p/agenda.html"
                    target="_blank"
                    title="Access events page"
                  >
                    <FaRegCalendarCheck
                      className={classes.icons}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    ACCESS
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
