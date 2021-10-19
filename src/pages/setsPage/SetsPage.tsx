import React, { Suspense, useEffect } from "react";
import { selectDishes, selectSets } from "api/selectors";
import { useSelector, useDispatch } from "react-redux";
import { updateDishes } from "api/slises/dishesSlice";
import { updateSets } from "api/slises/setsSlice";
import Layout from "components/Layout";
import { setType } from "common/types";
import Spinner from "components/Spinner";
const Set = React.lazy(() => import("./Set"));

const SetsPage = () => {
  const sets = useSelector(selectSets);
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();

  useEffect(() => {
    sets.forEach((set) =>
      set.selected && set.dishes.filter((dish) => dish.selected).length !== 8
        ? dispatch(updateSets({ ...set, selected: false }))
        : ""
    );
  }, []);

  const addSetToOrder = (set: setType) => {
    dishes.forEach((dish) =>
      dispatch(updateDishes({ ...dish, selected: false }))
    );
    set.dishes.forEach((dish) => {
      const tempDish = { ...dish, selected: true };
      dispatch(updateDishes(tempDish));
    });
    const tempSet = { ...set, selected: true };
    dispatch(updateSets(tempSet));
  };

  const removeSetFromOrder = (set: setType) => {
    set.dishes.forEach((dish) => {
      const tempDish = { ...dish, selected: false };
      dispatch(updateDishes(tempDish));
      const tempSet = { ...set, selected: false };
      dispatch(updateSets(tempSet));
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
    <Layout title="Dishes' Sets ">
      <Suspense fallback={<Spinner />}>{setsList}</Suspense>
    </Layout>
  );
};

export default SetsPage;
