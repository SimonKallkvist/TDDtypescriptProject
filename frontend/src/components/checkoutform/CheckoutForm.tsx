import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Button from "../UI/btn/Button";
import Heading from "../UI/heading/Heading";
import styles from "./checkoutform.module.css";

const CheckoutForm = () => {
  const { totalCost, clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handleGoHome = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className={styles.checkoutContainer}>
      <form className={styles.formContainer}>
        <div>
          <input type="text" name="firstname" placeholder="Firstname" />
          <input type="text" name="lastname" placeholder="Lastname" />
        </div>
        <div>
          <input type="number" name="phone" placeholder="Phonenumber" />
          <input type="text" name="address" placeholder="Address" />
        </div>
        <Heading headingText={`${totalCost} kr`} headingType={1} />
        <Button
          btnText={"Order"}
          btnType={"primary"}
          spanClass={"button_top"}
          click={handleSubmit}
        />
      </form>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <Heading headingText={"Order made!"} headingType={2} />
            <Button
              btnText={"Go to Homepage"}
              btnType={"secondary"}
              spanClass={"button_top"}
              click={handleGoHome}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
