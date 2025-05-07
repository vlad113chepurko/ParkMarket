import { components } from "./urls/components.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <components.header />
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <h1>Erorr 404</h1>
              </div>
            }
          />
          <Route path="/" element={<components.home />} />
          <Route path="/cart" element={<components.cart />} />
          <Route path="/login" element={<components.login />} />
          <Route path="/register" element={<components.register />} />
          <Route path="/notfound" element={<components.notfound />} />
        </Routes>
        <components.footer />
      </div>
    </Router>
  );
}

export default App;
