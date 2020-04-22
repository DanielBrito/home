import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import { FaPlay } from "react-icons/fa";

import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import Button from "../../components/CustomButtons/Button"

import HeadShake from 'react-reveal/HeadShake';

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

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43];

const titles = [
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Dead Poets Society</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Action figure</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Presentation</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Sarauê</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Documentary</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>PROTESTIZANDO (2015)</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Intervention</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Concrete poetry</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>5ª Carreata Poética</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Zine #5</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Debugging HáLugar</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Concretagens</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Parada Poética</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>EnContrAção</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Augusto de Campos</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>No Ritmo de Algo</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>UFC Rapid Chess</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>É ARTE?</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Casa das Rosas</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Compixelar</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Evolve</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Out of the box</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Cruiser</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>BMX</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Poetry exhibition</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Math poem</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Poetry lecture</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Gente de Palavra</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>ANTIGR1F3</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Sandboarding</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Aluminions exhibition</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Sobrenome Liberdade</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>SOCRASTICKERS</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Book release</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Slam do 13</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Tribute</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Sobrenome Liberdade</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Exhibition</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Sobrenome Liberdade</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>SOCRASTICKERS</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Slam do 13 winner</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Sobrenome Liberdade</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Slammer</span>,
  <span style={{ color: "#39ff14", fontWeight: "bold" }}>Go veggie</span>,
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <HeadShake>
        <Button
          color="neon" round style={{ marginTop: "20px", marginBottom: "40px" }} size="md"
          title="Show images as slideshow"
          onClick={() => this.setState({ isOpen: true })}>
          <FaPlay style={{ marginRight: "5px" }} />
          Slideshow
        </Button>
        </HeadShake>


        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageCaption={'Image ' + (photoIndex + 1) + ' of ' + images.length}
            imageTitle={titles[photoIndex]}
          />
        )}
      </div>
    );
  }
}