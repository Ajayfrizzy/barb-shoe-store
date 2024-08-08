import styles from "./Header.module.css";
import logo from '../../assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";


const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={logo} alt={logo} />
          </div>
          <ul className={styles.ul}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className={styles.icons}>
            <a href="#"><CiSearch/></a>
            <a href="#"><FaRegCircleUser /></a>
            <a href="#"><BsCart2 /></a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
