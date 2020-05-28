import React from "react";

import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/AccountCircle";
import BooksIcon from "@material-ui/icons/MenuBook";
import ProjectsIcon from "@material-ui/icons/EmojiObjects";
import PicturesIcon from "@material-ui/icons/PhotoLibrary";
import VideoIcon from "@material-ui/icons/Videocam";
import ContactIcon from "@material-ui/icons/Mail";

import { FaBlogger, FaNewspaper } from "react-icons/fa";

import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/home/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          exact
          to="/"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <HomeIcon className={classes.icons} /> Home
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/about"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <AboutIcon className={classes.icons} /> About
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/books"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <BooksIcon className={classes.icons} /> Books
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/projects"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <ProjectsIcon className={classes.icons} /> Projects
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/pictures"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <PicturesIcon className={classes.icons} /> Pictures
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/videos"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <VideoIcon className={classes.icons} /> Videos
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/blog"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <FaBlogger className={classes.icons} /> Blog
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/media"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <FaNewspaper className={classes.icons} /> Media
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          activeStyle={{
            color: "#000000",
            background: "#39ff14",
            borderRadius: "10px",
          }}
          to="/contact"
          className={classes.listItem}
        >
          <Button href="" color="transparent" className={classes.navLink}>
            <ContactIcon className={classes.icons} /> Contact
          </Button>
        </NavLink>
      </ListItem>
    </List>
  );
}
