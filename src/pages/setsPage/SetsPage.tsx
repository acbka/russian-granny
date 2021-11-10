import React, { Suspense, useEffect } from "react";
import styled from "styled-components/macro";
import { selectDishes, selectSets } from "api/selectors";
import { useSelector, useDispatch } from "react-redux";
import { updateDishes } from "api/slises/dishesSlice";
import { updateSets } from "api/slises/setsSlice";
import { useLocation } from "react-router";
import Layout from "components/Layout";
import { SetType } from "common/types";
import Spinner from "components/Spinner";
const Set = React.lazy(() => import("./Set"));

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1140px;
  padding: 20px 0 40px;
`;

const SetsPage = () => {
  const dispatch = useDispatch();
  const sets = useSelector(selectSets);
  const dishes = useSelector(selectDishes);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const addSetToOrder = (set: SetType) => {
    dishes.forEach((dish) =>
      dispatch(updateDishes({ ...dish, selected: false }))
    );
    set.dishesId.forEach((item) => {
      const selectedDish = dishes.find((dish) => dish.id === item);
      dispatch(updateDishes({ ...selectedDish, selected: true }));
    });
    dispatch(updateSets({ ...set, selected: true }));
  };

  const removeSetFromOrder = (set: SetType) => {
    set.dishesId.forEach((item) => {
      const removedDish = dishes.find((dish) => dish.id === item);
      dispatch(updateDishes({ ...removedDish, selected: false }));
      dispatch(updateSets({ ...set, selected: false }));
    });
  };

  const setsList = sets.map((item, index) => (
    <Set
      key={index}
      set={item}
      addSetToOrder={addSetToOrder}
      removeSetFromOrder={removeSetFromOrder}
    />
  ));

  return (
    <Layout title="Sets ">
      <Suspense fallback={<Spinner />}>
        <Main>{setsList}</Main>
      </Suspense>
    </Layout>
  );
};

export default SetsPage;
