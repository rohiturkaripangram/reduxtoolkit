import { React, useContext } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { addwishlistItem, removewishlistItem } from "../utils/wishlistSlice";
import { useSelector } from "react-redux";

export default function Product({ serverData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.items);

  const handleAddtoCart = (element) => {
    dispatch(addItem(element));
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-12xl px-2 py-10 lg:px-10">
        <div className="text-left">
         
            <h1 className="text-xl ">Products</h1>
          
        </div>

        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-6 lg:gap-x-6">
          <div className="h-[400px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">
            <div className="mx-auto grid w-full max-w-6xl items-center space-y-4 px-2 py-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
              {serverData.map((element) => (
                <div
                  key={element.id}
                  className="rounded-md border max-w-1xl text-left relative   "
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

                    <button
                      className={`absolute right-1 top-2 text-xl cursor-pointer ${
                        wishlistItems.includes(element)
                          ? "text-amber-500"
                          : "text-wishlist"
                      }`}
                      onClick={() => {
                        if (wishlistItems.includes(element)) {
                          dispatch(removewishlistItem(element.id));
                        } else {
                          dispatch(addwishlistItem(element));
                        }
                      }}
                    >
                      <AiTwotoneHeart />
                    </button>

                    {cartItems.includes(element) ? (
                      <button
                        type="button"
                        className="mt-4 w-full  bg-adtc px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-96C291 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
                        onClick={() => navigate("/cart")}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="mt-4 w-full  bg-adtc px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-96C291 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
                        onClick={() => handleAddtoCart(element)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
