import { useEffect } from "react";
import Header from "../../components/header/Header";
import ProductGrid from "../../components/productgrid/ProductGrid";
import Heading from "../../components/UI/heading/Heading";
import { useAwaitData } from "../../hooks/useAwaitData";

// -_-
const HomePage = () => {
  const { products, show, error, awaitData } = useAwaitData();

  const topSellers = products.sort(() => Math.random() - 0.5).slice(0, 3);

  useEffect(() => {
    awaitData({ fetchEndpoint: "products" });
  }, []);

  return (
    <>
      <Header
        headingText={"SNOWMAN"}
        headingType={1}
        headerText={
          "Never has it been so easy to get all your christmasy stuff all at one place! Here at SNOWMAN we strive to make everyday a christmas!"
        }
        btnNavigate={"products"}
        btnText={"See Products"}
        btnType={"cta"}
        imgUrl={
          "https://images.unsplash.com/photo-1602883522093-3bb023cc4f12?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        imgAlt={"Header home image"}
      />

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Heading headingText={"Top Sellers"} headingType={2} />
      </div>
      {error && <p>{error}</p>}
      {show && <ProductGrid products={topSellers} />}
    </>
  );
};

export default HomePage;
