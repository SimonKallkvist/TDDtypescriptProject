// -_-
import { useEffect } from "react";
import ProductGrid from "../../components/productgrid/ProductGrid";
import { useAwaitData } from "../../hooks/useAwaitData";
import Header from "../../components/header/Header";
import Heading from "../../components/UI/heading/Heading";

const ProductsPage = () => {
  const { products, show, error, awaitData } = useAwaitData();

  useEffect(() => {
    awaitData({ fetchEndpoint: "products" });
  }, []);

  return (
    <div>
      <Header
        headingText={"PRODUCTS"}
        headingType={1}
        headerText={"See all our beautiful snowy products"}
        btnNavigate={""}
        btnText={"Take me home"}
        btnType={"cta"}
        imgUrl={
          "https://images.unsplash.com/photo-1733065525789-fa815b071bdf?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        imgAlt={"Product header image"}
      />
      {error && <p>{error}</p>}
      <Heading headingText={"Our Products"} headingType={2} />
      {show && <ProductGrid products={products} />}
    </div>
  );
};

export default ProductsPage;
