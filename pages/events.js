import styles from '../styles/events.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../components/EventItem/index.js'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/EventItem/Modal.js'
import EventItem from '../components/EventItem'
import eventsDetails from '../public/events/events_data.json' assert { type: 'json' };


const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})



const cardarr = [1, 2, 3, 4, 5, 6, 7, 8]


const eventsinfo = {
    name: 'Event Name',
    poster: '',
    smalldescription: 'Solo - Classical Dance Competition',
    organizers: [
        { name: 'Aryan', contact: ' 7247305110' },
        { name: 'Abhilasha', contact: '9262293394' },
    ],
}

const workshopcardarr=[{
    "Event Name":"techgyan x Anwesha",
    "poster":'/events/workshopPoster.jpeg',
    "Event":"2 days of workshop",
}]

const josefinSans = Josefin_Sans({
    weight: ['700'],
    subsets: ['latin'],
})

const SponsorsSlider = ({images, animation_duration=-1}) => {
    const width = 127.381; // IF YOU CHANGE THIS THEN CHANGE IT INSIDE autoScrollSponseAnimation ALSO
    const heigth = 127.381;
    const duration = animation_duration<=0?Math.floor(10*(images.length / 7)):animation_duration;

    const gap = 16;
    return <div style={{
        position: "relative",
        backgroundColor: "inherit",
        // minWidth: width * (images.length + 1),
        minWidth: (width + gap) * images.length,
        height: heigth
    }}>
        {
            images.map((src, index) => 
                <div key={index} className={styles.autoScrollSponseAnimation} style={{
                    width: "100%",
                    position: "absolute",
                    left: "100%",
                    // zIndex: 8,
                    animationDelay: `${(duration/images.length)*index}s`,
                    animationDuration: `${duration}s`,
                    '--width': width
                }}>
                    <Image src={src} width={width} height={heigth}/>
                </div>
            )
        }
    </div>
}

const Events = () => {
    const [fadeOut, setFadeOut] = useState(false)
 
    // Handling fade-out effect on scroll   
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setFadeOut(scrollPosition > window.innerHeight / 4)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleWorkshopNavigation = () => {
        window.location.href = "https://tech-gyan.in/workshop-iit-patna-checkout/";
    };

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

    const pseudoSponsorImage = [
        "/pics/sponsor/pizza_hut.jpg",
        "/pics/sponsor/sbi.jpg",
        "/pics/sponsor/zomato.png",
        "/pics/sponsor/pizza_hut.jpg",
        "/pics/sponsor/sbi.jpg",
        "/pics/sponsor/zomato.png",
        "/pics/sponsor/pizza_hut.jpg",
        "/pics/sponsor/sbi.jpg",
        "/pics/sponsor/zomato.png",
        "/pics/sponsor/pizza_hut.jpg",
        "/pics/sponsor/sbi.jpg",
        "/pics/sponsor/zomato.png",
        "/pics/sponsor/pizza_hut.jpg",
        "/pics/sponsor/sbi.jpg",
        "/pics/sponsor/zomato.png",
        "/pics/sponsor/pizza_hut.jpg",
        "/pics/sponsor/sbi.jpg",
        "/pics/sponsor/zomato.png"
    ];

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

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    const openModal = (event) => {
        console.log('Modal opened for event:', event)
        setSelectedEvent(event)
        setIsModalOpen(true)
    }

    
    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedEvent(null)
    }
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Events - Anwesha 2024</title>
                <meta name="description" content="Events-Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div className={styles.workshopContainer}>
                <div className={styles.workshoptitletext}>Workshops</div>
                <div className={styles.cardContainer}>
                    {workshopcardarr.map((item, idx) => (
                        <Card
                            onClick={handleWorkshopNavigation}
                            key={idx}
                            event={item}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <div className={styles.centergroup}>
                       <img src="/events/center_material.svg" alt="" />
                    </div>
                    <div className={styles.titletext}>EXPLORE THE EVENTS</div>
                </div>
                <div className={`${styles.searchContainer}`}>   {/*  ${fadeOut ? styles.fadeOut : ''}  */}
                    <div className={styles.leftgroup}>
                      <img src="/events/left_material.svg" alt="" />
                    </div>
                    <div
                        className={`${styles.searchbox} `}
                    >  {/*  ${fadeOut ? styles.fadeOut : ''}  */}
                        <input
                            className={styles.searchbar}
                            type="text"
                            placeholder="Search Events"
                        />
                        <img src="/events/search_icon.svg" alt="" />
                    </div>
                    <div className={styles.rightgroup}>
                       <img src="/events/right_material.svg" alt="" />
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    {eventsDetails.map((item, idx) => (
                        <Card
                            onClick={() => openModal(item)}
                            key={idx}
                            event={item}
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
            {/* Sponsors */}
            <section className={styles.sponsors}>
                <div className={styles.sponsors_title}>
                    <h2>Our Proud Sponsors</h2>
                    <h3>Strengthening the Vision Together</h3>
                </div>
                <div className={styles.sponsors_images_slider}>
                    <SponsorsSlider images={pseudoSponsorImage}/>
                </div>
            </section>
        </div>
    )
}
export default Events
