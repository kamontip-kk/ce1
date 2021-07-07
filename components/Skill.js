import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Row, Col } from 'antd';
import html from '../public/image/html.png'
import css from '../public/image/css.png'
import js from '../public/image/js.png'
import react from '../public/image/react.png'
import node from '../public/image/node.png'
import mysql from '../public/image/mysql.png'
import cs from '../public/image/csharp.png'
import ps from '../public/image/photoshop.png'
import ase from '../public/image/aseprite.png'
import git from '../public/image/git.png'

function Skill(){
    const style = {padding: '8px 0', textAlign: 'center'};

    return(
        <div className={styles.skill}>
        <h1 id="Skill">My Skills</h1>
        <div className={`${styles.text} ${styles.textbox}`}>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                    <div style={style}><Image src={html} alt="html" width={80} height={80}/><br/>HTML
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>                    
                    <div style={style}>
                        <Image src={css} alt="css" width={80} height={80}/><br/>CSS
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}><Image src={js} alt="js" width={80} height={80}/><br/>JavaScript
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={react} alt="reactjs" width={80} height={80}/><br/>ReactJS
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={node} alt="nodejs" width={140} height={80}/><br/>NodeJS
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={mysql} alt="mysql" width={140} height={80}/><br/>MySQL
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={cs} alt="c#" width={80} height={80}/><br/>C#
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={ps} alt="adobe photoshop" width={80} height={80}/><br/>Adobe Photoshop
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={ase} alt="aseprite" width={80} height={80}/><br/>Aseprite
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Image src={git} alt="git" width={80} height={80}/><br/>Git
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default Skill;