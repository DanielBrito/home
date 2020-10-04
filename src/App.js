import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/views/Home/Home";
import About from "../src/views/About/About";
import Books from "../src/views/Books/Books";
import Projects from "../src/views/Projects/Projects";
import Pictures from "../src/views/Pictures/Pictures";
import Videos from "../src/views/Videos/Videos";
import Blog from "../src/views/Blog/Blog";
import Media from "../src/views/Media/Media";
import Contact from "../src/views/Contact/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
            <Route path="/projects" component={Projects} />
            <Route path="/pictures" component={Pictures} />
            <Route path="/videos" component={Videos} />
            <Route path="/blog" component={Blog} />
            <Route path="/media" component={Media} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
