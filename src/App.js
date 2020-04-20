import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Info from "./components/info/Info";
import Notfound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Info} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;