import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useAppDispatch } from "api/store";
import { SetType } from "common/types";
import HomePage from "pages/HomePage";
import DishesPage from "pages/dishesPage/DishesPage";
import SetsPage from "pages/setsPage/SetsPage";
import CartPage from "pages/CartPage";
import ContactFormPage from "pages/ContactFormPage";
import FinalPage from "pages/FinalPage";
import ErrorPage from "pages/ErrorPage";
import { getDishes } from "api/requests/getDishes";
import { getSets } from "api/requests/getSets";

function App() {
  const dispatch = useAppDispatch();

  dispatch(getDishes());
//   dispatch(getSets());

  return (
    <HashRouter>
      <Switch>
        <Route path="/dishes/:category">
          <DishesPage />
        </Route>
        <Route path="/sets">
          <SetsPage />
        </Route>
        <Route path="/cart">
          <CartPage />
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
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
