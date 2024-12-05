// -_-

import CartList from "../../components/cartlist/CartList";
import { useCart } from "../../hooks/useCart";

const CartPage = () => {
  const { cart } = useCart();

  console.log(cart);
  return (
    <section>
      <CartList cartProducts={cart} />
    </section>
  );
};

export default CartPage;
