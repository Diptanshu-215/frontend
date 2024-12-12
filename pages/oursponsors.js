import Image from 'next/image'
import React from 'react'
import styles from '../styles/oursponsors.module.css'
import { Josefin_Sans } from '@next/font/google'

const josefinSans = Josefin_Sans({
    weight: ['400', '700', '500', '600'],
    subsets: ['latin'],
})

const oursponsors = () => {
    const [year, setYear] = React.useState('spons24')
    // const n = 4;
    const data = {
        spons23: [
            {
                name: 'Bihar Art Culture and Youth Department',
                image: 'https://drive.google.com/uc?export=view&id=1nYe6yUwWQZU6pSxS7tDNPhhI7Wz8EMex',
                link: '',
            },
            {
                name: 'Bihar Tourism',
                image: 'https://drive.google.com/uc?export=view&id=1pRqsKrhyTbhOpnxnNOKNTVwQxW4krm-L',
                link: 'https://tourism.bihar.gov.in/',
            },
            {
                name: 'Bihar Rajya Pul Nirman Nigam',
                image: 'https://drive.google.com/uc?export=view&id=1sD17yO4Zwm449d9ilTh9cPRoTeUd4tpy',
                link: 'https://brpnnl.bihar.gov.in/',
            },
            {
                name: 'Bihar State Electronics Development Corporation',
                image: 'https://drive.google.com/uc?export=view&id=1QZLHYPSJsMLQUKssih7HPqU5DwMGkcnc',
                link: 'https://bsedc.bihar.gov.in/',
            },
            {
                name: 'Bihar State Building Construction Corporation Limited',
                image: 'https://drive.google.com/uc?export=view&id=12rzaQ86RQfHFE_T0XGc-c8uRi_sQILRZ',
                link: 'https://bsbccl.bihar.gov.in/New_V/Default.aspx',
            },
            {
                name: 'Union Bank of India',
                image: 'https://drive.google.com/uc?export=view&id=1l4ePbFEg3oRMScjzzYJpGkrtBhjuQIMf',
                link: 'https://www.unionbankofindia.co.in/',
            },
            {
                name: 'State Bank of India',
                image: 'https://drive.google.com/uc?export=view&id=1ZaIoqpx07hc7rkyEBbw1bq_pITZnubsO',
                link: 'https://sbi.co.in/',
            },
            {
                name: 'Coca Cola',
                image: 'https://drive.google.com/uc?export=view&id=1AX0r088eZ8-2YDHAGjgesfHIRc6SGZnw',
                link: 'https://cokestudio.coke2home.com/bharat',
            },
            {
                name: 'Bihar State Aids Control Society',
                image: 'https://drive.google.com/uc?export=view&id=1p8hOVd0EQLZXMak9LRnmRAdH_xHnMVTd',
                link: '',
            },
            {
                name: 'Indian Oil Corporation',
                image: 'https://drive.google.com/uc?export=view&id=1S8D9eehYFohjFcOB4acJxmBgc2q8ZQNk',
                link: 'https://iocl.com/',
            },
            {
                name: 'HDFC',
                image: 'https://drive.google.com/uc?export=view&id=1cPLTNv-8TJDEZDW8F_zYaowHbEWAIor6',
                link: 'https://www.hdfcbank.com/',
            },
            {
                name: 'Ruban Memorial',
                image: 'https://drive.google.com/uc?export=view&id=1NWKWJtXsIjpzx5zLHGwSIYhDwWW9iY8W',
                link: 'https://rubanpatliputrahospital.com/',
            },
            {
                name: 'Paras HMRI',
                image: 'https://drive.google.com/uc?export=view&id=1GURsSfaKltukA9EGBD6EVUIyx3QhKk8l',
                link: 'https://www.parashospitals.com/india/paras-hospitals-patna/centres-of-excellence/orthopaedics',
            },
            {
                name: 'We Excel ',
                image: 'https://drive.google.com/uc?export=view&id=12C9Gaz0ZJ8SWFzTOiqJxztWYKkceRTVS',
                link: 'https://weexcel.in/',
            },
            {
                name: 'La Pintura',
                image: '/sponsors/2023/lapintura.jpeg',
                link: 'https://www.instagram.com/lapinturastudio/?hl=en',
            },
            {
                name: 'EduVitae Services',
                image: 'https://drive.google.com/uc?export=view&id=1SFVfSdzoyyRc2_OEG2ZYX-6R29nZCmPC',
                link: 'https://eduvitae.co.in/',
            },
            {
                name: 'Forum IAS',
                image: 'https://drive.google.com/uc?export=view&id=15Qtv-gOK4CnYHTdnONlURFNnQPv9H5l0',
                link: 'https://forumias.com/ias-coaching-in-patna/',
            },
            {
                name: 'Testbook',
                image: '/sponsors/2023/testbook.png',
                link: 'https://testbook.com/',
            },
            {
                name: 'Ultratech Cement',
                image: 'https://drive.google.com/uc?export=view&id=1Tqa82L1TG-NJ0khVFnMChIo1PNdWzqp4',
                link: 'https://www.ultratechcement.com/',
            },
            {
                name: 'Decathalon',
                image: 'https://drive.google.com/uc?export=view&id=155A3E2w-Xp6M_J16GI3kYn_Kqyf1VM1K',
                link: 'https://www.decathlon.in/',
            },
            {
                name: 'Bihar Khadi',
                image: 'http://kvibbihar.com/images/khadi_logo.png',
                link: 'http://www.biharkhadi.com/',
            },
            {
                name: 'Bizeal "The Dream Bakers"',
                image: '/sponsors/2023/bizeal.png',
                link: 'https://www.bizeal.com/',
            },
            {
                name: 'Talentwala',
                image: 'https://drive.google.com/uc?export=view&id=1VnxW_CraRRFX5afz5krpZ0H7mRut69Oz',
                link: '',
            },
            {
                name: 'Basic',
                image: 'https://drive.google.com/uc?export=view&id=1BhFpl6SlDGnMriHJhsO0MttgV6ZoINEa',
                link: '',
            },
            {
                name: 'Bulkinza',
                image: '/sponsors/2023/bulkinza.png',
                link: 'https://bulkinza.com/',
            },
            {
                name: 'Sudha',
                image: 'https://drive.google.com/uc?export=view&id=1g26UGW2z-m4qkJKeF4Ug06dWHcwR8Vlr',
                link: 'https://www.patnadairy.org/',
            },
            {
                name: 'FujiFilm Instax',
                image: 'https://drive.google.com/uc?export=view&id=1G3NIuTFl_Rl-tSy-etc05p6yt5kusNPO',
                link: 'https://fujifilmxindia.com/',
            },
            {
                name: 'Pizza Hut',
                image: 'https://drive.google.com/uc?export=view&id=1WNL6lJ17emyTNqqv8-NXB8IHIHHMNLB1',
                link: 'https://www.pizzahut.co.in/',
            },
            {
                name: 'The Comunity Events',
                image: '/sponsors/2023/thecommunityevents.jpg',
                link: 'https://www.facebook.com/thecommunityevents/',
            },
            {
                name: 'Coffee For You',
                image: '/sponsors/2023/coffeeforyou.png',
                link: '',
            },
        ],
        spons24: [
            {
                //https://drive.google.com/uc?export=view&id=1RCXj3Es2w-E4ZeMGsB82Jr8z75DL-1tA
                name: 'Allen Cooper',
                image: 'https://drive.google.com/uc?export=view&id=1t6AzkA6TaizniJi3kEgi4DZAH7-TnbA4',
                link: 'https://www.allencooperindia.com/',
            },
            {
                name: 'Bihar Council on Science and Technology',
                image: 'https://drive.google.com/uc?export=view&id=1qtwIx1Uo6bNUaweYYJB9FjnQzt15cVdf',
                link: 'https://bcstnsdnmd.co.in/home/',
            },
            {
                name: 'Beltron',
                image: 'https://drive.google.com/uc?export=view&id=1RCXj3Es2w-E4ZeMGsB82Jr8z75DL-1tA',
                link: 'https://bsedc.bihar.gov.in/',
            },
            {
                name: 'Bihar Tourism',
                image: 'https://drive.google.com/uc?export=view&id=1uH0eSOGGofm5LWclaEF3N5h1fRLssfeo',
                link: 'tourism.bihar.gov.in',
            },

            {
                name: 'Biryani',
                image: 'https://drive.google.com/uc?export=view&id=188g69RL2rUK2IUNlbcLK30AMzao3ocPO',
                link: 'biryanibykilo.com',
            },
            {
                name: 'Boult',
                image: 'https://drive.google.com/uc?export=view&id=1IRMRVUNLlUKyghOX1s0i6FLZUVJA0_us',
                link: 'https://www.boultaudio.com/',
            },
            {
                name: 'Brpnnl',
                image: 'https://drive.google.com/uc?export=view&id=1ik9_1UGJG_2hJyVw6jHNPiY7cGeJl0gk',
                link: 'brpnnl.bihar.gov.in',
            },
            {
                name: 'Bsacs',
                image: 'https://drive.google.com/uc?export=view&id=1xIMMZal3ciSkjYNiFM2NpwwUKcjmEkfN',
                link: ' http://122.252.249.61/BSACS/(S(wcqp3b22llkmyral43koyee0))/home.aspx',
            },
            {
                name: 'Dit Red',
                image: 'https://drive.google.com/uc?export=view&id=1VBG2d2mNg0wvKvCU4_HoonoccFcsBlBV',
                link: 'https://state.bihar.gov.in/dit/CitizenHome.html',
            },
            {
                name: 'Doi',
                image: 'https://drive.google.com/uc?export=view&id=1CRoCiAxn7M6E-ewcd6AQihXZb8-HLSrd',
                link: '',
            },
            {
                name: 'Dominos',
                image: 'https://drive.google.com/uc?export=view&id=1M6O_sYkgfZo6BlGqgG1CnrWdIGRHf2ME',
                link: ' https://www.dominos.co.in/',
            },
            {
                name: 'Fueling',
                image: 'https://drive.google.com/uc?export=view&id=1470M3YFcLqFmMdpb5QCEXW08wJTSRFrg',
                link: '',
            },
            {
                name: 'Hydration',
                image: 'https://drive.google.com/uc?export=view&id=1yjcPo-kOc8MNnv32QKyf05IatfBpN5_Q',
                link: ' ',
            },
            {
                name: 'Kala Akchar',
                image: 'https://drive.google.com/uc?export=view&id=1CFvfIPVPPxTz3Vnk6ts5DGreLBXKZDHf',
                link: ' ',
            },
            {
                name: 'Nhai',
                image: 'https://drive.google.com/uc?export=view&id=1axsLht1WrclK8juwRsamb63xdz1cZula',
                link: ' https://nhai.gov.in/',
            },
            {
                name: 'Ntpc',
                image: 'https://drive.google.com/uc?export=view&id=1SNqmi2HMflM03c1P6_MQD4TYQ__mjTqI',
                link: ' https://www.ntpc.co.in/',
            },
            {
                name: 'Red Fm',
                image: 'https://drive.google.com/uc?export=view&id=1IKEBu8nlxBsWmiZb__LK1vEWzUq7Y5Bj',
                link: 'redfmindia.in ',
            },
            {
                name: 'Road Chef',
                image: 'https://drive.google.com/uc?export=view&id=1YF31cuY4AEiLxj5ngwZyqjfacgKY_KcD',
                link: ' ',
            },
            {
                name: 'Sbi',
                image: 'https://drive.google.com/uc?export=view&id=1SrNjeCQxM6gkeILaXsv9tev0rQx7xuxR',
                link: ' https://www.sbi.co.in/',
            },
            {
                name: 'Startup Bihar',
                image: 'https://drive.google.com/uc?export=view&id=1uEW1bECxlTZbslxTC6vI1MqilveD-1gB',
                link: '',
            },
            {
                name: 'The Community Events',
                image: 'https://drive.google.com/uc?export=view&id=1Q7-zIM7VRklMACJdk-U7TIT5YuAMUALE',
                link: ' ',
            },
            {
                name: 'Toi',
                image: 'https://drive.google.com/uc?export=view&id=1OTyj7NAyalCpfbcgXoMiLL5mz8jTwJK9',
                link: '  https://timesofindia.indiatimes.com/',
            },
            {
                name: 'Waffcha',
                image: 'https://drive.google.com/uc?export=view&id=1H8OVZD1Swzy0r8r25stki1q9GZ_YTbAm',
                link: ' https://www.waffcha.com/',
            },
            {
                name: 'Wat A Burger',
                image: 'https://drive.google.com/uc?export=view&id=1JJNTNKuZ_SwlUqLsJNFEGXfmspz3HcL2',
                link: ' https://www.wataburger.in/',
            },
        ],
        spons25: [],
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.wave} style={{ paddingTop: '4vw' }}>
                <div className={styles.container}>
                    <h2 className={styles.teamHeader} style={josefinSans.style}>
                        {' '}
                        OUR SPONSORS
                    </h2>
                    <div className={styles.dropdownContainer}>
                        <button className={styles.dropdownButton}>
                            Previous Years Sponsors
                            <span className={styles.arrow}>▼</span>
                        </button>
                        <div className={styles.dropdownContent}>
                            <a onClick={() => setYear('spons23')}>2023-2024</a>
                            <a onClick={() => setYear('spons24')}>2024-2025</a>
                            <a onClick={() => setYear('spons25')}>2025-2026</a>
                        </div>
                    </div>

                    <div style={{ height: '10vw' }}></div>
                    <h3
                        className={styles.teamSubHeading}
                        style={josefinSans.style}
                    ></h3>
                    <div style={{ height: '2vw' }}></div>
                    <div className={styles.coordinators}>
                        <div className={styles.picContainer}>
                            {/* {[...Array(n)].map((e, i) =>  */}
                            {data[year]?.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <div className={styles.teamCard}>
                                        <Image
                                            src={`${item.image}`}
                                            className={styles.memberImage}
                                            height={220}
                                            width={220}
                                            alt={item.name}
                                        />
                                        <div
                                            className={styles.teamMemberDetails}
                                        >
                                            <div className={styles.memberName}>
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default oursponsors
