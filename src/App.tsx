import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Category from "./components/Category";

import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />

        <Route path="/category/:type?" component={Category} />
      </Switch>
    </main>
  );
};

export default App;
