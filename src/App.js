import React, { useState, useEffect } from "react";
import { Switch, Route,Link } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import Confirm from "./components/confirm";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  const initialOrder = []

  const[order, setOrder] = useState(initialOrder)
  

  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <span>
        <Link to="/" >Home</Link>
        <Link to="/help">Help</Link>
      </span>
      </header>
      <div>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/pizza">
          <Pizza  order={order} setOrder={setOrder}/>
          </Route>
          <Route exact path="/Confirm">
          <Confirm  order={order} />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
