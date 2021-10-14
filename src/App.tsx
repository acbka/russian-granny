import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dishes from "api/json/dishes.json";
import sets from "api/json/sets.json";
import { useAppDispatch } from "api/store";
import { setDishes } from "api/dishesSlice";
import { setSets } from "api/setsSlice";
import { setType } from "common/types";
import HomePage from "pages/HomePage";
import Dishes from "pages/dishesPage/Dishes";
import SetsPage from "pages/setsPage/SetsPage";
import OrderPage from "pages/OrderPage";
import ContactFormPage from "pages/ContactFormPage";
import FinalPage from "pages/FinalPage";

function App() {
  const dispatch = useAppDispatch();
  dispatch(setDishes(dishes));
  let setsDishes = [];
  let tempSets: setType[] = [];

  for (let i = 0; i < sets.length; i++) {
    setsDishes = sets[i].dishes.map((item) =>
      dishes.find((dish) => dish.id === item)
    );
    let tempSet = { ...sets[i], dishes: setsDishes };
    tempSets.push(tempSet as setType);
  }

  dispatch(setSets(tempSets));

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
