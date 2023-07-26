import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!, $shipPrice: Float!, $points: Int) {
    checkout(products: $products, shipPrice: $shipPrice, points: $points) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      image
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      street
      city
      state
      zip
      points
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const ADMIN_ORDER_VIEW = gql`
  query AdminOrderView {
    adminOrderView {
      _id
      purchaseDate
      firstName
      lastName
      total
      address
      products {
        price
        name
        image
        _id
      }
    }
  }
`;

export const QUERY_USER_ADMIN = gql`
  query Query {
    queryUserAdmin {
      _id
      firstName
      lastName
      idFront
      idBack
      isVerified
    }
  }
`;

export const CALC_SHIP = gql`
  query Query($productInt: Int!) {
    calcShip(productInt: $productInt)
  }
`;
