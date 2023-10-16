import {publishableKey} from "../index"
import {PricingKey} from "../index"
const PricingPage=()=> {
  
  
  return (
    <stripe-pricing-table pricing-table-id={`${PricingKey}`}
    publishable-key={`${publishableKey}`}>
    </stripe-pricing-table>
  );
}

export default PricingPage;