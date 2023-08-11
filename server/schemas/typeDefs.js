const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar JSON

  type Category {
    _id: ID
    name: String
    image: String
  }

  type Product {
    _id: ID
    name: String
    cloverId: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    firstName: String
    lastName: String
    address: String
    total: String
    tracking: String
    shipmentId: String
    paymentStatus: String
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
    isIdSubmitted: Boolean
    isIdRejected: Boolean
    idFront: String
    idBack: String
    points: Int
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input inputOrder {
    _id: ID!
    purchaseQuantity: Int
    cloverId: String
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    queryNewProducts: [Product]
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!, shipPrice: Float!, points: Int): Checkout
    calcShip(productInt: Int!): JSON
    adminOrderView: [Order]
    queryUserAdmin: [User]
    querySearch(search: String!): [Product]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [inputOrder]!, url: String!): Order
    addShipInfo(street: String, city: String, state: String, zip: Int): User
    userVerifAdmin(_id: ID!, action: String!): User
    addProduct(
      name: String
      cloverId: String
      category: String
      description: String
      image: String
      quantity: Int
      price: Float
    ): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    adminUpdateProduct(
      id: ID
      name: String
      cloverId: String
      category: String
      description: String
      image: String
      quantity: Int
      price: Float
    ): Product
    delProduct(_id: ID!): Product
    idUpload(idFront: String!, idBack: String!): User
    login(email: String!, password: String!): Auth
    agreement(userChoice: String!): JSON
    sendVerifNotif: JSON
    sendOrderEmail: JSON
    sendMail(name: String!, email: String!, message: String!): JSON
    authResetProvider(email: String!): User
    authResetValidator(
      securityCode: String!
      email: String!
      newPass: String!
    ): JSON
  }
`;

module.exports = typeDefs;
