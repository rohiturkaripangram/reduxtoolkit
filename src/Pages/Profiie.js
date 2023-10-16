import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

import { logoutcart } from "../Store/cartSlice";


const Profile = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const dispatch = useDispatch();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handlelogout = () => {
    dispatch(logoutcart());

    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return isAuthenticated ? (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-400 flex flex-col justify-center items-center gap-4 border border-solid border-gray-900 h-300 p-6 rounded-lg">
        <h2> User Profile</h2>
        <img
          className="max-w-[120px] w-full rounded-full"
          src={user.picture}
          alt={user.name}
        />

        <p>
          <span className="text-profiletext font-bold">Name</span>: {user.name}
        </p>
        <p>
          <span className="text-profiletext font-bold">Email id</span>:{" "}
          {user.email}
        </p>

        <buttontype
          className="button mt-4 w-full  bg-adtc px-2 py-1.5 text-sm font-semibold text-white text-center shadow-sm hover:bg-96C291 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md cursor-pointer"
          onClick={handlelogout}
        >
          Log out
        </buttontype>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col gap-y-4 w-screen h-96">
      <h1>Please Login to continue</h1>
      <button
        type="button"
        class="rounded-md bg-button-bg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-button-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  );
};

export default Profile;
