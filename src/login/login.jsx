import styles from './login.module.css'
import img from '../assets/logo.svg'


const login = () => {
  return (
    <>
    <section className={styles.section}>
    <div className={styles.logo}>
        <img src={img} alt="logo" />
    </div>
    <div className={styles.fWidth}>
        <h1 className={styles.h1}>Log in</h1>
        <form action="" className={styles.form}>
            <div className={styles.email}>
                <input className={styles.input} type="text" name="email" id="email" placeholder='Enter your email'/>
            </div>
            <div className={styles.password}>
                <input className={styles.input} type="password" name="password" id="password" placeholder='Enter your password'/>
            </div>
            <div className={styles.btn}>
            <button className={styles.button} type="submit">Log in</button>
            </div>
            <p className={styles.p}><a className={styles.link} href="#">Forget Password?</a></p>
        </form>
        </div>
    </section>
    </>
  )
}

export default login