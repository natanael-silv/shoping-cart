import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Header } from "../Header";

export const Products = () => {
  const { categoriesName } = useParams();
  const categorie = useSelector((state) =>
    state.categories.find((categoria) => categoria.id === categoriesName)
  );
  return (
    <div>
      <Header title={categorie.name} image={categorie.img}/>
    </div>
  );
};
