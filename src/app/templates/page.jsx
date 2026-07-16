import Functions from "@/components/templates/Fuctions/Functions";
import Hero from "@/components/templates/Hero";
import How_it_works from "@/components/templates/How_it_works/How_it_works";
import Product from "@/components/templates/Product/Product";
import React from "react";

const Templates = () => {
  return (
    <main>
        {/* <Hero /> */}
        <Product />
        <Functions />    
        <How_it_works />
    </main>
  );
};

export default Templates;