const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Category {
    _id: ID
    name: String
    image: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    street: String
    city: String
    state: String
    zip: Int
    isAdmin: Boolean
    isVerified: Boolean
    idFront: String
    idBack: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    adminOrderView: [Order]
    queryUserAdmin: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addShipInfo(street: String, city: String, state: String, zip: Int): User
    userVerifAdmin(_id: ID!, action: String!): User
    addProduct(name: String, category: String, description: String, image: String, quantity: Int, price: Float): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    delProduct(_id: ID!): Product
    idUpload(idFront: String!, idBack: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs; 
