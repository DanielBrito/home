import React, { useEffect } from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { HashLink as Link } from "react-router-hash-link";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";
import Stars from "../../components/Stars/Stars";

import styles from "../../assets/jss/home/views/home.js";

import srcLogo from "../../assets/img/logo.png";

import imgPinacograma from "../../assets/img/home/daniel-brito-pinacograma.gif";
import imgSophia from "../../assets/img/home/cooperifa.jpg";
import imgAntonioMiotto from "../../assets/img/home/teorema-poesia-visual-alessa-melo.jpg";
import imgEdileneSantos from "../../assets/img/home/sarau-do-grajau-daniel-alexandrino.jpg";
import imgLessioCardoso from "../../assets/img/home/sobrenome-liberdade-alessa-melo.jpg";
import imgCasulo from "../../assets/img/home/sarau-do-grajau-johnny-nogueira.jpg";

import Typewriter from "typewriter-effect";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import Snakke from "react-snakke";

const useStyles = makeStyles(styles);

export default function Home() {
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
    document.title = "Daniel Brito | Home";
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
                      typewriter.typeString("~$ HELLO, WORLD!").start();
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
            <div>
              <Zoom>
                <img
                  src={imgPinacograma}
                  alt="Daniel Brito Pinacograma"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <Link
                  to="/books"
                  style={{ textDecoration: "none" }}
                  title="More"
                >
                  <h1
                    className={classes.linkTitle}
                    style={{
                      color: "#FFFFFF",
                      textAlign: "center",
                      marginTop: "0px",
                    }}
                  >
                    A LER VAZIØS
                  </h1>
                </Link>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "19px",
                    textAlign: "justify",
                  }}
                >
                  <em>
                    unlike anything we'
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      D
                    </span>{" "}
                    expect, the poetics in "a ler vazios" makes the he
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      A
                    </span>
                    rt of machines feel, not only the huma
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      N
                    </span>
                    , but it also invites us to go further. it's essential to
                    glimpse art in mathemat
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      I
                    </span>
                    cs. simple and complex exp
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      E
                    </span>
                    riments to be deciphered.{" "}
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      L
                    </span>
                    iberty for the senses.
                  </em>
                  <br />
                  <br />
                  <em>
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      B
                    </span>
                    rilliant artistic investigations by a young genius of the
                    streets. he redoes scenes,{" "}
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      R
                    </span>
                    evolutionizes, affirms his place in the world. impetuous and
                    concrete, dan
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      I
                    </span>
                    el brito spreads poetry. all dialogue will now take place in
                    his con
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      T
                    </span>
                    act with yours. listen and speak, feel and reveal. there's p
                    <span style={{ fontWeight: "bold", color: "#39ff14" }}>
                      O
                    </span>
                    etry everywhere.
                  </em>
                  <br />
                </p>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "19px",
                    textAlign: "center",
                  }}
                >
                  <strong>- Janaína Moitinho</strong>
                </span>
              </div>
            </Fade>
          </Grid>
        </Grid>
        <div>
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
                    src={imgSophia}
                    alt="Daniel Brito Sarau"
                    width="100%"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #39ff14",
                    }}
                  ></img>
                </Zoom>
              </div>
            </Grid>
            <Grid item lg={7}>
              <Fade>
                <div style={{ backgroundColor: "#000000" }}>
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontSize: "19px",
                      textAlign: "center",
                      marginTop: "0px",
                    }}
                  >
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
                      For most existentialists, two were the privileged ways for
                      humans to accept and face their finitude: through the arts
                      and political-revolutionary action. In these exceptional
                      forms of activity, they would be able to give meaning to
                      the brevity of their lives.
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
                    <br />
                  </p>
                  <Link
                    to="/books"
                    style={{ textDecoration: "none" }}
                    title="More"
                  >
                    <span
                      className={classes.link}
                      style={{
                        color: "#FFFFFF",
                        fontSize: "19px",
                        textAlign: "center",
                      }}
                    >
                      <strong>- Sophia (PROTESTIZANDO)</strong>
                    </span>
                  </Link>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "50px", marginBotto: "50px" }}
        >
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgAntonioMiotto}
                  alt="Daniel Brito Sarau"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "19px",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
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
                    In his early twenties, Daniel Brito, a diamond who polishes
                    himself when he says 'yes' to poetry! With the book, he
                    commits himself, for the second time in his life, to what I
                    dare say: post-neo-concrete poetry. A herculean objective
                    which was never a craziness. No reading deadlines or endless
                    demands.
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
                  <br />
                </p>
                <Link
                  to="/books"
                  style={{ textDecoration: "none" }}
                  title="More"
                >
                  <span
                    className={classes.link}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "19px",
                      textAlign: "center",
                    }}
                  >
                    <strong>- Antonio Miotto (A LER VAZIOS)</strong>
                  </span>
                </Link>
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
          style={{ marginTop: "50px", marginBotto: "50px" }}
        >
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgEdileneSantos}
                  alt="Daniel Brito Sarau"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "19px",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
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
                    Daniel Brito is a name that appears in the suburban poetic
                    scene, but who's already a world citizen, because of the
                    reach of his literary ability. And the most incredible thing
                    is that he's right here, contemporary with us, and promises
                    to stay.
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
                  <br />
                </p>
                <Link
                  to="/books"
                  style={{ textDecoration: "none" }}
                  title="More"
                >
                  <span
                    className={classes.link}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "19px",
                      textAlign: "center",
                    }}
                  >
                    <strong>- Edilene Santos (A LER VAZIOS)</strong>
                  </span>
                </Link>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          justify="center"
          alignItems="center"
          style={{ marginTop: "50px", marginBotto: "50px" }}
        >
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgLessioCardoso}
                  alt="Daniel Brito Sarau"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "19px",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
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
                    Each text brings the way to be read. Discovering this code
                    will be the main challenge for the reader who, maintaining
                    his freedom, will need a good repertoire for this
                    decoding... The credit goes to the author, who masters all
                    these languages and managed that the next page has always a
                    reserved surprise.
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
                  <br />
                </p>
                <Link
                  to="/books"
                  style={{ textDecoration: "none" }}
                  title="More"
                >
                  <span
                    className={classes.link}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "19px",
                      textAlign: "center",
                    }}
                  >
                    <strong>- Léssio Cardoso (A LER VAZIOS)</strong>
                  </span>
                </Link>
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
          <Grid item lg={5}>
            <div>
              <Zoom>
                <img
                  src={imgCasulo}
                  alt="Daniel Brito Sarau"
                  width="100%"
                  style={{ borderRadius: "10px", border: "1px solid #39ff14" }}
                ></img>
              </Zoom>
            </div>
          </Grid>
          <Grid item lg={7}>
            <Fade>
              <div style={{ backgroundColor: "#000000" }}>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "19px",
                    textAlign: "center",
                    marginTop: "0px",
                  }}
                >
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
                    The poet in question becomes a bridge architect so that
                    readers have access to all his creativity. And I can
                    guarantee to the future adventurers: each page is a postcard
                    for the eyes of people hungry for visual aesthetics and
                    linguistic content.
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
                  <br />
                </p>
                <Link
                  to="/books"
                  style={{ textDecoration: "none" }}
                  title="More"
                >
                  <span
                    className={classes.link}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "19px",
                      textAlign: "center",
                    }}
                  >
                    <strong>- Casulo (A LER VAZIOS)</strong>
                  </span>
                </Link>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
