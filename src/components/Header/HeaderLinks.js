/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/AccountCircle';
import BooksIcon from '@material-ui/icons/MenuBook';
import ProjectsIcon from '@material-ui/icons/EmojiObjects';
import PicturesIcon from '@material-ui/icons/PhotoLibrary';
import VideoIcon from '@material-ui/icons/Videocam';
import ContactIcon from '@material-ui/icons/Mail';
// @font-awesome/icons
import { FaBlogger, FaNewspaper } from "react-icons/fa";

// core components
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/home/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AboutIcon className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <BooksIcon className={classes.icons} /> Books
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ProjectsIcon className={classes.icons} /> Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PicturesIcon className={classes.icons} /> Pictures
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <VideoIcon className={classes.icons} /> Videos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <FaBlogger className={classes.icons} /> Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <FaNewspaper className={classes.icons} /> Media
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ContactIcon className={classes.icons} /> Contact
        </Button>
      </ListItem>
    </List>
  );
}
