import {publishableKey} from "../index"
import {PricingKey} from "../index"

import { useAuth0 } from "@auth0/auth0-react";

const PricingPage=()=> {
  
  const { isAuthenticated, loginWithRedirect} = useAuth0();
  return (
    isAuthenticated?(
<stripe-pricing-table pricing-table-id={`${PricingKey}`}
    publishable-key={`${publishableKey}`}>
    </stripe-pricing-table>
    )
    
    : <div className="flex justify-center items-center flex-col gap-y-4 w-screen h-96">
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
}

export default PricingPage;