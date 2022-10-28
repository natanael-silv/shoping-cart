import React from "react";

import {Navbar} from "../../components/Navbar"
import { Categories } from "../../components/Categories";
export const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Categories />
      </main>
    </>
  );
};
