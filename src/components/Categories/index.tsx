import React from "react";
//import categories from "../../data/categories.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Categories = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  return (
    <section className="">
      <div className="mt-20 ml-20 mb-20">
        <h1 className="categories__title text-white text-2xl ">
          Buy one of our <br></br> many products
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 text-center px-2 justify-center  text-white  ">
        {categories.map((categorie, index) => (
          <div
            key={index}
            className="hover:scale-110 ease-in duration-300 cursor-pointer"
            aria-label={`link to ${categorie.id}`}
            onClick={() => navigate(`/categorie/${categorie.id}`)}
          >
            <img src={categorie.img} className="mb-2" />
            <div>{categorie.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
