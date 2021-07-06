import React from 'react'
import Image from 'next/image'
import jojiwalk from '../public/image/jojiwalk.gif'
import jojijump from '../public/image/jojijump.gif'
import cat from '../public/image/cat.png'
import town from '../public/image/town_example.png'
import styles from '../styles/Home.module.css';

export default function graphic() {
    
    return (
        <div className={`${styles.graphic} ${styles.container}`}>
            <h1 className={styles.title}>Graphic Design</h1>
            <div className={styles.flexbox}>
                <div className={styles.walk}><Image src={jojiwalk} alt="jojiwalk"/></div>
                <div className={styles.jump}><Image src={jojijump} alt="jojijump"/></div>
                <div className={styles.cat}><Image src={cat} alt="cat"/></div>
            </div>
            {/* <Image src={town} alt="town" styles={{width : 200, height: 200}}/> */}
        </div>
    )
}