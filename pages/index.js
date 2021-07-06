import React from 'react';
import { Layout } from 'antd';
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
      <div className={styles.title}>
        Hi, my name is Kamontip Koopiamrug
      </div>
      <Image src={mypic} alt="mypicture" styles={{width : 400, height: 400}}/>
      <About/>
      <Skill/>
      <Projects/>
    </Content>
    </Layout>
    </div>
  )
}

export default Home
