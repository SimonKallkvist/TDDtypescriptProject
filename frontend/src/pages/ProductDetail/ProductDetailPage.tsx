import { useLocation } from "react-router-dom";
import ProductDetailView from "../../components/productdetailview/ProductDetailView";
import { IProduct } from "../../Models/IProduct";
import Accordion from "../../components/accordion/Accordion";

const ProductDetailPage = () => {
  const location = useLocation();
  const product: IProduct = location.state?.product;

  if (!product) {
    return <p>Product could not be found...blame the backend</p>;
  }

  return (
    <div>
      <ProductDetailView product={product} />
      <Accordion heading={"Reviews"} populate={product.reviews} />
    </div>
  );
};

export default ProductDetailPage;
