import styles from './adminSignup.module.css'


const adminSignup = () => {
  return (
    <>
    <section className={styles.section}>
    <div className={styles.adminContainer}>
    <h1 className={styles.h1}>Admin</h1>
        <div className={styles.fWidth}>
        <h2 className={styles.h2}>Sign Up</h2>
        <form action="" className={styles.form}>
        <div className={styles.userId}>
                <input className={styles.input} type="text" name="userId" id="userId" placeholder='Enter your userId'/>
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
        </div>
    </section>
    </>
  )
}

export default adminSignup