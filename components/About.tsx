import React, { ReactElement } from 'react';
import { Timeline } from 'antd';
import styles from '../styles/Home.module.css';


function About():ReactElement{
    return(
        <div className={styles.about}>
            <h1 id="About">About Me</h1>
            <p className={`${styles.text} ${styles.textbox}`}>I intend to work as a Full-Stack Developer to become a proficient developer in the future.
            So I would like to learn a real work process in positive environment that enhance my knowledge, abilities, skills and also requires problem solving skills to accomplishing projects and grow in this field of work.</p>
            <h1>My education</h1>
            <Timeline className={`${styles.textbox}`} style={{paddingTop: 30, paddingBottom: 0, paddingLeft: 20}}>
                <Timeline.Item style={{fontSize: 20, color: '#9bbdc5'}}>College : King Mongkut&apos;s University of Technology Thonburi in Media Technology (GPAX 3.43) 2015-09-01</Timeline.Item>
                <Timeline.Item style={{fontSize: 20, color: '#9bbdc5', paddingBottom: 0}} color="Gray">High School : Suankularb Wittayalai Thonburi School in Math-Eng (MEP) 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
    )
}

export default About;