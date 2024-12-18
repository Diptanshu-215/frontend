import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../styles/contact.module.css'
import { ToastContainer, toast } from 'react-toastify'
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Mail = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className={styles.emailIcon}>
        <path d="M6 30C5.175 30 4.469 29.7065 3.882 29.1195C3.295 28.5325 3.001 27.826 3 27V9C3 8.175 3.294 7.469 3.882 6.882C4.47 6.295 5.176 6.001 6 6H30C30.825 6 31.5315 6.294 32.1195 6.882C32.7075 7.47 33.001 8.176 33 9V27C33 27.825 32.7065 28.5315 32.1195 29.1195C31.5325 29.7075 30.826 30.001 30 30H6ZM18 19.5L30 12V9L18 16.5L6 9V12L18 19.5Z" fill="white"/>
    </svg>
}

const Contact = () => {
    const form = useRef()

    const resetForm = () => {
        form.current.reset()
    }

    const Notify = () => {
        toast.success('Submitting form...')
    }
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_3ngn78q',
                'template_w3widbd',
                form.current,
                'NDeri4iyFqfZH9rNw'
            )
            .then(
                (result) => {
                    resetForm({ name: '' })
                    toast.success('Message sent successfully!')
                },
                (error) => {
                    console.log(error.text)
                    toast.error('Error sending message. Please try again later')
                }
            )
    }


    return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.info}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.description}>
                  Not sure about something? The team at Anwesha, IIT Patna is here to listen and help you out.
                </p>
                <a href="mailto:email@anwesha.com" className={styles.emailLink}>
                  <Mail />
                  <span className={styles.emailText}>
                    Email of Anwesha
                  </span>
                </a>
            </div>
            <div className={styles.forms}>
                <div>
                    <h2 className={styles.formTitle}>We'd Love to Hear from You!</h2>
                    <p className={styles.formSubtitle}>Fill out the form below</p>
                </div>
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="user_name" className={styles.label}>Name</label>
                        <input
                          type="text"
                          id='user_name'
                          name="user_name"
                          placeholder="Enter your name"
                          className={styles.input}
                        />
                    </div>
                    <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                          <label htmlFor="user_email" className={styles.label}>Email ID</label>
                          <input
                            type="email"
                            id='user_email'
                            name="user_email"
                            placeholder="Enter your email address"
                            className={styles.input}
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label htmlFor="user_phone" className={styles.label}>Phone Number</label>
                          <input
                            type="tel"
                            id='user_phone'
                            name="user_phone"
                            placeholder="Enter your phone number"
                            className={styles.input}
                          />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Type your message here"
                          className={styles.textarea}
                        ></textarea>
                    </div>
                    <button type="submit" onClick={Notify} className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
    )
}
export default Contact
