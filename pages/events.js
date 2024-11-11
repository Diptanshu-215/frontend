import styles from '../styles/events.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../components/EventItem/index.js'
import Modal from '../components/EventItem/Modal.js'
import EventItem from '../components/EventItem'

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

const cardarr=[1,2,3,4,5,6,7,8]

const eventsinfo={name: "Event Name",poster:'',smalldescription:'Solo - Classical Dance Competition',organizers:[{name:"Aryan",contact:" 7247305110"},{name:"Abhilasha",contact:"9262293394"}]}

const josefinSans = Josefin_Sans({
    weight: ['700'],
    subsets: ['latin'],
})

const Events = () => {

    const [events, setEvents] = useState([])
 
    // add event ids which won't be shown on website
    let exceludedEvents = [
        'EVTcf525',
        'EVTcac95',
        'EVT66e40',
        'EVT68cb3',
        'EVT49870',
        'EVTe96c6',
        'EVT8e600',
        'EVT7a8a7',
        'EVT691bc',
        'EVTba113',
        'EVT2842f',
        'EVT63763',
        'EVTcb689',
        'EVTa1ae2',
        'EVT20570',
        'EVT9dda6',
        'EVTbdb92',
        'EVT12910',
        'EVT8d60d',
        'EVT291e3',
        'EVT9fcc8',
        'EVTc90d3',
        'EVTbdbc6',
        'EVT49b71',
        'EVT3264e',
    ]

    useEffect(() => {
        let host = process.env.NEXT_PUBLIC_HOST

        async function callAPI() {
            try {
                const res = await fetch(`${host}/event/allevents`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await res.json()
                let result = data.filter((event) => {
                    if (exceludedEvents.includes(event.id)) {
                        return false
                    }
                    return true
                })
                setEvents(result)
            } catch (e) {
                console.log('Failed to fetch')
            }
        }
        callAPI()
    }, [])

  

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const openModal = (event) => {
        console.log("Modal opened for event:", event);
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };
    return (
        <div className={styles.mainContainer} >
        <Head>
            <title>Events - Anwesha 2024</title>
            <meta name="description" content="Events-Anwesha 2024" />
            <link rel="icon" href="./logo_no_bg.svg" />
        </Head>
        <div className={styles.container}>
            <div className={styles.searchcontainer}>
                <input
                    className={styles.searchbar}
                    type="text"
                    placeholder="Search Events"
                />
                <svg className={styles.searchicon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="search"
                >
                    <g>
                        <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
                    </g>
                </svg>
            </div>
            <div>
            <h3 className={styles.titletext}>
                    All Competitions
                </h3>
            </div>
            <div className={styles.cardContainer}>
                {cardarr.map((item, idx) => (
                    <Card
                        onClick={() => openModal(eventsinfo)}
                        key={idx}
                        event={eventsinfo}
                    />
                ))}
            </div>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    event={selectedEvent}
                />
            )}
        </div>
    </div>
);
}
export default Events
