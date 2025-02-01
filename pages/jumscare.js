import React, { useState, useEffect } from 'react'
import styles from './jumscare.module.css'
import Image from 'next/image'

const VideoPlayer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={styles.jumscare_div}>
            {!isMobile && (
                // <img className={styles.img} src="/pics/jump.gif" alt="Scary GIF" />
                <Image
                    className={styles.img}
                    src="/pics/jump.gif"
                    alt="Scary GIF"
                    width={200}
                    height={100}
                />
            )}
            {/* Audio element removed to prevent playback */}
        </div>
    )
}

export default VideoPlayer
