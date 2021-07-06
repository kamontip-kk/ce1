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
            <h1>Graphic Design</h1>
            <Image className={styles.walk} src={jojiwalk} alt="jojiwalk"/>
            <Image className={styles.jump} src={jojijump} alt="jojijump"/>
            <Image className={styles.cat} src={cat} alt="cat"/>
            {/* <Image src={town} alt="town" styles={{width : 200, height: 200}}/> */}
        </div>
    )
}