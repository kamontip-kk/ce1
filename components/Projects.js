import React from 'react';
import Link from 'next/link';
import { Card, Col, Row, Badge } from 'antd';
import styles from '../styles/Home.module.css';

function Projects(){
    const { Meta } = Card;

    return(
        <div className={styles.projects}>
        <h1 id="Projects">All Projects</h1>
        <div className="site-card-wrapper" style={{ marginLeft: 30, marginTop: 30 }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Link href="/webdev">
                        <Badge style={{ backgroundColor: '#108ee9' }} count={3}>
                        <Card hoverable style={{ width: 400 }}
                            cover={<img alt="Web Development" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                            <Meta title="Web Development"/>
                        </Card>
                        </Badge>
                    </Link>
                </Col>
                <Col span={8}>
                    <Link href="/gamedev">
                        <Badge style={{ backgroundColor: '#108ee9' }} count={3}>
                        <Card hoverable style={{ width: 400 }}
                            cover={<img alt="Game Development" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                            <Meta title="Game Development"/>
                        </Card>
                        </Badge>
                    </Link>
                </Col>
                <Col span={8}>
                    <Link href="/graphic">
                        <Badge style={{ backgroundColor: '#108ee9' }} count={1}>
                        <Card hoverable style={{ width: 400 }}
                            cover={<img alt="Graphic Design" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
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