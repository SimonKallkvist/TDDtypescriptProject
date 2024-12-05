// -_-
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../../hooks/useCart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { cart } = useCart();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.innerNav} ref={menuRef}>
        <Link to={"/"}>
          <span className={styles.logo}>SNOWMAN</span>
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <FaHamburger />
        </div>

        <div
          className={`${styles.linkWrapper} ${
            menuOpen ? styles.showMenu : styles.hideMenu
          }`}
        >
          <Link to={"/"} onClick={closeMenu}>
            Home
          </Link>
          <Link to={"/products"} onClick={closeMenu}>
            Products
          </Link>
          <Link to={"/about"} onClick={closeMenu}>
            About
          </Link>
          <Link to={"/cart"} onClick={closeMenu}>
            <FaCartShopping />
            {cart.length > 0 && (
              <div className={styles.cartCounter}>
                <p>{cart.length}</p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
