// -_-

import { useNavigate } from "react-router-dom";
import { IProduct } from "../../Models/IProduct";
import Heading from "../UI/heading/Heading";
import ImageComponent from "../UI/imageComponent/ImageComponent";

import styles from "./productcard.module.css";
import Button from "../UI/btn/Button";
import { useCart } from "../../hooks/useCart";
import { useToast } from "../../context/ToastContext";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const { addProduct } = useCart();

  const { addToast } = useToast();

  const handleImageClick = () => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const handleAddToCart = () => {
    console.log(product);
    addProduct(product);
    addToast(`${product.title} added to cart!`, "success");
  };

  return (
    <section className={styles.productCard}>
      <ImageComponent
        url={product.imgUrl}
        alt={product.title}
        onClick={handleImageClick}
      />
      <Heading headingText={product.title} headingType={3} />
      <Button
        btnText={"Add to Cart"}
        btnType={"primary"}
        spanClass={"button_top"}
        click={handleAddToCart}
      />
    </section>
  );
};

export default ProductCard;
