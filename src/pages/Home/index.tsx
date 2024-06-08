import './style.css';

import { Button, Col, Layout, Row } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo_des from '../../assets/logo_des.png';
import {
  ContactSection,
  DocumentSection,
  HomeSection,
  InfoSection,
} from '../../features/home/components';

const sections = {
  home: 'Trang chủ',
  info: 'Giới thiệu',
  document: 'Tài liệu',
  contact: 'Liên hệ',
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigator = useNavigate();

  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: 'white',
          height: 70,
          lineHeight: 0,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Row align="middle">
          <Col span={12}>
            <img src={logo_des} alt="logo" style={{ height: 70 }} />
          </Col>
          <Col span={12}>
            <Row gutter={24} style={{ float: 'right' }} align="middle">
              {Object.entries(sections).map(([sectionId, name]) => (
                <Col key={sectionId}>
                  <a
                    style={{ color: activeSection === sectionId ? '#d3a971' : 'black' }}
                    onClick={() => setActiveSection(sectionId)}
                    href={`#${sectionId}`}
                  >
                    {name}
                  </a>
                </Col>
              ))}
              <Col>
                <Button
                  type="primary"
                  style={{ backgroundColor: '#d3a971' }}
                  onClick={() => navigator('/manager')}
                >
                  Thời gian hiện hành
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content>
        <div id="home" style={{ display: 'flex' }} />
        <HomeSection />
        <InfoSection />
        <DocumentSection />
        <ContactSection />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
