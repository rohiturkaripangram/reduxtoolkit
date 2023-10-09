import {useState,useEffect} from "react"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Header from "./Components/Header"
import {Routes,Route} from "react-router-dom"

import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Profile from "./Pages/Profile"
import Wishlist from "./Pages/Wishlist"
import Product from "./Pages/Product"
import ProductDetails from "./Pages/ProductDetails"
import {fakeFetch} from "./Backend/Db"


function App() {
  const [serverData,setServerData]=useState([]);


  const getData=async()=>{
    try{
       const {status,data}=await fakeFetch("https://example.com/api/product")
       if(status===200){
        setServerData(data.products);
        
       }
       
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <Provider store={appStore}>
    <div className="App">
    <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Cart" element={<Cart/>}/>
       <Route path="/Checkout" element={<Checkout/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/WishList" element={<Wishlist/>}/>
       <Route path="/product" element={<Product serverData={serverData}/>}/>
       <Route path="/product/:productId" element={<ProductDetails serverData={serverData}/>}/>
      </Routes>  
    </div>
    </Provider>
   
  );
}

export default App;
