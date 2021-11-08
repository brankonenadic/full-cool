import { Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";
import Home from "./pages/Home";
import SingupForm from "./layout/SingupForm";


function App() {
   const [showForm, setShowForm] = useState(false);
   const showFormModal = () => {
      setShowForm(true);
   };
   const closeFormModal = () => {
     setShowForm(false);
   };
  return (
    <Fragment>
     {showForm && <SingupForm  onClose={closeFormModal}/>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home onShow={showFormModal} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
