// -_-
import { Link } from "react-router-dom";
import Heading from "../UI/heading/Heading";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Heading headingText={"SNOWMAN"} headingType={2} />
      <div className={styles.footerLinks}>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </footer>
  );
};

export default Footer;
