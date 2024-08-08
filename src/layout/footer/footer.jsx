import styles from './footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer>
      <div className={styles.dl}>

        <div className={styles.rs}>
        <h3 className={styles.h3}>Contact Information</h3>
      <address className={styles.address}>
        <big>123 Main Street
        Hometown, HT 12345</big>
        <p className={styles.p}> <a className={styles.aLink} href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p className={styles.p}> <a className={styles.aLink} href="mailto:info@barbshowstore.com">info@barbshowstore.com</a></p>
      </address>
        </div>

        <div className={styles.ls}>
          <nav className={styles.links}>
            <ul className={styles.ul}>
              <li className={styles.li}><a className={styles.aLink} href="#">About</a></li>
              <li className={styles.li}><a className={styles.aLink} href="#">Contact Us</a></li>
            </ul>
          </nav>

          <nav className={styles.icons}>
            <ul className={styles.social}>
              <li className={styles.li}><a className={styles.aLink} href="#"><FaFacebook /></a></li>
              <li className={styles.li}><a className={styles.aLink} href="#"><FaXTwitter /></a></li>
              <li className={styles.li}><a className={styles.aLink} href="#"><FaInstagramSquare /></a></li>
            </ul>
          </nav>

          <h4>Subscribe to our newsletter</h4>

          <form action="" className={styles.form}>
            <input type="email" name="email" id="email" placeholder='Enter your email address' />
            <button className={styles.btn} type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>
      <p className={styles.copyright}>&copy; 2024 Barb Show Store. All rights reserved.</p>
     </footer>
    </>
  )
}

export default Footer