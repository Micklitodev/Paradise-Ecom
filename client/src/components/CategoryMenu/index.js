import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const containerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginLeft: ".5%",
  };

  const itemStyles = {
    flex: "0 0 25%",
    padding: "5px",
    boxSizing: "border-box",
    textAlign: "center",
  };

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-center text-uppercase">Categories</h3>
      <hr className="border-t border-gray-300 my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((item) => (
          <div key={item._id} className="flex flex-col items-center">
            <Link
              to={`/products/categories/${item._id}`}
              onClick={() => {
                handleClick(item._id);
              }}
              className="block w-56"
            >
              <img
                src={`./images/${item.image}`}
                alt="categoryimg"
                className="max-h-48 w-full object-cover"
              />
              <br />
              <p className="text-center">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
