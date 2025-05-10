import Home from "../pages/Home.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import Profile from "../pages/Profile.jsx";

export const components = {
  header: Header,
  footer: Footer,
};

export const pages = {
  home: Home,
  cart: Cart,
  login: Login,
  register: Register,
  productspages: ProductsPage,
  profile: Profile,
  notfound: NotFound,
};
