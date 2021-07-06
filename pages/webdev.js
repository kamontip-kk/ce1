import React from 'react';
import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player';

export default function Webdev() {
    return (
        <div className={`${styles.webdev} ${styles.container}`}>
            <h1 className={styles.title}>Web Development</h1>
            <div className={styles.item}>
                <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/portfolio-f502a.appspot.com/o/Dudushop.mp4?alt=media&token=c27598e1-09d7-4da3-8f23-b97f36515706" controls/>
                <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/portfolio-f502a.appspot.com/o/register.mp4?alt=media&token=90367713-a04c-430c-aca1-bbc7c1d723b0" controls/>
                <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/portfolio-f502a.appspot.com/o/postbook.mp4?alt=media&token=05ff820d-a070-42b5-bb8a-4bf90a34a645" controls/>
            </div>         
        </div>
    )
}