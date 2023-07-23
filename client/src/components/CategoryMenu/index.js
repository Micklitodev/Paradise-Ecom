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
    marginLeft: "2%",
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
    <div style={containerStyles}>
      <h2 style={{ textAlign: "center", width: "100%" }}>Categories</h2>
      <hr style={{ borderTop: "1px solid #d3d3d3", width: "100%" }} />
      {categories.map((item) => (
        <div key={item._id} style={itemStyles}>
          <Link
            to={`/products/categories/${item._id}`}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            <img
              src={`./images/${item.image}`}
              alt="categoryimg"
              style={{ maxHeight: 240, width: 300 }}
            />
            <br />
            <p style={{ textAlign: "center" }}> {item.name} </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryMenu;
