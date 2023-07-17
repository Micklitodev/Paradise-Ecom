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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Categories</h2>
        <hr style={{ borderTop: "1px solid #d3d3d3" }} />
        {categories.map((item) => (
          <Link
            style={{ marginLeft: 10, display: "inline-block" }}
            key={item._id}
            to={`/products/categories/${item._id}`}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            <img
              src={`./images/${item.image}`}
              alt="categoryimg"
              style={{ maxHeight: 270, width: 300 }}
            />
            <br />
            <p style={{ textAlign: "center" }}> {item.name} </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
