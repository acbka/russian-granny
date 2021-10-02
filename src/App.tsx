import HomePage from "pages/HomePage";
import Dishes from "pages/Dishes";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dishes from "api/dishes.json";
import { useAppDispatch } from "api/store";
import { setDishes } from "api/dishesSlice";
import SetsPage from "pages/SetsPage";

function App() {
  const dispatch = useAppDispatch();
  dispatch(setDishes(dishes));
  return (
    <Router>
      <Switch>
        <Route path="/dishes/:category">
          <Dishes />
           </Route>
           <Route path="/sets">
          <SetsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
