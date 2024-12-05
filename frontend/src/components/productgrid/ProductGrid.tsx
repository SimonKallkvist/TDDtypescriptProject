// -_-

import { IProduct } from "../../Models/IProduct";
import ProductCard from "../productcard/ProductCard";

import styles from "./productgrid.module.css";

type ProductGridProps = {
  products: IProduct[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
