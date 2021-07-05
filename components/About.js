import React from 'react';
import { Timeline } from 'antd';


function About(){
    return(
        <div id="About">
        <h1>About Me</h1>
        <p>I intend to work as a Full-Stack Developer to become a proficient developer in the future.
            So I would like to learn a real work process in positive environment that enhance my knowledge, abilities, skills and also requires problem solving skills to accomplishing projects and grow in this field of work.</p>
        <h3>My education</h3>
        <Timeline>
            <Timeline.Item>College : King Mongkut`&apos;`s University of Technology Thonburi in Media Technology (GPAX 3.43) 2015-09-01</Timeline.Item>
            <Timeline.Item color="gray">High School : Suankularb Wittayalai Thonburi School in Math-Eng (MEP) 2015-09-01</Timeline.Item>
        </Timeline>
        </div>
    )
}

export default About;