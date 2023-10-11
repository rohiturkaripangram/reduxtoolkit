import React from "react";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { removewishlistItem } from "../Store/wishlistSlice";
import { addItem } from "../Store/cartSlice";

const WishList = () => {
 
    const dispatch=useDispatch();
    const wishlistItems = useSelector((store) => store.wishlist.items);
    const cartItems=useSelector((store)=>store.cart.items)
  
  const navigate = useNavigate();
  return (
    <>
      {wishlistItems.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold py-10 text-light-black text-center">
            My WishList
          </h2>

          <div className="mx-auto grid w-full max-w-6xl items-center space-y-4 px-2 py-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
            {wishlistItems.map((element) => (
              <div
                key={element.id}
                className="rounded-md border max-w-1xl text-left relative"
              >
                <img
                  src={element.image}
                  alt="music"
                  className="aspect-[16/9] max-w-6xl w-full rounded-md md:aspect-auto md:h-[200px] lg:h-[200px] sm:h-[300px] cursor-pointer"
                  onClick={() => navigate(`/product/${element.id}`)}
                />
                <div className="p-4">
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {element.productName}
                  </h1>
                  <p>{element.price}</p>

                  
                  {
                    wishlistItems.includes(element)?<span className="absolute right-1 top-2 text-xl cursor-pointer  text-amber-500 ">
                    <AiTwotoneHeart onClick={()=>dispatch(removewishlistItem(element.id))}/>
                  </span>:<span className="absolute right-1 top-2 text-xl cursor-pointer  text-wishlist ">
                      <AiTwotoneHeart/>
                    </span>
                  }
                    
                  {
                      cartItems.includes(element)?<button
                      type="button"
                      className="mt-4 w-full  bg-adtc px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
                      onClick={()=>navigate('/cart')}
                    >
                      Go to Cart
                    </button>:<button
                      type="button"
                      className="mt-4 w-full bg-adtc px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
                      onClick={()=>dispatch(addItem(element))}
                    >
                      Add to Cart
                    </button>
                 
                 
                  }

                  
                    
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center flex-col gap-y-12 w-screen h-96">
          <h1>Add Favorites here</h1>
          <button
            type="button"
            class="rounded-md bg-button-bg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-button-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => navigate("/product")}
          >
            Shop now
          </button>
        </div>
      )}
    </>
  );
};

export default WishList;