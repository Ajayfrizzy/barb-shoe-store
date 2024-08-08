import styles from './hero.module.css'
import { IoIosArrowBack } from "react-icons/io";
import Shoe from '../assets/blue-1.png'
import { IoIosArrowForward } from "react-icons/io";


const hero = () => {
  return (
    <>
    <section className={styles.section} >
      <div className={styles.dl} >

        <div className={styles.img}>
          <div className={styles.arrow}> <IoIosArrowBack /> </div>
          <img src={Shoe} alt={Shoe} />
          <div className={styles.arrow}> <IoIosArrowForward /> </div>
        </div>

        <div className={styles.text}>
          <h1 className={styles.h1}>Find your perfect fit</h1>
          <p className={styles.p}> Custom-made shoe tailored for you</p>
          <a className={styles.a} href="#"><div className={styles.span}>Shop now</div></a>
        </div>

      </div>
    </section>
    
    </>
  )
}

export default hero
