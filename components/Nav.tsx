import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Layout , Menu } from 'antd';
import styles from '../styles/Home.module.css';


function Navbar():ReactElement{
    const { Header } = Layout;
    return(
        <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
            <div className={styles.logo} />
            <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link href="/#About">About</Link></Menu.Item>
            <Menu.Item key="3"><Link href="/#Skill">Skills</Link></Menu.Item>
            <Menu.Item key="4"><Link href="/#Projects">Projects</Link></Menu.Item>
            </Menu>
        </Header>    
    )
}

export default Navbar;