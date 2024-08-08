import styles from './signup.module.css'
import image from '../assets/logo.svg'



const signup = () => {
  return (
    <>
    <section className={styles.section}>
    <div className={styles.logo}>
        <img src={image} alt="logo" />
    </div> 
        <div className={styles.fWidth}>
        <h1 className={styles.h1}>Sign Up</h1>
        <form action="" className={styles.form}>
        <div className={styles.name}>
                <input className={styles.input} type="text" name="name" id="name" placeholder='Enter your name'/>
            </div>
            <div className={styles.email}>
                <input className={styles.input} type="text" name="email" id="email" placeholder='Enter your email'/>
            </div>
            <div className={styles.password}>
                <input className={styles.input} type="password" name="password" id="password" placeholder='Enter your password'/>
            </div>
            <div className={styles.btn}>
            <button className={styles.button} type="submit">Sign Up</button>
            </div>
            <p className={styles.p}> Already have account? <a className={styles.link} href="#">Log in</a></p>
        </form>
        </div>
    </section>
    </>
  )
}

export default signup