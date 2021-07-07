import React from 'react';
import Link from 'next/link';
import { Card, Col, Row, Badge } from 'antd';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import web from '../public/image/web.png'
import game from '../public/image/game.png'
import graphic from '../public/image/bg_town.png'

function Projects(){
    const { Meta } = Card;

    return(
        <div className={styles.projects}>
        <h1 id="Projects">All Projects</h1>
        <Row>
            <div className="site-card-wrapper" style={{ marginLeft: 30, marginTop: 30 }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Link href="/webdev" passHref>
                            <Badge style={{ backgroundColor: '#108ee9' }} count={3}>
                                <Card hoverable
                                    cover={<Image alt="Web Development" src={web}/>}>
                                    <Meta title="Web Development"/>
                                </Card>
                            </Badge>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link href="/gamedev" passHref>
                            <Badge style={{ backgroundColor: '#108ee9' }} count={3}>
                                <Card hoverable
                                    cover={<Image alt="Game Development" src={game}/>}>
                                    <Meta title="Game Development"/>
                                </Card>
                            </Badge>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link href="/graphic" passHref>
                            <Badge style={{ backgroundColor: '#108ee9' }} count={1}>
                                <Card hoverable
                                    cover={<Image alt="Graphic Design" src={graphic}/>}>
                                    <Meta title="Graphic Design"/>
                                </Card>
                            </Badge>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Row>
        </div>
    )
}

export default Projects;