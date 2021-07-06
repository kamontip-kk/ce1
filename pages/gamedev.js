import React from 'react'
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css';

export default function gamedev() {
    return (
        <div className={`${styles.gamedev} ${styles.container}`}>
            <h1>Game Development</h1>
            <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/portfolio-f502a.appspot.com/o/MiniGolf.mp4?alt=media&token=b351c78f-8ab8-477e-9a97-2bc40643e2f1' controls />
            <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/portfolio-f502a.appspot.com/o/GoJoji.mp4?alt=media&token=7677db00-d769-4d9b-9880-a9cc245e9f6e' controls />
            <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/portfolio-f502a.appspot.com/o/Platformer.mp4?alt=media&token=4313d56a-ba16-4f1d-9acd-974582328698' controls />
        </div>
    )
}
