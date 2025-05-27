

// Pages:
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";
import Order from "../pages/Order.jsx";
import ThankPage from "../pages/ThankPage.jsx";

// Order Pages:
import Bike from "../pages/OrderPages/Bike.jsx";
import Gazebo from "../pages/OrderPages/Gazebo.jsx";
import Scooter from "../pages/OrderPages/Scooter.jsx";

// Profile Pages:
import ProfileHome from "../pages/ProfilePages/Home.jsx";
import Shop from "../pages/ProfilePages/Shop.jsx";
import Collections from "../pages/ProfilePages/Collections.jsx";
import Membership from "../pages/ProfilePages/Membership.jsx";
import Recommendations from "../pages/ProfilePages/Recommendations.jsx";
import About from "../pages/ProfilePages/About.jsx";

export const pages = {
  home: Home,
  cart: Cart,
  login: Login,
  register: Register,
  productspages: ProductsPage,
  profile: Profile,
  order: Order,
  thankpage: ThankPage,
  notfound: NotFound,
};

export const order_pages = {
  gazebo: Gazebo,
  bike: Bike,
  scooter: Scooter
};

export const profile_pages = {
  home: ProfileHome,
  collection: Collections,
  shop: Shop,
  membership: Membership,
  about: About,
  recommendations: Recommendations,
};
