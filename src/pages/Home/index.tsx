import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Layout, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import homeBackground from '../../assets/background.jpg';
import webgisImg from '../../assets/webgis.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <Row
        align="middle"
        justify="space-between"
        style={{
          padding: '20px 30px',
          height: 70,
          borderBottom: '1px solid #a2c7f2',
          textShadow: '1px 1px 1px #4295f5',
        }}
      >
        <Col span={10}>
          <Typography.Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            Rescuse Station
          </Typography.Text>
        </Col>
        <Col span={14}>
          <Row justify="end" align="middle">
            <Col>
              <Button
                type="link"
                block
                onClick={() => {
                  navigate('/manage');
                }}
              >
                Quản lý
              </Button>
            </Col>
            <Divider type="vertical" />
            <Col>
              <Button
                type="link"
                block
                onClick={() => {
                  navigate('/webgis');
                }}
              >
                WebGIS
              </Button>
            </Col>
            <Divider type="vertical" />
            <Col>
              <Button
                type="link"
                block
                onClick={() => {
                  navigate('/login');
                }}
              >
                Đăng nhập
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          height: 'calc(100vh - 70px)',
        }}
        align="middle"
        justify="center"
      >
        <Col span={12} style={{ display: 'flex', justifyContent: 'center', fontSize: '24' }}>
          <div
            style={{
              width: '60%',
              padding: '0px 20px',
            }}
          >
            <div>
              <Typography.Title level={2}>Webgis Trạm cứu hộ</Typography.Title>
              <Typography.Text
                style={{
                  fontSize: 18,
                }}
              >
                Webgis trạm cứu hộ cung cấp thông tin về các trạm cứu hộ trên toàn quốc, giúp người
                dân dễ dàng tìm kiếm thông tin về trạm cứu hộ gần nhất.
              </Typography.Text>
            </div>
            <div>
              <Typography.Title level={2}>Đơn vị sử dụng webgis</Typography.Title>
              <Typography.Paragraph
                style={{
                  fontSize: 18,
                }}
              >
                Trạm PCCC, Bộ Công An, Bộ GTVT, Trạm y tế và các ban ngành liên quan
              </Typography.Paragraph>
            </div>

            <div>
              <Button
                type="primary"
                size="large"
                style={{
                  borderRadius: 20,
                  padding: '0px 20px',
                  fontSize: 18,
                  height: 50,
                }}
                onClick={() => {
                  navigate('/webgis');
                }}
              >
                Chuyển tới trang webgis
                <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </Col>
        <Col span={12} style={{ justifyContent: 'center', display: 'flex' }}>
          <img
            src={webgisImg}
            alt="WebGIS"
            style={{
              maxWidth: '80%',
              padding: 20,
              marginRight: 50,
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
