import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Hero } from "../Hero";
import Card from "../Card";

export const Products = () => {
  const { categoriesName } = useParams();
  const { categorie, filteredItems } = useSelector((state) => ({
    categorie: state.categories.find(
      (categoria) => categoria.id === categoriesName
    ),

    filteredItems: state.filteredItems.filter(
      (item) => item.categorie === categoriesName
    ),
  }));

  return (
    <div>
      <Hero title={categorie.name} image={categorie.img} />
      <section className="flex flex-wrap items-center justify-center gap-11">
        {filteredItems?.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            title={el.name}
            price={el.price}
            desc={el.description}
            img={el.img}
          />
        ))}
      </section>
    </div>
  );
};
