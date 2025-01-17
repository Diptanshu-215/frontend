import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'

// TO USE More Classes => {cn(className1, className2, className3)}
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
}
// assets path => '/pics/footer/{name}'

const Footer = () => {
    return (
        <section>
            <div className={styles.footer}>
                <div className={styles.footer_upper}>
                    <div className={styles.foter_logo}>
                        <Image
                            src="/pics/footer/logo.svg"
                            alt="Image description"
                            width={394.55}
                            height={225.76}
                        />
                    </div>
                    <div className={styles.social_logo}>
                        <div className={styles.social_logo_container}>
                            <Image
                                src="/pics/footer/email.svg"
                                alt="Image description"
                                width={62.173}
                                height={49.173}
                            />
                            <Image
                                src="/pics/footer/insta.svg"
                                alt="Image description"
                                width={62.173}
                                height={49.173}
                            />
                        </div>
                        <div className={styles.social_logo_container}>
                            <Image
                                src="/pics/footer/facebook.svg"
                                alt="Image description"
                                width={63.173}
                                height={49.173}
                            />
                        </div>
                        <div className={styles.social_logo_container}>
                            <Image
                                src="/pics/footer/twittter.svg"
                                alt="Image description"
                                width={63.173}
                                height={49.173}
                            />
                            <Image
                                src="/pics/footer/youtube.svg"
                                alt="Image description"
                                width={63.173}
                                height={49.173}
                            />
                        </div>
                    </div>
                    <div className={styles.footer_address}>
                        <h4>
                            Anwesha Office, <br />
                            Indian Institute of Technology Patna, <br />
                            Bihta, Patna - 801103 <br />
                            +91 0123456789
                        </h4>
                    </div>
                </div>
                {/* <div className={styles.footer_middle}>
                    <div className={styles.footer_nav}>
                       <div className={styles.four_fingure}> <Link href="">
                            <h3>Events</h3>
                        </Link> 
                        <Link href="">
                            <h3>Merch</h3>
                        </Link> 
                        <Link href="">
                            <h3>Gellerty</h3>
                        </Link> 
                        <Link href="">
                            <h3>Teams</h3>
                        </Link> </div>
                       <div  className={styles.four_fingure}> <Link href="">
                            <h3>Sponsors</h3>
                        </Link> 
                        <Link href="">
                            <h3>Contat Us</h3>
                        </Link> 
                        <Link href="">
                            <h3>Profile</h3>
                        </Link> 
                        <Link href="">
                            <h3>Get Passes</h3>
                        </Link> </div>
                    </div>
                </div> */}
                <div className={styles.line_section}>
                    <Image
                        src="/pics/footer/Line.svg"
                        alt="Image description"
                        width={500}
                        height={50}
                        style={{
                            width: '100%',
                            height: '10px',
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <div className={styles.footer_lower}>
                    <h4>Privacy Policy</h4>
                    <h4>Terms and Condition</h4>
                </div>
                <div className={styles.left_helobean}>
                    <Image
                        src="/pics/footer/chootSmall.svg"
                        alt="Image description"
                        width={200}
                        height={100}
                    />
                </div>
                <div className={styles.right_helobean}>
                    <Image
                        src="/pics/footer/chootHead.svg"
                        alt="Image description"
                        width={300}
                        height={200}
                    />
                </div>
            </div>
        </section>
    )
}

export default Footer
