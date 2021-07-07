import React from 'react';
import { Layout, Row, Col, Divider} from 'antd';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import Image from 'next/image';
import mypic from '../public/image/myimg.jpg'
import resume from '../public/image/resume.png';
const Home = () =>{
  const {Content} = Layout;

  return (
    <div className={`${styles.container}`}>
    <Content className={styles.content}>
      <Divider orientation="left"></Divider>
      <Row>
        <Col flex={3}>
          <div style={{fontSize: 50,fontWeight: 'bold', paddingTop: 140, paddingLeft: 40}}>
            Hi, my name is<br />KAMONTIP KOOPIAMRUG
          </div>
          <span className={styles.shadowcircle}></span>
          <span className={styles.circle}></span>  
        </Col>
        <Col flex={2}>
          <Image src={mypic} alt="mypicture" className={styles.mypic} width={450} height={450}/>
        </Col> 
      </Row>
      <About/>
      <Skill/>
      <Projects/>
    </Content>
    </div>
  )
}

export default Home
