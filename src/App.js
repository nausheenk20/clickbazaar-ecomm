import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product.jsx";
import CustomerRouters from "./Routers/CustomerRouters.jsx";
import Navigate from "./customer/components/Navigation/Navigate.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>

    </div>
  );
}

export default App;
