import React from "react";
import { selectSets } from "api/selectors";
import { useSelector } from "react-redux";
import Set from "./Set";
import Layout from "components/Layout";


const SetsPage = () => {
  const sets = useSelector(selectSets);
  const setsList = sets.map((item, index) => <Set key={index} set={item} />);

  return <Layout title="Dishes' Sets ">{setsList}</Layout>;
};

export default SetsPage;
