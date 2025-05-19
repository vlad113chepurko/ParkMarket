import React from "react";
import { pages, profile_pages } from "./urls/url.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="*" element={<pages.notfound />} />
          <Route path="/" element={<pages.home />} />
          <Route path="/cart" element={<pages.cart />} />
          <Route path="auth/login" element={<pages.login />} />
          <Route path="/auth/register" element={<pages.register />} />
          <Route path="/:category" element={<pages.productspages />} />
          <Route path="order" element={<pages.order />} />
          <Route path="/profile" element={<pages.profile />}>
            <Route path="home" element={<profile_pages.home />} />
            <Route path="collection" element={<profile_pages.collection />} />
            <Route path="shop" element={<profile_pages.shop />} />
            <Route path="membership" element={<profile_pages.membership />} />
            <Route
              path="recomendations"
              element={<profile_pages.recommendations />}
            />
          </Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
