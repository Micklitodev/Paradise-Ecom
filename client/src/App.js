import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import LandingPage from './pages/Landing';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ManageProducts from './pages/ManageProducts';
import VerifUsers from './pages/VerifUsers';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import AdminOrderView from './pages/AdminViewOrders';
import AdminDetail from './pages/AdminDetail';
import Dashboard from './pages/Dashboard';
import ProductCata from './components/ProductsCata'
import Footer from './components/Footer';
import Contact from './pages/Contact';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
            <Route 
                path="/" 
                element={<LandingPage />} 
              />
              <Route 
                path="/home" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
               <Route 
                path="/dashboard" 
                element={<Dashboard />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route 
                path="/products/categories/:id"
                element={<ProductCata />}
              />
              <Route 
                path='/contact' 
                element={<Contact />}
              />
              {/* admin tools  */}
              <Route 
               path='/ManageProducts'
               element={<ManageProducts /> }
              />
              <Route 
               path='/VerifUsers'
               element={<VerifUsers /> }
              />
              <Route 
              path='/AdminOrderView'
              element={<AdminOrderView />}
              /> 
              <Route 
                path="/order/:id" 
                element={<AdminDetail/>} 
              />


  

              <Route
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
           <Footer /> 
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
