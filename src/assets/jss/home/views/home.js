import { container } from "../../general";

const homeStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    textShadow: "4px 4px 5px #000000"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "5px 0 0",
    textShadow: "4px 4px 5px #000000"
  },
  main: {
    background: "#000000",
    position: "relative",
    zIndex: "3",
    border: "1px solid #39ff14",
    maxWidth: "978px",
  },
  mainRaised: {
    marginTop: "-60px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px 2px rgba(0, 200, 0, 0.14), 0 6px 30px 5px rgba(0, 200, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textShadow: "0px 0px 4px #39ff14;"  /* bright */
    },
  },
  linkTitle: {
    textDecoration: "none",
    "&:hover": {
      textShadow: "0px 0px 5px #39ff14;"  /* bright */
    },
  },
  textCenter: {
    textAlign: "center"
  }
};

export default homeStyle;