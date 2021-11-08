import { Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";
import Home from "./pages/Home";
import SingupForm from "./layout/SingupForm";
import Message from "./layout/Message";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showMessage, setshowMessage] = useState(false)
  const showFormModal = () => {
    setShowForm(true);
  };
  const closeFormModal = () => {
    setShowForm(false);
  };

  const showMessageHandler = () => {
    setshowMessage(true);
  };
  const closeMessageHandler = () => {
    setshowMessage(false);
  };

  return (
    <Fragment>
      {showForm && <SingupForm onClose={closeFormModal} />}
      {showMessage && <Message onAbort={closeMessageHandler} />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home onShow={showFormModal} onShowM={showMessageHandler} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
