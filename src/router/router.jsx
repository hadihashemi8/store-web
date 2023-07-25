import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Panel from "../Components/Panel/Panel";
import FavouriteProducts from "../Components/FavouriteProducts/FavouriteProducts"
import LastOrders from "../Components/LastOrders/LastOrders";
import UserBacket from "../pages/Backet/UserBacket";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/Products/Products";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Login from "../pages/login/Login";
import OfferCodes from "../pages/OfferCodes/OfferCodes";

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '/dashboard', element: <Dashboard />, children: [
      { path: "panel", element: <Panel /> },
      { path: "favouriteProducts", element: <FavouriteProducts /> },
      { path: "lastOrders", element: <LastOrders /> },
    ]
  },
  { path: '/Backet', element: <UserBacket /> },
  { path: '/ProductDetails/:productId', element: <ProductDetails /> },
  { path: '/Products', element: <Products /> },
  { path: '/Login', element: <Login /> },
  { path: '/*', element: <NotFoundPage /> },
  { path: "/OfferCodes", element: <OfferCodes /> }

]


export default routes