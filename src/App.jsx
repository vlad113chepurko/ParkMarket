import { components, pages } from "./urls/url.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <components.header />
        <Routes>
          <Route path="*" element={<pages.notfound />} />
          <Route path="/" element={<pages.home />} />
          <Route path="/cart" element={<pages.cart />} />
          <Route path="/login" element={<pages.login />} />
          <Route path="/register" element={<pages.register />} />
          <Route path="/products" element={<pages.products />} />
          <Route
            path="/:category"
            element={<pages.productspages />}
          />
        </Routes>
        <components.footer />
      </div>
    </Router>
  );
}

export default App;
