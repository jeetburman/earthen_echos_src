import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import UserDashboard from "pages/user-dashboard";
import ShoppingCartCheckout from "pages/shopping-cart-checkout";
import ProductDiscovery from "pages/product-discovery";
import ProductDetail from "pages/product-detail";
import AboutEarthenEchoes from "pages/about-earthen-echoes";
import NotFound from "pages/NotFound";
import LoginPage from "pages/authenticatorPage/Login";
import SignupPage from "pages/authenticatorPage/Signup";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};



const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/user-dashboard" element={<PrivateRoute><UserDashboard/></PrivateRoute>} />
        <Route path="/shopping-cart-checkout" element={<ShoppingCartCheckout />} />
        <Route path="/product-discovery" element={<ProductDiscovery />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/about-earthen-echoes" element={<AboutEarthenEchoes />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;