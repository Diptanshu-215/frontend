// components/EventItem/Modal.js
import React from 'react'
import styles from './Modal.module.css'
import { IoMdCloseCircleOutline } from "react-icons/io";


const Modal = ({ isOpen, onClose, event }) => {
    function handleRuleBookClick(url) {
        if (url) {
            window.open(url, '_blank');
        } else {
            console.error('No URL provided for the rule book.');
        }
    }

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                <IoMdCloseCircleOutline className={styles.closeicon} />
                </button>
                <div className={styles.titleBox}>
                    <div className={styles.leftgroup}>
                        <img src="/events/left_material.svg" alt="" />
                    </div>
                    <div className={styles.title}>
                        <h2>{event["Event Name"]}</h2>
                    </div>
                    <div className={styles.rightgroup}>
                        <img src="/events/right_material.svg" alt="" />
                    </div>
                    </div>
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
                        <div className={styles.registerButtonBox}><p className={styles.registerButton}>Coming Soon</p></div>
                        <div   className={styles.RuleButtonBox}><p className={styles.ruleBookButton}>Rule Book will be published Soon</p></div>  {/*onClick={() => handleRuleBookClick(event["Rulebook"])}*/ }
                    </div>
                    <div className={styles.verticalline}></div>
                    <div className={styles.rightBlock}>
                        <p>Date: <span style={{fontWeight:'bold'}}>{event["Date"]? event["Date"]:"To Be Announced"}</span></p>
                        <p>Venue: <span style={{fontWeight:'bold'}}>{event["Venue"]? event["Venue"]:"To Be Announced"}</span></p>
                        <p>{event["Description"]? event["Description"]:"TO BE RELEASE SOON"}</p>
                        <br />
                        <p>Individual Participation:</p>
                        <p>Registration Fee ₹ <span style={{fontWeight:'bold'}}>{event.registerationFee? event.registerationFee:"To Be Announced"}</span></p>
                        <p>Registration closes on <span style={{fontWeight:'bold'}}>{event.registerationclosingdate? event.registerationclosingdate:"To Be Announced"}</span></p>
                        <p>Prizes Worth: <span style={{fontWeight:'bold'}} > {event.priceworth?event.priceworth:"To Be Announced"}</span></p>
                        <p>Organizers: <span style={{fontWeight:'bold'}}>{event["Subcoords involved"]}</span></p><br />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
