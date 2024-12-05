// -_-
import Button from "../UI/btn/Button";
import Heading from "../UI/heading/Heading";
import ImageComponent from "../UI/imageComponent/ImageComponent";
import { useCart } from "../../hooks/useCart";
import { IProduct } from "../../Models/IProduct";
import styles from "./cartproduct.module.css";
import { useToast } from "../../context/ToastContext";

const CartProduct = ({ product }: { product: IProduct }) => {
  const { removeProduct } = useCart();
  const { addToast } = useToast();
  const handleDeleteProduct = () => {
    console.log(product);
    removeProduct(product);
    addToast(`${product.title} was removed from your cart...`, "error");
  };

  return (
    <div className={styles.cartCard}>
      <ImageComponent url={product.imgUrl} alt={product.title} />
      <Heading headingText={product.title} headingType={3} />
      <Heading headingText={product.price.toString()} headingType={4} />
      <Button
        btnText={"Remove"}
        btnType={"secondary"}
        spanClass={"button_top"}
        click={handleDeleteProduct}
      />
    </div>
  );
};

export default CartProduct;
