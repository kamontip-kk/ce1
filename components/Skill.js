import React from 'react';
import styles from '../styles/Home.module.css';

function Skill(){
    return(
        <div className={styles.skill}>
        <h1 id="Skill">My Skills</h1>
        <ul className={`${styles.text} ${styles.textbox}`} style={{listStyleType: 'none'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>C#</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Aseprite</li>
            <li>Git</li>
        </ul>
        </div>
    )
}

export default Skill;