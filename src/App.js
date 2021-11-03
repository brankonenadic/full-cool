import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./components/sections/Navbar";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
