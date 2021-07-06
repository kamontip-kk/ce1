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
    <Layout>
    <Content className={styles.content}>
      <Divider orientation="left"></Divider>
      <Row>
        <Col flex={2}>
          <div>
            Hi, my name is Kamontip Koopiamrug
          </div>
        </Col>
        <Col flex={3}>
          <Image src={mypic} alt="mypicture" styles={{width : 400, height: 400}}/>
        </Col>
      </Row>

      <About/>
      <Skill/>
      <Projects/>
    </Content>
    </Layout>
    </div>
  )
}

export default Home
