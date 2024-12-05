// -_-
import { useCart } from "../../hooks/useCart";
import { IProduct } from "../../Models/IProduct";
import Button from "../UI/btn/Button";
import Heading from "../UI/heading/Heading";
import ImageComponent from "../UI/imageComponent/ImageComponent";
import styles from "./productdetailview.module.css";
import { useToast } from "../../context/ToastContext";

const ProductDetailView = ({ product }: { product: IProduct }) => {
  const { addProduct } = useCart();

  const { addToast } = useToast();

  const handleAddProduct = () => {
    console.log(product);
    addProduct(product);
    addToast(`${product.title} added to cart!`, "success");
  };

  return (
    <section className={styles.productDetailContainer}>
      <ImageComponent url={product.imgUrl} alt={product.title} />
      <div>
        <Heading headingText={product.title} headingType={2} />
        <Heading headingText={product.price.toString()} headingType={3} />
        <p>{product.description}</p>
        <p>{product.userRating} / 5</p>
        <Button
          btnText={"Add to cart"}
          btnType={"cta"}
          spanClass={"button_top"}
          click={handleAddProduct}
        />
      </div>
    </section>
  );
};

export default ProductDetailView;
