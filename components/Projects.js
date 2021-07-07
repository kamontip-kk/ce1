import React from 'react';
import Link from 'next/link';
import { Card, Col, Row, Badge } from 'antd';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import cat from '../public/image/cat.png'

function Projects(){
    const { Meta } = Card;

    return(
        <div className={styles.projects}>
        <h1 id="Projects">All Projects</h1>
        <div className="site-card-wrapper" style={{ marginLeft: 30, marginTop: 30 }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Link href="/webdev" passHref>
                        <Badge style={{ backgroundColor: '#108ee9' }} count={3}>
                        <Card hoverable style={{ width: 400 }}
                            cover={<Image alt="Web Development" src={cat} height={400}/>}>
                            <Meta title="Web Development"/>
                        </Card>
                        </Badge>
                    </Link>
                </Col>
                <Col span={8}>
                    <Link href="/gamedev" passHref>
                        <Badge style={{ backgroundColor: '#108ee9' }} count={3}>
                        <Card hoverable style={{ width: 400 }}
                            cover={<Image alt="Game Development" src={cat} height={400}/>}>
                            <Meta title="Game Development"/>
                        </Card>
                        </Badge>
                    </Link>
                </Col>
                <Col span={8}>
                    <Link href="/graphic" passHref>
                        <Badge style={{ backgroundColor: '#108ee9' }} count={1}>
                        <Card hoverable style={{ width: 400 }}
                            cover={<Image alt="Graphic Design" src={cat}height={400}/>}>
                            <Meta title="Graphic Design"/>
                        </Card>
                        </Badge>
                    </Link>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default Projects;