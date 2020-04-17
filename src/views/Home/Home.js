import React from "react";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";

export default function Home(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="DaNieL BRiTo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
        {...rest}
      />
      <span style={{color: "#000000", fontSize: "100px"}}>DANIEL</span>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <h1 style={{color: "#000000"}}>DANIEL</h1>
      <span style={{color: "#000000"}}>DANIEL</span>
    </div>
  );
}
