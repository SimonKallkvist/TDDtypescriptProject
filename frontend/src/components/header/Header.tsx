// -_-
import { Link } from "react-router-dom";
import Button from "../UI/btn/Button";
import Heading from "../UI/heading/Heading";
import ImageComponent from "../UI/imageComponent/ImageComponent";
import styles from "./header.module.css";

type HeaderProps = {
  headingText: string;
  headingType: 1 | 2 | 3 | 4 | 5 | 6;
  headerText: string;
  btnNavigate: string;
  btnText: string;
  btnType: string;
  imgUrl: string;
  imgAlt: string;
};

const Header = ({
  headingText,
  headingType,
  headerText,
  btnNavigate,
  btnText,
  btnType,
  imgUrl,
  imgAlt,
}: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.portions}>
        <Heading headingText={headingText} headingType={headingType} />
        <p className={styles.headerText}>{headerText}</p>
        <Link to={`/${btnNavigate}`}>
          <Button
            btnText={btnText}
            btnType={btnType}
            spanClass={"button_top"}
          />
        </Link>
      </div>
      <div className={styles.portions}>
        <ImageComponent url={imgUrl} alt={imgAlt} />
      </div>
    </header>
  );
};

export default Header;
