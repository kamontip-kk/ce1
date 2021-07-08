import React ,{ ReactElement, useState } from 'react'
import Image from 'next/image'
import jojiwalk from '../public/image/jojiwalk.gif'
import jojijump from '../public/image/jojijump.gif'
import cat from '../public/image/cat.png'
import styles from '../styles/Home.module.css';
import { Button } from 'antd';

export default function Graphic():ReactElement {
    const [isWalk,setIswalk] = useState(false);
    const [isJump,setIsjump] = useState(true);

    const onCLick = () => {
        setIswalk(!isWalk); 
        setIsjump(!isJump);
    }

    return (
        <div className={`${styles.graphic} ${styles.container}`}>
            <h1 className={styles.title}>Graphic Design</h1>
            <div className={styles.flexbox}>
                <div className={styles.walk} style={{display: isWalk?'block':'none'}}><Image src={jojiwalk} alt="jojiwalk"/></div>
                <div className={styles.jump} style={{display: isJump?'block':'none'}} ><Image src={jojijump} alt="jojijump"/></div>
                <div className={styles.cat}><Image src={cat} alt="cat"/></div>
            </div>
            <Button onClick={onCLick} disabled={isWalk}>Walk</Button> &nbsp;
            <Button onClick={onCLick} disabled={isJump}>Jump</Button>
            
            {/* <Image src={town} alt="town" styles={{width : 200, height: 200}}/> */}
        </div>
    )
}