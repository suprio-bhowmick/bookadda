import React, { Suspense } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Header from "../Layout/Header";
import ShopPage from "../Pages/Shop/shop";
import Cart from "../Pages/Cart/CartPage";
import Register from "../Pages/Register/Register";
import LoginPage from "../Pages/Login/Login";
import CheckoutPage from "../Pages/Checkout/Checkout";
import BookDetailPage from "../Pages/BookDetail/BookDetail";
import OrderListPage from "../Pages/OrderList/OrderList";
import OrderViewPage from "../Pages/OrderView/OrderView";
import Loader from "../Components/Loader";
import ContactUsPage from "../Pages/ContactUs/ContactUsPage";
import HomePage from "../Pages/Home/HomePage";
import Footer from "../Layout/Footer";
import AboutPage from "../Pages/About/AboutPage";
import ProfilePage from "../Pages/Profile/ProfilePage";
import { useSelector } from "react-redux";

// Simulated auth function
const isAuthenticated = () => {
  return localStorage.getItem("bookAddaToken") !== null;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function Routing() {

  
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/shop/:filterType/:filterValue" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/book/:bookName" element={<BookDetailPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Private Routes */}
          <Route
            path="/checkout"
            element={<PrivateRoute element={<CheckoutPage />} />}
          />
          <Route
            path="/order"
            element={<PrivateRoute element={<OrderListPage />} />}
          />
          <Route
            path="/order/:orderId"
            element={<PrivateRoute element={<OrderViewPage />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default Routing;
