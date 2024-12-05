// -_-

import styles from "./button.module.css";

type ButtonProps = {
  btnText: string;
  btnType: string;
  spanClass: string;
  click?: () => void;
};

const Button = ({ btnText, btnType, spanClass, click }: ButtonProps) => {
  return (
    <button className={styles[btnType]} onClick={click}>
      <span className={spanClass ? styles[spanClass] : undefined}>
        {btnText}
      </span>
    </button>
  );
};

export default Button;
