import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Categories = () => {

  const categories = useSelector((state: RootState) => state.categories);

  return (
    <section className="">
      <div className="mt-20 ml-20 mb-20">
        <h1 className="categories__title text-white text-2xl ">
          Buy one of our <br></br> many products
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 text-center px-2 justify-center  text-white  ">
        {categories.map((categorie, index) => (
          <Link
            to={`/${categorie.id}`}
            key={index}
            className="hover:scale-105 ease-in duration-300 cursor-pointer"
            aria-label={`link to ${categorie.id}`}
          >
            <img src={categorie.img} className="mb-2" />
            <div>{categorie.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};
