import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
          <About />
          <Projects id="projects"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
