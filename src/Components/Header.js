import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.items);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin=()=>{
      loginWithRedirect();
    
  }
  return (
    <div className="relative w-full bg-white  ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-5">
        <div className="inline-flex items-center space-x-2">
          <NavLink to="/" className="font-bold  text-light-black lg:text-2xl">
            {" "}
            ReduxProject
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <NavLink
                to="/"
                className="text-1xl font-semibold text-gray-800 hover:text-gray-900 "
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/product"
                className="text-1xl font-semibold text-gray-800 hover:text-gray-900 "
              >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                className="text-1xl font-semibold text-gray-800 hover:text-gray-900 "
              >
                Subcription
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <NavLink
              to="/wishlist"
              className="text-md font-semibold text-gray-800 hover:text-gray-900 "
            >
              <span className="relative">
                <AiOutlineHeart className="text-2xl " />
                <span className="absolute h-5 w-5 -right-3 -top-3 bg-orange-100 text-sm rounded-full text-center">
                  {wishlistItems.length}
                </span>
              </span>
            </NavLink>
            <NavLink
              to="/cart"
              className="text-md font-semibold text-gray-800 hover:text-gray-900 cursor-pointer"
            >
              <span className="relative">
                <AiOutlineShoppingCart className="text-2xl " />
                <span className="absolute h-5 w-5 -right-3 -top-3 bg-orange-100 text-sm rounded-full cursor-pointer text-center">
                  {cartItems.length}
                </span>
              </span>
            </NavLink>

            {isAuthenticated ? (
              <NavLink
                to="/profile"
                className="text-md font-semibold text-gray-800 hover:text-gray-900 cursor-pointer "
              >
                <BsFillPersonFill className="text-2xl " />
              </NavLink>
            ) : (
              <NavLink
                className="text-md bg-adtc  px-3 py-2 text-sm rounded-md font-semibold text-white cursor-pointer mt-[-0.5rem] "
                onClick={handleLogin}
              >
                Sign in
              </NavLink>
            )}
          </ul>
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold  text-light-black lg:text-2xl">
                      Musicfiy
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-white hover:bg-white-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className="text-1xl font-semibold text-gray-800 hover:text-gray-900 "
                      >
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/product"
                        className="text-1xl font-semibold text-gray-800 hover:text-gray-900 "
                      >
                        Product
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/pricing"
                        className="text-1xl font-semibold text-gray-800 hover:text-gray-900 "
                      >
                        Pricing
                      </NavLink>
                    </li>
                  </nav>

                  <div>
                    <ul className="flex flex-row mt-6  space-x-8">
                      <NavLink
                        to="/wishlist"
                        className="text-md font-semibold text-gray-800 hover:text-gray-900 "
                      >
                        <span className="relative">
                          <AiOutlineHeart className="text-2xl " />
                          <span className="absolute h-5 w-5 -right-3 -top-3 bg-orange-100 text-sm rounded-full text-center">
                            0
                          </span>
                        </span>
                      </NavLink>
                      <NavLink
                        to="/cart"
                        className="text-md font-semibold text-gray-800 hover:text-gray-900 cursor-pointer"
                      >
                        <span className="relative">
                          <AiOutlineShoppingCart className="text-2xl " />
                          <span className="absolute h-5 w-5 -right-3 -top-3 bg-orange-100 text-sm rounded-full cursor-pointer text-center">
                            {cartItems.length}
                          </span>
                        </span>
                      </NavLink>
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
