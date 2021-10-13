import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dishes from "api/json/dishes.json";
import sets from "api/json/sets.json";
import { useAppDispatch } from "api/store";
import { setDishes } from "api/dishesSlice";
import HomePage from "pages/HomePage";
import Dishes from "pages/dishesPage/Dishes";
import SetsPage from "pages/setsPage/SetsPage";
import OrderPage from "pages/OrderPage";
import ContactFormPage from "pages/ContactFormPage";
import FinalPage from "pages/FinalPage";
import { setSets } from "api/setsSlice";

function App() {
   const dispatch = useAppDispatch();
   
  dispatch(setDishes(dishes));
  dispatch(setSets(sets));

  return (
    <Router>
      <Switch>
        <Route path="/dishes/:category">
          <Dishes />
        </Route>
        <Route path="/sets">
          <SetsPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/form">
          <ContactFormPage />
        </Route>
        <Route path="/final">
          <FinalPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
