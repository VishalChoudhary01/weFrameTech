"use client";  // Ensure this component is treated as a client-side component

import Breadcrumb from "./breadcrumb";
import CategoryNavigation from "./categorynavigation;";
import Productdetails from "./productdetails";

const Product = () => {
  // Define the default category or category passed as a prop or variable
  const defaultCategory = "Art de la table";
  const categoryToDisplay = defaultCategory;

  return (
    <div>
      <CategoryNavigation />
      <Breadcrumb categoryToDisplay={categoryToDisplay} />
      <Productdetails/>
    </div>
  );
};

export default Product;
