import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/Context";
import ContactUs from "./components/ContactUs/ContactUs";
import Second from "./components/Home/Second";
import Account from "./components/Account/Account";
import Category1 from "./components/Category/Category1";
import Category2 from "./components/Category/Category2";
import Category3 from "./components/Category/Category3";
import Admin from "./components/Admin-pages/Admin";
import AllProducts from "./components/Category/AllProducts";
import Checkout from "./components/Checkout/Checkout";


function App() {
  var flag = localStorage.Cart;
  // console.log(flag);
  if (flag === undefined) {
    localStorage.setItem("Cart", JSON.stringify([]));

    localStorage.setItem("quantity", JSON.stringify([]));
  }
  // var flagu = localStorage.user;
  // if (flagu === undefined) {
  //   localStorage.setItem("user", JSON.stringify([]));
  // }
  return (
    <BrowserRouter>
      <AppContext>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/category" element={<Second />} /> */}
          {/* <Route path="/category/:id" element={<Category />} /> */}
          {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/user" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Categories" element={<Second />} />
          <Route path="/Millet-Meusli" element={<Category1 />} />
          <Route path="/Millet-Laddo" element={<Category2 />} />
          <Route path="/Millet-Bar" element={<Category3 />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/checkOut" element={<Checkout />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
        </Routes>
        {/* <Footer /> */}
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
