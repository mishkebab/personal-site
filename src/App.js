import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Footer />
          <Home />
          <About />
          <Projects />
          <Skills />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
