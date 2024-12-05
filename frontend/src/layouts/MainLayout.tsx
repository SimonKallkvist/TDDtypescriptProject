import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./mainlayout.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
