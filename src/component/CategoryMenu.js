import React from "react";

const CategoryMenu = ({ filterItem, categoryItems }) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {categoryItems.map((curr, index) => {
            return (
              <button
                key={index}
                className="btn btn-warning"
                onClick={() => filterItem(curr)}
              >
                {curr}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
