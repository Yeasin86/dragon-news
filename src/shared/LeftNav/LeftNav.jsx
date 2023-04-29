import React, { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import "./LeftNav.css"

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h4>All Category</h4>
      <div className="mt-5">
        {categories.map((category) => (
          <p className="text-center" key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className={`"w-100 text-center p-4 text-decoration-none text-secondary fw-semibold ${({isActive}) => isActive ? "active" : "default"}`}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
