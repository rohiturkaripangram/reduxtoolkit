import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profiie";
import { fakeFetch } from "./Backend/Db";
import { useNavigate, useLocation } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";

function App() {
  const [serverData, setServerData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/product"
      );
      if (status === 200) {
        setServerData(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />

          <Route path="/Checkout" element={<Checkout />} />

          <Route path="/WishList" element={<Wishlist />} />
          <Route
            path="/product"
            element={<Product serverData={serverData} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails serverData={serverData} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
