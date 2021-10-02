import HomePage from "pages/HomePage";
import Dishes from "pages/Dishes";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dishes from "api/dishes.json";
import { useAppDispatch } from "api/store";
import { setDishes } from "api/dishesSlice";

function App() {
  const dispatch = useAppDispatch();
  dispatch(setDishes(dishes));
  return (
    <Router>
      <Switch>
        <Route path="/soups">
          <Dishes />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
