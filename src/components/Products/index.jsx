import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Hero } from "../Hero";
import Card from "../Card";

export const Products = () => {
  const { categoriesName } = useParams();
  const navigate = useNavigate();
  const { categorie, filteredItems } = useSelector((state) => {
    return {
      categorie: state.categories.find(
        (categoria) => categoria.id === categoriesName
      ),

      filteredItems: state.filteredItems.filter(
        (item) => item.categorie === categoriesName
      ),
    };
  });

  useEffect(() => {
    if (categorie === undefined) {
  
      navigate("/");
      return; 
    }
  }, [categoriesName]);

  return (
    <div>
      <Hero title={categorie?.name} image={categorie?.img} />
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
