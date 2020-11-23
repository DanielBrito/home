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
import Stars from "../../components/Stars/Stars";

import styles from "../../assets/jss/home/views/home.js";

import srcLogo from "../../assets/img/logo.png";

import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";

import Fade from "react-reveal/Fade";
import Snakke from "react-snakke";

const useStyles = makeStyles(styles);

export default function Videos() {
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
    document.title = "Daniel Brito | Videos";
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
                      typewriter.typeString("~$ YOUTUBING").start();
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
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/playlist?list=PLckh4uyjCOmhoNX55YHSDAlVW6cRjkwT_"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  Fire Tasks
                </Link>
                  {" "} is an awesome to-do list application built with ReactJS, Styled
                Components and Firestore.
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
                url="https://www.youtube.com/playlist?list=PLckh4uyjCOmgV4vtHXVed1X4N04-ah0Ev"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  Compixelar
                </Link>
                {" "}: Compiling art through creative coding experiments.
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=9wHZYrn7aEE"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Screencast of{" "}
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  HáLugar
                </Link>
                , an app aimed at students who wish to share housing.
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
                url="https://www.youtube.com/watch?v=M_IkGl3AcqE"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Far from being a professional work, this animation of{" "}
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  HáLugar
                </Link>{" "}
                app was created to put into practice some modeling and 3D animation techniques using Blender.
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          id={"programming"}
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/playlist?list=PLckh4uyjCOmjvKSfrDDJ6oh1lIF3qJ3hM"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Evolving through the analysis and resolution of challenges from{" "}
                <em>
                  <a
                    href="https://github.com/DanielBrito/competitive-programming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.contactLink}
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    title="Access repository"
                  >
                    Competitive Programming
                  </a>
                  .
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
          direction="row-reverse"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?list=PLckh4uyjCOmgfzGEdPT_UZ14DxKlymoxX&v=J1455fDvGbA"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                <em>
                  <a
                    href="https://github.com/DanielBrito/videos-youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.contactLink}
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    title="Access repository"
                  >
                    Programming Fundamentals
                  </a>
                </em>{" "}
                applied in practical scenarios.
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=QniP7mjY9Rs"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                For those people interested in the creation process of the{" "}
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  Aluminions
                </Link>
                .
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
                url="https://www.youtube.com/watch?v=qRmpaXgMros"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                This brief animation of the{" "}
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  Aluminions
                </Link>{" "}
                was created using the stop motion technique.
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=ICX667nOIOA"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Modeling the{" "}
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  Aluminions
                </Link>{" "}
                is the beginning of the process in which I intend to create a
                game.
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          id={"grajau_em_foco"}
          container
          spacing={5}
          justify="center"
          alignItems="center"
          direction="row-reverse"
          style={{ marginTop: "30px" }}
        >
          <Grid item lg={7}>
            <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=R80bigCpxMA"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Fade>
              <div style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Produced by{" "}
                <Link
                  to="/projects"
                  style={{ textDecoration: "none" }}
                  title="More"
                  className={classes.externalLink}
                >
                  Sarau do Grajaú
                </Link>, {" "} this documentary makes a sensitive cut of the so-called poetic scene in the suburb.
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
