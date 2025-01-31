import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '../styles/gallery.module.css';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const mobileStyles = `
  @media (max-width: 640px) {
    .heading-container {
      transform: translateY(-50rem) !important;
    }
  }
  @media (max-width: 1024px) {
    .heading-container {
      transform: translateY(16rem) !important;
    }
  }
`;

const HeadingText = ({ isVisible }) => {
    return (
        <>
            <style>{mobileStyles}</style>
            <div
                className="heading-container"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "all 0.5s ease",
                    transition: "opacity 0.5s"
                }}>
                <div className={styles.middleColumn}>
                    <div className={styles.textBlock}>
                        <div className={styles.mainTitle}>ANWESHA 2024</div>
                        <div className={styles.subTitle}>GLIMPSE</div>
                    </div>
                </div>
            </div>
        </>
    );
};

const GalleryStack = () => {
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const images = imagesRef.current;

        // Calculate grid positions
        const calculateGridPosition = (index) => {
            const columns = 3;
            const row = Math.floor(index / columns);
            const col = index % columns;
            return {
                x: (col - 1) * 62 + '%',
                y: row * 65 + '%',
                scale: 0.5,
                opacity: 1,
                rotateZ: 0,
            };
        };

        // Initial stacked position
        gsap.set(images, {
            position: 'absolute',
            width: '50%',
            height: 'auto',
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
            "--isvisible": 0,
        });

        // Create the animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: '+=' + getWindowDimensions().width * 0.18 + '%',
                pin: true,
                scrub: 1,
                onComplete: () => setAnimationComplete(true),
                onUpdate: (self) => {
                    // Consider animation "complete" when progress is at or near the end
                    if (self.progress >= 0.3) {
                        setAnimationComplete(true);
                    } else {
                        setAnimationComplete(false);
                    }
                }
            }
        });

        // Animate each image to its grid position
        images.forEach((image, index) => {
            const { x, y, scale, opacity, rotateZ } = calculateGridPosition(index);

            // Initial state - stacked with offset and rotation
            gsap.set(image, {
                rotateZ: (index - 2) * 1,
                zIndex: images.length - index,
            });

            // Animate to grid
            tl.to(image, {
                x,
                y,
                scale,
                opacity,
                rotateZ,
                duration: 1,
                "--isvisible": 1,
            }, 0);

            tl.to(container, {
                "--isvisible": 1,
            }, 0);
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute h-screen w-full h-auto overflow-hidden">
            <HeadingText isVisible={animationComplete} />
            <div className="absolute w-full h-[100vh]" style={{ height: "100vh !important" }}>
                <img
                    ref={el => imagesRef.current[0] = el}
                    src="/gallery/_DC_4278.JPG"
                    alt="Gallery Image 1"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[1] = el}
                    src="/gallery/_DSC_4142.png"
                    alt="Gallery Image 2"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[2] = el}
                    src="/gallery/_DSC2495.JPG"
                    alt="Gallery Image 3"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[3] = el}
                    src="/gallery/Screenshot 2024-12-16 at 1.27.35 AM.png"
                    alt="Gallery Image 4"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[4] = el}
                    src="/gallery/_DSC0254.JPG"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[5] = el}
                    src="/gallery/Screenshot 2024-12-16 at 1.17.36 AM.png"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[6] = el}
                    src="/gallery/_DSC1866.JPG"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[7] = el}
                    src="/gallery/_DSC4028.JPG"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[8] = el}
                    src="/gallery/_DSC3763.JPG"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[9] = el}
                    src="/gallery/_DSC0267.JPG"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[10] = el}
                    src="/gallery/Screenshot 2024-12-16 at 1.21.18 AM.png"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[11] = el}
                    src="/gallery/Frame 239514.png"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[12] = el}
                    src="/gallery/_DSC1891.JPG"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[13] = el}
                    src="/gallery/Screenshot 2024-12-16 at 1.19.38 AM.png"
                    alt="Gallery Image 5"
                    className="absolute"
                />
                <img
                    ref={el => imagesRef.current[14] = el}
                    src="/gallery/Screenshot 2024-12-16 at 1.13.18 AM.png"
                    alt="Gallery Image 6"
                    className="absolute"
                />
            </div>
        </div>
    );
};

export default GalleryStack;