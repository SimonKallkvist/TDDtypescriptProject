import React from "react";
import { IProduct } from "../../Models/IProduct";
import CartProduct from "../cartproduct/CartProduct";
import styles from "./cartlist.module.css";
import Heading from "../UI/heading/Heading";
import { Link } from "react-router-dom";
import Button from "../UI/btn/Button";
import { useCart } from "../../hooks/useCart";

type CartListProps = {
  cartProducts: IProduct[];
};

const CartList = ({ cartProducts }: CartListProps) => {
  const { totalCost } = useCart();

  return (
    <div className={styles.cartContainer}>
      <Heading headingText={"Your Cart"} headingType={1} />

      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product, i) => (
            <CartProduct product={product} key={i} />
          ))}

          <div className={styles.totalCostContainer}>
            <Heading headingText={"Grand total"} headingType={3} />
            <ul>
              {cartProducts.map((product, i) => (
                <li key={i}>{product.title}</li>
              ))}
            </ul>
            <p>
              <span>{totalCost} kr</span>
            </p>
          </div>
          <Link to={"/checkout"}>
            <Button
              btnText={"Checkout"}
              btnType={"primary"}
              spanClass={"button_top"}
            />
          </Link>
        </>
      ) : (
        <>
          <p>No products so far!</p>
          <Link to={"/products"}>
            <Button
              btnText={"Take me to products"}
              btnType={"primary"}
              spanClass={"button_top"}
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default CartList;
