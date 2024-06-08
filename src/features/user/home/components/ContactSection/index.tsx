import { FacebookOutlined, GithubOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';

import home_bg_4 from '../../../../../assets/home_bg_4.jpg';
import logo from '../../../../../assets/logo.png';
import logo_des from '../../../../../assets/logo_des.png';
import menu_bg from '../../../../../assets/menu_bg.jpg';
import { font } from '../../../../../libs/theme';

export const ContactSection = () => {
  return (
    <>
      <div>
        <Row
          gutter={24}
          align="middle"
          style={{
            padding: '40px 40px',
            backgroundImage: `url(${home_bg_4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
          justify="space-around"
        >
          <Col span={8}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${menu_bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 500,
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 20,
                  color: '#d3a971',
                  fontFamily: font.josefinSans,
                }}
              >
                Giờ hành chính
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: font.yesevaOne,
                  lineHeight: 1.2,
                  color: 'white',
                }}
              >
                Thời gian hoạt động
              </Typography.Text>
              <Row gutter={[24, 40]} style={{ width: '80%', marginTop: 40 }}>
                <Col
                  span={12}
                  style={{
                    textAlign: 'end',
                    color: 'white',
                  }}
                >
                  Các ngày trong tuần
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: 'start',
                    color: 'white',
                  }}
                >
                  8:00 - 22:00
                </Col>
              </Row>
              <Row gutter={[24, 40]} style={{ width: '80%', margin: '20px 0px' }}>
                <Col
                  span={12}
                  style={{
                    textAlign: 'end',
                    color: 'white',
                  }}
                >
                  Thứ 7 - Chủ nhật
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: 'start',
                    color: 'white',
                  }}
                >
                  9:00 - 20:00
                </Col>
              </Row>
              <Row gutter={[24, 40]} style={{ width: '80%' }}>
                <Col
                  span={12}
                  style={{
                    textAlign: 'end',
                    color: 'white',
                  }}
                >
                  Các ngày lễ
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: 'start',
                    color: 'white',
                  }}
                >
                  Cả ngày
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={3}>
            <img
              src={logo}
              alt="logo"
              style={{ height: 100, objectFit: 'cover', backgroundColor: 'white' }}
            />
          </Col>
          <Col span={12}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                border: '2px solid #d3a971',
                height: 400,
              }}
            >
              <Typography.Text
                style={{
                  fontFamily: font.josefinSans,
                }}
              >
                Video thuyết trình
              </Typography.Text>
              <iframe
                width={'90%'}
                height={350}
                src="https://www.youtube.com/embed/1v_tENXxRE0?si=oczEIFW_qUR0MSa7"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          backgroundColor: '#222222',
          width: '100%',
          marginTop: 40,
          padding: '40px 0px',
          color: 'white',
          fontFamily: font.josefinSans,
        }}
      >
        <Row
          gutter={24}
          style={{
            padding: '0px 50px',
          }}
        >
          <Col span={8}>
            <Row>
              <Typography.Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 10,
                }}
              >
                Thông tin liên hệ
              </Typography.Text>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <HomeOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>
                  Quận 12, Thành phố Hồ Chí Minh
                </Typography.Text>
              </Col>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <MailOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>
                  nguyetan01.dev@gmail.com
                </Typography.Text>
              </Col>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <GithubOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>Github</Typography.Text>
              </Col>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <FacebookOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>Facebook</Typography.Text>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <img
              src={logo_des}
              alt="logo"
              style={{
                height: 45,
                objectFit: 'cover',
                backgroundColor: 'white',
                borderRadius: 5,
              }}
            />
            <br />
            <Typography.Text style={{ color: 'white' }}>
              Sản phẩm được thực hiện bởi Nguyễn Hoài Nguyệt An.
              <br />
              Vui lòng không sao chép dưới bất kỳ hình thức nào.
            </Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 10,
              }}
            >
              Hòm thư
              <br />
              "Lắng nghe đóng góp của bạn"
            </Typography.Text>
            <Form layout="vertical">
              <Form.Item label={<div style={{ color: 'white' }}>Họ và tên</div>} required>
                <Input placeholder="Điền họ và tên" />
              </Form.Item>
              <Form.Item label={<div style={{ color: 'white' }}>Email</div>} required>
                <Input placeholder="Điền email" />
              </Form.Item>
              <Form.Item label={<div style={{ color: 'white' }}>Số điện thoại</div>} required>
                <Input placeholder="Điền số điện thoại" />
              </Form.Item>
              <Form.Item label={<div style={{ color: 'white' }}>Nội dung</div>} required>
                <Input.TextArea placeholder="Điền nội dung" />
              </Form.Item>
              <Form.Item>
                <Button style={{ width: '100%', backgroundColor: 'transparent', color: 'white' }}>
                  Gửi về hòm thư
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
