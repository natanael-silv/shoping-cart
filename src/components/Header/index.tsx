import React from "react";

type headerProps = {
  title: string;
  image: string;
};

export const Header = ({ title, image }: headerProps) => {
  return (
    <header className="header__Wrapper">
      <h1 className="header__title">{title}</h1>
      <img src={image} alt="" />
    </header>
  );
};
