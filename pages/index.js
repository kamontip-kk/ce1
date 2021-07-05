import React from 'react';
import { Layout } from 'antd';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import Image from 'next/image';
import mypic from '../public/image/myimg.jpg'

const Home = () =>{
  const {Content} = Layout;

  return (
    <>
    <Layout>
    <Content className={styles.banner}>
      <div className={styles.bannertitle}>
        Hi, my name is Kamontip Koopiamrug
      </div>
      <Image src={mypic} alt="mypicture" styles={{width : 400, height: 400}}/>
    </Content>
    <About/>
    <Skill/>
    <Projects/>
    </Layout>
    </>
  )
}

export default Home
