import styles from "./single.module.css";
import logo from "../assets/logo.svg";
import bigImg from "../assets/single-view-shoe.svg";
import shoe4 from "../assets/black-4.png";
import shoe5 from "../assets/black-5.png";
import Footer from "../layout/footer/footer";

const single = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.dfl}>
          <div className={styles.shoe}>
            <img className={styles.bigImg} src={bigImg} alt="Shoe" />
          </div>
          <div className={styles.rText}>
            <small className={styles.name}>Black Shoe Bl-1</small>
            <small className={styles.price}>$350.99</small>
            <small className={styles.color}>
              <span className={styles.bold}>Color: </span>BLK 01
            </small>
            <small className={styles.img}>
              <img src={shoe4} alt="Shoe" />
              <img src={shoe5} alt="Shoe" />
            </small>
            <small className={styles.size}>Size:</small>
            <small className={styles.number}>
              <span className={styles.span}>6 (40)</span>
              <span className={styles.span}>7 (41)</span>
              <span className={styles.span}>8 (42)</span>
              <span className={styles.span}>9 (43)</span>
              <span className={styles.span}>10 (44)</span>
              <span className={styles.span}>11 (45)</span>
              <span className={styles.span}>12 (46)</span>
            </small>
            <a className={styles.link} href="#">
              <button type="button" className={styles.btn}>
                Add to cart
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default single;
