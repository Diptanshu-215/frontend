import Head from 'next/head'
import styles from '../styles/ca.module.css'
import UserRegisterForm from '../components/UserRegister-Login'

export default function userRegister() {
    return (
        <>
            <Head>
                <title>User Register - Anwesha 2025</title>
                <meta name="description" content="Anwesha 2025" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>

            <div className={styles.container} loading="lazy">
                <div style={{ padding: '3px 6px', backgroundColor: 'black', position: 'absolute', top: '82px', left: '50%', transform: 'translateX(-50%)', borderRadius: '4px' }}>
                    <p style={{ color: 'white' }}>
                        Non IITP Students register by their personal email
                    </p>
                </div>

                <UserRegisterForm />
                {/* <img
                    className={styles.island}
                    alt="floating-island-iitp"
                    src="/login_register/portal.svg"
                /> */}
            </div>
        </>
    )
}
