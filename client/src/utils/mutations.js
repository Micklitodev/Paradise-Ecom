import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [inputOrder]!, $url: String!) {
    addOrder(products: $products, url: $url) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        cloverId
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String
    $cloverId: String
    $category: String
    $description: String
    $image: String
    $quantity: Int
    $price: Float
  ) {
    addProduct(
      name: $name
      cloverId: $cloverId
      category: $category
      description: $description
      image: $image
      quantity: $quantity
      price: $price
    ) {
      description
      image
      name
      price
      cloverId
      quantity
    }
  }
`;

export const DEL_PRODUCT = gql`
  mutation delProduct($id: ID!) {
    delProduct(_id: $id) {
      _id
      name
    }
  }
`;

export const ID_UPLOAD = gql`
  mutation idUpload($idFront: String!, $idBack: String!) {
    idUpload(idFront: $idFront, idBack: $idBack) {
      _id
      idFront
      idBack
      isVerified
      firstName
      lastName
    }
  }
`;

export const USER_VERIF_ADMIN = gql`
  mutation userVerifAdmin($id: ID!, $action: String!) {
    userVerifAdmin(_id: $id, action: $action) {
      isVerified
      firstName
      lastName
    }
  }
`;

export const ADMIN_UPDATE_PRODUCT = gql`
  mutation adminUpdateProduct(
    $id: ID
    $name: String
    $cloverId: String
    $category: String
    $description: String
    $image: String
    $quantity: Int
    $price: Float
  ) {
    adminUpdateProduct(
      id: $id
      name: $name
      cloverId: $cloverId
      category: $category
      description: $description
      image: $image
      quantity: $quantity
      price: $price
    ) {
      category {
        name
      }
      cloverId
      description
      image
      name
      price
      quantity
      _id
    }
  }
`;

export const ADD_SHIP_INFO = gql`
  mutation addShipInfo(
    $street: String
    $city: String
    $state: String
    $zip: Int
  ) {
    addShipInfo(street: $street, city: $city, state: $state, zip: $zip) {
      firstName
      lastName
      street
      city
      state
      zip
    }
  }
`;

export const ARGREEMENT_TOKEN = gql`
  mutation agreement($userChoice: String!) {
    agreement(userChoice: $userChoice)
  }
`;

export const SEND_MAIL = gql`
  mutation sendMail($name: String!, $message: String!, $email: String!) {
    sendMail(name: $name, message: $message, email: $email)
  }
`;

export const AUTH_RESET_PROVIDER = gql`
  mutation authResetProvider($email: String!) {
    authResetProvider(email: $email) {
      email
    }
  }
`;

export const AUTH_RESET_VALIDATOR = gql`
  mutation authResetValidator(
    $securityCode: String!
    $email: String!
    $newPass: String!
  ) {
    authResetValidator(
      securityCode: $securityCode
      email: $email
      newPass: $newPass
    )
  }
`;
