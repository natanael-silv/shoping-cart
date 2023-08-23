import React from "react";

type headerProps = {
  title: string;
  image: string;
};

export const Hero = ({ title, image }: headerProps) => {
  return (
    <section className="header__Wrapper md:flex-row">
      <h1 className="header__title">{title}</h1>
      <img src={image} alt="" />
    </section>
  );
};
