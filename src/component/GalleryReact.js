import React, { useState } from "react";
import "./tab.css";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CategoryMenu from "./CategoryMenu";

const allCatValue = [
  ...new Set(Menu.map((currElem) => currElem.category)),
  "all",
];

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [categoryItems, setCategoryItems] = useState(allCatValue);

  const filterItem = (matchCategory) => {
    if (matchCategory === "all") {
      setItems(Menu);
      return;
    }
    const updateItem = Menu.filter((elem) => {
      return elem.category === matchCategory;
    });
    setItems(updateItem);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favorite Dish
      </h1>
      <hr />

      <CategoryMenu filterItem={filterItem} categoryItems={categoryItems} />

      {/* My main items section  */}
      <MenuItems items={items} />
    </>
  );
};

export default GalleryReact;
