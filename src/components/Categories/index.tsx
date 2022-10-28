import React from "react";
import categories from "../../data/categories.json";
export const Categories = () => {
  return (
    <section className="">
      <div className="mt-20 ml-20 mb-20">
        <h1 className="categories__title text-white text-2xl ">
          Buy one of our <br></br> many products
        </h1>
      </div>
     <div className="flex flex-wrap gap-10 text-center px-2 justify-center  text-white  ">
     {categories.map((catogorie, index) => (
        <div key={index} className="hover:scale-110 ease-in duration-300 cursor-pointer" >
          <img src={catogorie.img} className="mb-2"/>
          <div>{catogorie.name}</div>
        </div>
      ))}
     </div>
    </section>
  );
};
