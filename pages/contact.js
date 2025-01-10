import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../styles/contact.module.css'
import { ToastContainer, toast } from 'react-toastify'
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const form = useRef()

    const resetForm = () => {
        form.current.reset()
    }

    const Notify = () => {
        toast.success('Message sent successfully!')
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
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <div className={styles.leftcontainer}>
                    <div className={styles.leftinnercontainer}>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>Contact Us</div>
                            <div className={styles.description}>
                                Not sure about something? The team at Anwesha,
                                IIT Patna is here to listen and help you out.
                            </div>
                        </div>

                        <div className={styles.email}>
                            <svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.5 30.5552C5.675 30.5552 4.969 30.2617 4.382 29.6747C3.795 29.0877 3.501 28.3812 3.5 27.5552V9.55518C3.5 8.73018 3.794 8.02418 4.382 7.43718C4.97 6.85018 5.676 6.55618 6.5 6.55518H30.5C31.325 6.55518 32.0315 6.84918 32.6195 7.43718C33.2075 8.02518 33.501 8.73118 33.5 9.55518V27.5552C33.5 28.3802 33.2065 29.0867 32.6195 29.6747C32.0325 30.2627 31.326 30.5562 30.5 30.5552H6.5ZM18.5 20.0552L30.5 12.5552V9.55518L18.5 17.0552L6.5 9.55518V12.5552L18.5 20.0552Z"
                                    fill="white"
                                />
                            </svg>
                            <div className={styles.emailtext}>
                                Email of Anwesha
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.rightinnercontainer}>
                        <div className={styles.formtitlebox}>
                            <div className={styles.formtitle}>
                                We'd Love to Hear from You!
                            </div>
                            <div className={styles.formdescription}>
                                Fill out the form below
                            </div>
                        </div>

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className={styles.forms}
                        >
                            <div className={styles.namebox}>
                                <label className={styles.texts}>Name</label>
                                <div className={styles.nameinput}>
                                    <input
                                        className={styles.inputs}
                                        type="text"
                                        name="user_name"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
                            <div className={styles.emailandnumberbox}>
                                <div className={styles.emailbox}>
                                    <label className={styles.texts}>
                                        Email ID
                                    </label>
                                    <div className={styles.emailinput}>
                                    <input
                                        className={styles.inputs}
                                        type="email"
                                        placeholder="Enter your email address"
                                        name="user_email"
                                    />
                                    </div>
                                </div>
                                <div className={styles.numberbox}>
                                    <label className={styles.texts}>
                                        Phone Number
                                    </label>
                                    <div className={styles.numberinput}>
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="Enter your phone number"
                                            name="user_number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.messagebox}>
                                <label className={styles.texts}>Message</label>
                                <div className={styles.messageinput}>
                                    <textarea
                                        className={styles.inputs}
                                        name="message"
                                        placeholder='Type your message here'
                                    />
                                </div>
                            </div>
                            <div className={styles.buttonbox}>
                                <input
                                    className={styles.button}
                                    type="submit"
                                    onClick={(e) => Notify}
                                    value="SUBMIT"
                                />
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
export default Contact
