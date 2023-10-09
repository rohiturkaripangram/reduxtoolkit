import React from "react";
import { Trash, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { addwishlistItem } from "../utils/wishlistSlice";


export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems=useSelector((store)=>store.wishlist.items)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return cartItems.length > 0 ? (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-light-black">My cart</h2>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems.map((product) => (
          <li
            key={product.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {product.productName}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0 "
                    onClick={() => dispatch(removeItem(product.id))}
                  >
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>

                  {wishlistItems.includes(product) ? (
                    <button
                      type="button"
                      className="flex items-center space-x-2 px-2 py-1  "
                      onClick={()=>navigate('/wishlist')}
                    >
                      <AiOutlineHeart size={16} className="text-amber-500" />
                      <span>Go to favorites</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center space-x-2 px-2 py-1 "
                      onClick={()=>dispatch(addwishlistItem(product))}
                    >
                      <AiOutlineHeart size={16} />

                      <span>Add to favorites</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 ? (
        <>
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold">
                {cartItems.reduce((p1, p2) => p1 + p2.price, 0)}
              </span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => navigate("/product")}
            >
              Back to shop
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col gap-y-12 w-screen h-96">
      <h1>
        Do some Shopping and then Come here{" "}
        <BiWinkSmile size={36} className="inline-block text-amber-500" />
      </h1>
      <button
        type="button"
        class="rounded-md bg-button-bg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-button-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => navigate("/product")}
      >
        Shop now
      </button>
    </div>
  );
}
