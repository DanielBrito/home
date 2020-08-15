import React, { useEffect } from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";

import { HashLink as Link } from "react-router-hash-link";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";

import styles from "../../assets/jss/home/views/home.js";

import srcLogo from "../../assets/img/logo.png";

import imgEducationWork from "../../assets/img/about/brito.gif";
import imgProjects from "../../assets/img/about/observar-absorver-alessa-melo.gif";
import imgInterests from "../../assets/img/about/insight.gif";

import Stars from "../../components/Stars/Stars";
import Typewriter from "typewriter-effect";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import Snakke from "react-snakke";

const useStyles = makeStyles(styles);

var today = new Date();
var diff =
  new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  ).getTime() - new Date(1993, 1, 4).getTime();
var diffDays = diff / (1000 * 60 * 60 * 24);

export default function About() {
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
    document.title = "Daniel Brito | About";
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
                      typewriter.typeString("~$ DNL BRT").start();
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
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgEducationWork}
                  alt="Daniel Brito Tech Gif"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  <em>MY BRIEF HISTORY</em>
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "justify",
                  }}
                >
                  I was born in São Paulo/SP - Brazil, {diffDays} days ago. For
                  most of my life, I lived in the district of Grajaú, except for
                  a year I spent in Viçosa/CE during my childhood. In this
                  period, I enjoyed playing soccer, video-games, and creating
                  stuff, like small towns with my toys and new technologies with
                  parts of them. Later, I got my first computer, and I just fell
                  in love with it. I didn't know how to program yet, but I liked
                  to hack it, play games, and surf on the (dial-up) internet.
                  <br />
                  <br />
                  When I was 16, I got my first job as an apprentice at CAMP
                  Pinheiros. After a while, as a result of doing good work, I
                  achieved an effective position as an office assistant at CPFL
                  Renováveis.
                  <br />
                  <br />
                  After studying in different public schools, I got accepted at
                  the Faculty of Technology (FATEC) to study Analysis and
                  Systems Development. However, in search of new challenges, I
                  decided to move to Crateús to study Computer Science at the
                  Federal University of Ceará (UFC), where I've gotten some
                  scholarships to work on projects in the fields of mobile and
                  web development, computer graphics, and education. As
                  described in my{" "}
                  <a
                    href="https://drive.google.com/file/d/1bOFjCfhoyabvcZ7LXf5T3EtY9h6umsaR/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Read"
                  >
                    resumé
                  </a>{" "}
                  and{" "}
                  <a
                    href="http://lattes.cnpq.br/6587136026055239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Access"
                  >
                    Lattes curriculum
                  </a>
                  , I'm an intern developing intelligent applications to the
                  health public system management. I'm also a member of{" "}
                  <a
                    href="https://github.com/GEMP-UFC-Crateus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="More"
                  >
                    GEMP
                  </a>
                  , a group of studies for the SBC Programming Marathon.
                </p>
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
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgProjects}
                  alt="Daniel Brito Gif"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  <em>TO BE OR NOT TO BE</em>
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "justify",
                  }}
                >
                  I'm the author of{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    COMPIXELAR
                  </Link>
                  . I'm a{" "}
                  <Link
                    to="/books"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    FANZINER
                  </Link>
                  . I built the{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    HáLUGAR
                  </Link>{" "}
                  app. I'm the creator of the{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    ALUMINIONS
                  </Link>
                  . I'm a thinker at{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    FORA DA CAIXA
                  </Link>
                  . I'm a tailleur at{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    ANTIGR1F3
                  </Link>
                  . I'm a curator at{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    GALERIA MARGINAL
                  </Link>
                  . I'm a kind of YouTuber, who likes to talk about{" "}
                  <Link
                    to="/videos"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    PROGRAMMING
                  </Link>
                  . I'm a worker at{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    COLETIVA CONCRETAGENS
                  </Link>
                  . I disseminate Philosophy and Art through the{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    SOCRASTICKERS
                  </Link>
                  .<br />
                  <br />I integrated{" "}
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    SARAU DO GRAJAÚ
                  </Link>{" "}
                  collective, which produced the documentary{" "}
                  <Link
                    to="/videos"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    GRAJAÚ EM FOCO
                  </Link>
                  .<br />
                  <br />I published the book{" "}
                  <Link
                    to="/books"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    PROTESTIZANDO
                  </Link>{" "}
                  (2015), which compiles my first poems. I published the book{" "}
                  <Link
                    to="/books"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    A LER VAZIOS
                  </Link>{" "}
                  (2016), which includes some of my poetic and visual
                  experiments. I've also been published in several anthologies
                  with other marginal authors.
                  <br />
                  <br />
                  As an inborn scientist and visual artist, I focus my research
                  on{" "}
                  <a
                    href="https://github.com/DanielBrito/generative-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Access repository"
                  >
                    GENERATIVE DESIGN
                  </a>
                  , which is a process of making algorithms to generate art.
                  <br />
                  <br />
                  Moreover, I'm also following the steps to become a full-stack
                  developer.
                </p>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "50px" }}
        >
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgInterests}
                  alt="Daniel Brito Gif"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <h1
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
                  <em>LIFE, THE UNIVERSE AND EVERYTHING</em>
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    textAlign: "justify",
                  }}
                >
                  After escaping from Plato's cave, John Keating taught me to
                  seize the day in order to make my life extraordinary.
                  <br />
                  <br />
                  Through the exact sciences, I get fascinated as I discover the
                  cosmos. Through the social sciences, I seek to understand the
                  world that I live in and the several cultures that surround
                  me. Through technology, I try to create solutions that promote
                  social progress.
                  <br />
                  <br />
                  Riding BMX and skateboarding provide me some good doses of
                  adrenaline. Calisthenics and{" "}
                  <a
                    href="https://lichess.org/@/danielbrito41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Lichess profile"
                  >
                    neurobics
                  </a>{" "}
                  help me to train my body and my mind.
                  <br />
                  <br />I bring with me an increasing appreciation for the{" "}
                  <a
                    href="https://filmow.com/usuario/daniel_brito/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Filmow profile"
                  >
                    Seventh Art
                  </a>
                  , and my{" "}
                  <a
                    href="https://open.spotify.com/user/xb93kruabsjskn5chjqo127ep?si=oWza3WozRimzC7rt965_ww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Spotify profile"
                  >
                    musical taste
                  </a>{" "}
                  ranges from tuned pianos to distorted guitars.
                  <br />
                  <br />I value respect for every sentient being, as well as the
                  DIY attitude, the self-learning lifestyle,{" "}
                  <a
                    href="https://www.duolingo.com/DanBrito41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.externalLink}
                    style={{ textDecoration: "none", color: "white" }}
                    title="Duolingo profile"
                  >
                    polyglotism
                  </a>
                  , and{" "}
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none" }}
                    title="More"
                    className={classes.externalLink}
                  >
                    polymathy
                  </Link>
                  .<br />
                  <br />
                  Discovering new worlds is my biggest existential goal.
                </p>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
