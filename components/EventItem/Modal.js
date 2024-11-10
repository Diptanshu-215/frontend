// components/EventItem/Modal.js
import React from 'react'
import styles from './Modal.module.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
const Modal = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                <IoMdCloseCircleOutline className={styles.closeicon} />
                </button>
                <div className={styles.title}><h2>{event.name}</h2></div>
                <hr style={{height:0.5,margin:14}} />
                
                
                <div className={styles.innerContainer}>
                    <div className={styles.leftBLock}>
                        
                        <img
                            src={
                                event.poster
                                    ? event.poster
                                    : '/events/poster.png'
                            }
                            className={styles.item}
                            alt="Fest Image"
                            objectfit={'contain'}
                        />
                        <button className={styles.registerButton}>Register</button>
                        <button className={styles.ruleBookButton}>Rule Book</button>
                    </div>
                    <div className={styles.verticalline}></div>
                    <div className={styles.rightBlock}>
                        <p>Date: <span style={{fontWeight:'bold'}}>{event.date? event.date:"17-18 March"}</span></p>
                        <p>Venue: <span style={{fontWeight:'bold'}}>{event.venue? event.venue:"IIT Patna"}</span></p>
                        <p>{event.description? event.description:"A title event of Anwesha consisting of group discussion, personal interviews, and a fashion show. A fashion show to show your ramp walk and moves and to flaunt your fashion sense"}</p>
                        <br />
                        <p>Individual Participation:</p>
                        <p>Registration Fee ₹ <span style={{fontWeight:'bold'}}>{event.registerationFee? event.registerationFee:99}</span></p>
                        <p>Registration closes on <span style={{fontWeight:'bold'}}>{event.registerationclosingdate? event.registerationclosingdate:"Thu March 16 2023"}</span></p>
                        <p>Prizes Worth: <span style={{fontWeight:'bold'}} >₹ {event.priceworth?event.priceworth:30000}</span></p>
                        <p>Organizers:</p><br />
                        {event.organizers.map((item, idx) => (
                            <>
                                <span key={idx} style={{ fontWeight: 'bold' }}>
                                    {item.name} : {item.contact}
                                </span>
                                <br />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
