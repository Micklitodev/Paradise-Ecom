import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ManageProducts from "./pages/ManageProducts";
import VerifUsers from "./pages/VerifUsers";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import AdminOrderView from "./pages/AdminViewOrders";
import Dashboard from "./pages/Dashboard";
import ProductCata from "./pages/ProductCata";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PointsPolicy from "./pages/PointsPolicy";
import LithiumWarn from "./pages/LithiumWarn";
import LabResults from "./pages/LabResults";
import SearchRes from "./pages/SearchRes";
import ResetLink from "./pages/ResetLink";
import Checkout from "./pages/Checkout";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route
                path="/products/categories/:id"
                element={<ProductCata />}
              />
              <Route path="/search/:id" element={<SearchRes />} />
              <Route path="/resetLink" element={<ResetLink />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="Terms" element={<Terms />} />
              <Route path="privacypolicy" element={<PrivacyPolicy />} />
              <Route path="pointspolicy" element={<PointsPolicy />} />
              <Route path="lithiumionbatwarn" element={<LithiumWarn />} />
              <Route path="labres" element={<LabResults />} />

              {/* admin tools  */}
              <Route path="/ManageProducts" element={<ManageProducts />} />
              <Route path="/VerifUsers" element={<VerifUsers />} />
              <Route path="/AdminOrderView" element={<AdminOrderView />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
