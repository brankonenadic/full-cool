import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./components/sections/Navbar";
import Home from "./pages/Home";
import Singup from "./pages/Singup";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
        <Home />
        </Route>
        <Route path="/sing-up" exact>
          <Singup />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
