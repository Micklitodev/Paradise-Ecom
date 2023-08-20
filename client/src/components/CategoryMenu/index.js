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
    <div className="container">
      <h3 className="text-center text-uppercase" style={{textTransform: "uppercase"}}>Categories</h3>
      <br />
      <div
        className="box-shadow-custom bg-white bg-opacity-10 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4
"
      >
        {categories.map((item, index) => {
          if (index % 3 === 0) {
            // Start of a new set of three items
            return (
              <div key={index} className="grid gap-4">
                {categories.slice(index, index + 3).map((category) => (
                  <div
                    key={category._id}
                    className="flex items-center rounded-md"
                  >
                    <Link
                      to={`/products/categories/${category._id}?${category.name}`}
                      onClick={() => {
                        handleClick(category._id);
                      }}
                      className="rounded-md py-4 px-6"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={`./images/${category.image}`}
                          alt="categoryimg"
                          className="h-300 max-w-full rounded-lg"
                        />
                      </div>
                      <br />
                      <p className="text-center">{category.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            );
          }
          return null; // Skips rendering for other items in between sets
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
