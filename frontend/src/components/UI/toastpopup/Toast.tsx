import { useEffect } from "react";
import styles from "./toast.module.css";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
};

const Toast = ({ message, type = "info", onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
