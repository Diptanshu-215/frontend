import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/gallery.module.css'

export default function GalleryPage({ folderLinks }) {
    const [fadeOut, setFadeOut] = useState(false)

    // Handling fade-out effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setFadeOut(scrollPosition > window.innerHeight / 3)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={styles.container}>
                {/* Fullscreen Text with Fading Effect */}
                <div
                    className={`${styles.fullscreenText} ${
                        fadeOut ? styles.fadeOut : ''
                    }`}
                >
                    <div className={styles.glimpse}>Glimpse</div>
                    <div className={styles.anwesha}>Anwesha '24</div>
                </div>

                {/* Gallery Section */}
                <div className={styles.galleryWrapper}>
                    {folderLinks.map((folder, index) => (
                        <div key={index} className={styles.gallerySection}>
                            <h2 className={styles.folderTitle}>
                                {folder.name}
                            </h2>
                            <GalleryRow images={folder.links} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// Component to render a row of images
function GalleryRow({ images }) {
    return (
        <div className={styles.galleryRow}>
            {images.map((src, idx) => (
                <div key={idx} className={styles.galleryCard}>
                    {/* Specify width and height here */}
                    <img
                        src={src}
                        alt={`Gallery Image ${idx + 1}`}
                        width="300" // Fixed width
                        height="200" // Fixed height
                    />
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    // Placing image links
    const folderLinks = [
        {
            name: '1',
            links: [
                '/gallery/_DC_4278.JPG',
                '/gallery/_DSC_4142.png',
                '/gallery/_DSC2495.JPG',
                '/gallery/Screenshot 2024-12-16 at 1.27.35 AM.png',
            ],
        },
        {
            name: '2',
            links: [
                '/gallery/_DSC2011.JPG',
                '/gallery/Screenshot 2024-12-16 at 1.13.18 AM.png',
                '/gallery/Screenshot 2024-12-16 at 1.21.18 AM.png',
                '/gallery/_DSC4067.JPG',
            ],
        },
        {
            name: '3',
            links: [
                '/gallery/Screenshot 2024-12-16 at 1.17.36 AM.png',
                '/gallery/Screenshot 2024-12-16 at 1.19.38 AM.png',
                '/gallery/_DSC4028.JPG',
                '/gallery/Screenshot 2024-12-16 at 1.22.48 AM.png',
            ],
        },
    ]

    return {
        props: { folderLinks },
    }
}
