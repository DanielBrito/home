import { defaultFont } from "../../general";

import tooltip from "../../../jss/home/tooltipsStyle";

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "#39ff14"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    textDecoration: "none",
    display: "block",
    width: "auto",
    marginLeft: "3px",
    marginRight: "3px",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "0px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "bold",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    lineHeight: "20px",
    textDecoration: "none",
    marginTop: "5px",
    marginBottom: "5px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#39ff14",
      background: "#000000",
      boxShadow: "0px 0px 5px #39ff14;"  /* bright */
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 10px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "#39ff14",
    position: "relative",
    background: "#000000",
    boxShadow: "0px 0px 5px #39ff14;",  /* bright */
    padding: "0.9375rem",
    fontWeight: "bold",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    lineHeight: "20px",
    textDecoration: "none",
    marginTop: "5px",
    marginBottom: "5px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#39ff14",
      background: "#39ff1433",
      boxShadow: "0px 0px 5px #39ff14;",  /* bright */
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 10px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
    // color: "#FFFF",
    // padding: "0.9375rem",
    // fontWeight: "bold",
    // borderRadius: "10px",
    // backgroundColor: "rgba(20, 255, 20, 0.5)",
    // boxShadow: "0px 0px 10px #39ff14;"  /* bright */
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "5px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
