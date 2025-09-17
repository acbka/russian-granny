import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "api/store";
import HomePage from "pages/HomePage";
import DishesPage from "pages/DishesPage";
import SetsPage from "pages/setsPage/SetsPage";
import CartPage from "pages/CartPage";
import { getDishes } from "./api/requests/getDishes";
import { getSets } from "./api/requests/getSets";
import ContactFormPage from "./pages/ContactFormPage";
import ErrorPage from "./pages/ErrorPage";
import FinalPage from "./pages/FinalPage";

function App() {
  const dispatch = useAppDispatch();

  dispatch(getDishes());
  dispatch(getSets());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dishes/:category" element={<DishesPage />} />
        <Route path="/sets" element={<SetsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/form" element={<ContactFormPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
