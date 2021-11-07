import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment, useState } from "react";
import Home from "./pages/Home";
import SingupForm from "./pages/Singup";


function App() {
  const [issignup, setIssignup] = useState(false);
  return (
    <Fragment>
      {/* <SingupForm /> */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
