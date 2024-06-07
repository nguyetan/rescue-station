import './style.css';

import {
  CodeOutlined,
  FacebookOutlined,
  FieldTimeOutlined,
  GithubOutlined,
  HddOutlined,
  HomeOutlined,
  IdcardOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Col, Form, Input, Layout, Row, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import home_bg_1 from '../../assets/home_bg_1.jpg';
import home_bg_2 from '../../assets/home_bg_2.jpg';
import home_bg_3 from '../../assets/home_bg_3.jpg';
import home_bg_4 from '../../assets/home_bg_4.jpg';
import logo from '../../assets/logo.png';
import logo_des from '../../assets/logo_des.png';
import menu_bg from '../../assets/menu_bg.jpg';
import { CustomDivider } from '../../components';
import { font } from '../../libs/theme';

const sections = {
  home: 'Trang chủ',
  info: 'Giới thiệu',
  document: 'Tài liệu',
  contact: 'Liên hệ',
};

const Home = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

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
                <Button type="primary" style={{ backgroundColor: '#d3a971' }}>
                  Thời gian hiện hành
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content>
        <div id="home" />
        <div
          style={{
            backgroundImage: `url(${home_bg_1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: window.innerHeight - 70,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography.Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: font.yesevaOne,
              fontSize: 70,
              fontWeight: 'bold',
              letterSpacing: 2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Trạm cứu hộ đường thủy
          </Typography.Text>
          <Typography.Title
            level={5}
            style={{
              color: 'white',
              textAlign: 'center',
              letterSpacing: 1.2,
              margin: '40px 0px',
              fontFamily: font.josefinSans,
            }}
          >
            Tìm kiếm các trạm cứu hộ gần bạn, hỗ trợ cứu hộ, cung cấp vật tư y tế khẩn cấp
          </Typography.Title>
          <Row gutter={24}>
            <Col>
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: '#d3a971', width: 300 }}
                onClick={() => navigate('/map')}
              >
                Dành cho Cán bộ quản lý
              </Button>
            </Col>
            <Col>
              <Button
                size="large"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  borderWidth: 2,
                  width: 300,
                }}
                onClick={() => navigate('/map')}
              >
                Dành cho công, nhân viên có nhiệm vụ
              </Button>
            </Col>
          </Row>
          <div id="info" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '40px 0px',
          }}
        >
          <Typography.Title
            level={2}
            style={{ textAlign: 'center', margin: '0px 0px', color: '#d3a971' }}
          >
            Ứng dụng Webgis Trạm cứu hộ đường thủy
          </Typography.Title>
          <Typography.Title
            level={3}
            style={{
              textAlign: 'center',
              margin: '10px 0px',
              maxWidth: '80%',
              fontFamily: font.yesevaOne,
            }}
          >
            Sử dụng mô hình P-Center và LSCP để tìm kiếm các trạm cứu hộ, đáp ứng thời gian giải cứu
            cho các tàu du lịch
          </Typography.Title>
          <CustomDivider width={100} thickness={1.5} color="#d3a971" />
        </div>
        <div
          style={{
            backgroundImage: `url(${home_bg_2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography.Text
            style={{
              fontSize: 18,
              color: 'white',
              fontFamily: font.josefinSans,
            }}
          >
            Ứng dụng được thiết kế phù hợp cho các du khách
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 45,
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              maxWidth: '80%',
              padding: '10px 0px',
              fontFamily: font.yesevaOne,
            }}
          >
            Tìm kiếm và tham khảo cách thực liên lạc phù hợp cho từng đối tượng phục vụ.
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 18,
              color: 'white',
            }}
          >
            Hãy tham gia sử dụng dịch vụ để an tâm hơn trong chuyến hành trình du lịch đường thuỷ
            của bạn!
          </Typography.Text>
          <Button
            type="primary"
            style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', marginTop: 40 }}
          >
            Du khách đăng nhập tại đây!
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '80px 0px',
          }}
        >
          <Typography.Text
            style={{
              fontSize: 18,
              color: '#d3a971',
              textAlign: 'center',
              margin: '0px 0px',
              letterSpacing: 1.5,
              fontWeight: 'bold',
              fontFamily: font.josefinSans,
            }}
          >
            Phạm vi sử dụng phần mềm
          </Typography.Text>
          <Typography.Title
            level={3}
            style={{
              textAlign: 'center',
              margin: '0px 0px 10px 0px',
              maxWidth: '80%',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: font.yesevaOne,
            }}
          >
            Các đơn vị, cá nhân sử dụng phần mềm
          </Typography.Title>
          <CustomDivider width={100} color="#d3a971" />
          <Typography.Paragraph
            style={{ maxWidth: '50%', textAlign: 'center', margin: '20px 0px' }}
          >
            Ứng dụng Webgis Trạm cứu hộ đường thuỷ được tạo ra để các Cán bộ quản lý trạm dễ dàng
            quản lý, kiểm tra và tìm kiếm các trạm cứu hộ khi có nhu cầu. Đồng thời, các cá nhân
            không thuộc các cơ quan, tổ chức vẫn truy xuất được các điểm trạm cứu hộ để nắm giữ liên
            lạc, đảm bảo an toàn trong suốt hành trình du lịch đường thuỷ.
          </Typography.Paragraph>
          <Row gutter={25} justify="center">
            <Col span={10} style={{ float: 'right' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: 150,
                    textAlign: 'center',
                    float: 'right',
                    borderBottom: '2px solid #d3a971',
                    marginBottom: 40,
                    padding: '10px 0px',
                  }}
                >
                  Các cơ quan, tổ chức
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #d3a971',
                  borderRadius: 14,
                  padding: '20px',
                }}
              >
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Cảnh sát Phòng cháy chữa cháy và Cứu nạn, cứu hộ (PCCC&CNCH)
                  </Typography.Text>
                </div>
                <Typography.Text style={{ whiteSpace: 'pre-line' }}>
                  Các tổ chức, cá nhân gọi điện thoại báo tin khẩn cấp khi có sự cố cháy, nổ, tai
                  nạn xảy ra. {'\n'}Tổng đài: 114
                </Typography.Text>
                <div style={{ width: '85%' }}>
                  <CustomDivider dashed />
                </div>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Trạm cứu hộ, hỗ trợ y tế
                  </Typography.Text>
                </div>
                <Typography.Text style={{ whiteSpace: 'pre-line' }}>
                  Các tổ chức, cá nhân gọi điện thoại khi cần hỗ trợ tranng thiết bị, vật tư y tế
                  {'\n'}
                  Tổng đài: [đang cập nhật]
                </Typography.Text>
                <div style={{ width: '85%' }}>
                  <CustomDivider dashed />
                </div>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Các doanh nghiệp du lịch
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Liên lạc đến số hotline của các doanh nghiệp mà bạn đang sử dụng dịch vụ khi có
                  thắc mắc.
                </Typography.Text>
              </div>
            </Col>
            <Col span={10}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: 170,
                    textAlign: 'center',
                    float: 'right',
                    borderBottom: '2px solid #d3a971',
                    marginBottom: 40,
                    padding: '10px 0px',
                  }}
                >
                  Tàu chở khách, du khách
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #d3a971',
                  borderRadius: 14,
                  padding: 20,
                }}
              >
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Các tàu chở khách
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Đảm bảo đã có các phương thức liên lạc khẩn cấp, phòng trường hợp có sự cố xảy ra.
                </Typography.Text>
                <div style={{ width: '85%' }}>
                  <CustomDivider dashed />
                </div>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Các tàu vận chuyển
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Đảm bảo đã có các phương thức liên lạc khẩn cấp, phòng khi có sự cố xảy ra.
                </Typography.Text>
                <div style={{ width: '85%' }}>
                  <CustomDivider dashed />
                </div>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Du khách tham gia các tuyến du lịch đường thuỷ
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Đảm bảo đã chuẩn bị đầy đủ các phương thức liên lạc, phòng khi có sự cố xảy ra.
                </Typography.Text>
              </div>
            </Col>
          </Row>
          <Typography.Text
            style={{
              textAlign: 'center',
              margin: '30px 0px',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Nhiều cách thức liên hệ khác, để chắc chắn, bạn có thể tìm thêm từ các nguồn khác.
          </Typography.Text>
          <div id="document" />
        </div>
        <div
          style={{
            backgroundImage: `url(${home_bg_3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            height: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography.Text
            style={{
              fontSize: 20,
              color: '#e9ff09',
              fontWeight: 'bold',
              fontFamily: font.josefinSans,
            }}
          >
            Mục tiêu mong đợi khi thực hiện nghiên cứu
          </Typography.Text>
          <Typography.Title
            level={3}
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
              margin: '5px 0px',
              fontFamily: font.yesevaOne,
            }}
          >
            Tổng quan về ứng dụng Webgis
          </Typography.Title>
          <CustomDivider width={100} thickness={1.5} color="#d3a971" />
          <Row justify="center" gutter={24} style={{ marginTop: 30 }}>
            <Col span={7}>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  padding: '20px',
                  border: '2px solid #d3a971',
                }}
              >
                <Typography.Text style={{ color: 'black' }}>
                  Hỗ trợ số hoá các dữ liệu trong nhiệm vụ quản lý, lưu trữ tài nguyên.
                </Typography.Text>
                <Avatar
                  size={50}
                  src={logo_des}
                  style={{ backgroundColor: 'white', margin: '20px 0px' }}
                />
                <Typography.Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                  Mục tiêu đầu tiên
                </Typography.Text>
                <Typography.Text style={{ color: '#d3a971', fontWeight: 'bold' }}>
                  Done!
                </Typography.Text>
              </div>
            </Col>
            <Col span={7}>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  padding: '20px',
                  border: '2px solid #d3a971',
                }}
              >
                <Typography.Text style={{ color: 'black' }}>
                  Tìm kiếm nhanh chóng và chính xác các điểm trạm, dễ dàng kiểm tra và hỗ trợ khi có
                  yêu cầu.
                </Typography.Text>
                <Avatar
                  size={50}
                  src={logo_des}
                  style={{ backgroundColor: 'white', margin: '20px 0px' }}
                />
                <Typography.Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                  Mục tiêu thứ hai
                </Typography.Text>
                <Typography.Text style={{ color: '#d3a971', fontWeight: 'bold' }}>
                  Done!
                </Typography.Text>
              </div>
            </Col>
            <Col span={7}>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  padding: '20px',
                  border: '2px solid #d3a971',
                }}
              >
                <Typography.Text style={{ color: 'black' }}>
                  Cán bộ quản lý trạm thực thi nhanh chóng. Các cá nhân ở mọi trình độ dễ nắm bắt
                  các thao tác.
                </Typography.Text>
                <Avatar
                  size={50}
                  src={logo_des}
                  style={{ backgroundColor: 'white', margin: '20px 0px' }}
                />
                <Typography.Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                  Mục tiêu thứ ba
                </Typography.Text>
                <Typography.Text style={{ color: '#d3a971', fontWeight: 'bold' }}>
                  Finished!
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '40px 0px',
          }}
        >
          <Typography.Text
            style={{
              fontFamily: font.josefinSans,
              fontSize: 30,
              marginBottom: 40,
            }}
          >
            Tổng hợp các tài liệu liên quan
          </Typography.Text>
          <Row
            gutter={30}
            style={{
              padding: '0px 40px',
            }}
          >
            <Col span={6}>
              <CodeOutlined style={{ fontSize: 48 }} />
              <br />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  margin: '5px 0px',
                }}
              >
                Sơ lược công nghệ sử dụng
              </div>
              <Typography.Text
                style={{
                  fontSize: 16,
                }}
              >
                Webgis sử dụng React kết hợp với Leaflet để hiển thị bản đồ. Kết nối back end python
                để tính toán dữ liệu tọa độ các điểm.
              </Typography.Text>
            </Col>
            <Col span={6}>
              <FieldTimeOutlined style={{ fontSize: 48 }} />
              <br />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  margin: '5px 0px',
                }}
              >
                Tốc độ tải trang nhanh
              </div>
              <Typography.Text
                style={{
                  fontSize: 16,
                  whiteSpace: 'pre-line',
                }}
              >
                Duy trì hiệu suất ổn định và không bị gián đoạn.{'\n'}Cải thiện trải nghiệm người
                dùng ngay cả khi có nhiều lượt truy cập cùng lúc
              </Typography.Text>
            </Col>
            <Col span={6}>
              <HddOutlined style={{ fontSize: 48 }} />
              <br />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  margin: '5px 0px',
                }}
              >
                Dữ liệu không gian
              </div>
              <Typography.Text
                style={{
                  fontSize: 16,
                  whiteSpace: 'pre-line',
                }}
              >
                Bản đồ nền địa lý được tạo lập từ Các lớp dữ liệu được thu nhận từ
              </Typography.Text>
            </Col>
            <Col span={6}>
              <IdcardOutlined style={{ fontSize: 48 }} />
              <br />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  margin: '5px 0px',
                }}
              >
                Bảo mật
              </div>
              <Typography.Text
                style={{
                  fontSize: 16,
                  whiteSpace: 'pre-line',
                }}
              >
                Tài khoản đăng nhập được cơ quan, tổ chức cung cấp riêng. Trang web không thu thập
                bất kỳ thông tin nào của người dùng.
              </Typography.Text>
            </Col>
          </Row>
          <div
            style={{
              width: '100%',
              margin: '60px 0px 20px 0px',

              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                backgroundImage: `url(${home_bg_4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 400,
                width: '30%',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 24,
                  color: 'white',
                  fontFamily: font.josefinSans,
                  marginBottom: 40,
                }}
              >
                Liên hệ với chúng tôi
              </Typography.Text>
            </div>
            <div
              style={{
                backgroundImage: `url(${home_bg_2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 400,
                width: '30%',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 24,
                  color: 'white',
                  fontFamily: font.josefinSans,
                  marginBottom: 40,
                }}
              >
                Báo cáo ứng dụng Webgis
              </Typography.Text>
            </div>
            <div
              style={{
                backgroundImage: `url(${home_bg_3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 400,
                width: '30%',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 24,
                  color: 'white',
                  fontFamily: font.josefinSans,
                  marginBottom: 40,
                }}
              >
                Power Point thuyết trình
              </Typography.Text>
            </div>
          </div>
          <Typography.Text
            style={{
              maxWidth: '60%',
              textAlign: 'center',
            }}
          >
            Các tài liệu được cung cấp ở trên nhằm tăng độ tin cậy và tính chính xác cho ứng dụng.
            Ngoài ra còn hỗ trợ cho các bạn trẻ có thêm nguồn tài liệu phục vụ quá trình học tập,
            nghiên cứu sau này.
          </Typography.Text>
          <br />
          <Typography.Text
            style={{
              maxWidth: '60%',
              textAlign: 'center',
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Nhấn vào tiêu đề. Khám phá hành trình nghiên cứu của tôi nhé!
          </Typography.Text>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Row gutter={24} style={{ padding: '40px 0px' }} justify="space-around">
            <Col span={7}>
              <img
                src={home_bg_1}
                alt="logo"
                style={{ width: '100%', height: 350, objectFit: 'cover' }}
              />
              <Typography.Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: font.josefinSans,
                }}
              >
                Demo LSCP
              </Typography.Text>
            </Col>
            <Col span={7}>
              <img
                src={home_bg_2}
                alt="logo"
                style={{ width: '100%', height: 350, objectFit: 'cover', marginTop: 20 }}
              />
              <Typography.Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: font.josefinSans,
                }}
              >
                Demo LSCP
              </Typography.Text>
            </Col>
            <Col
              span={7}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 20,
                  color: '#d3a971',
                  fontWeight: 'bold',
                  fontFamily: font.josefinSans,
                }}
              >
                Kết quả thực nghiệm
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: font.yesevaOne,
                  lineHeight: 1.2,
                }}
              >
                Bạn có thắc mắc?
              </Typography.Text>
              <CustomDivider width={50} color="#d3a971" />
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  margin: '10px 0px 20px 0px',
                  fontFamily: font.yesevaOne,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: 'grey',
                }}
              >
                Mỗi mô hình sử dụng trong ứng dụng cho ra các kết quả giống và khác nhau, tuỳ theo
                từng trường hợp. Tại bản Demo sẽ mô tả trực quan, giúp bạn dễ dàng hiểu được cách
                hoạt động và tin tưởng vào khả năng tính toán của mô hình.
              </Typography.Paragraph>
              <Typography.Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: font.josefinSans,
                }}
              >
                Nhấn vào nút demo - khám phá mô hình
              </Typography.Text>
              <div id="contact" />
            </Col>
          </Row>
          <Row
            gutter={24}
            align="middle"
            style={{
              padding: '40px 0px',
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
                  height: 350,
                }}
              >
                <Typography.Text
                  style={{
                    fontFamily: font.josefinSans,
                    margin: '20px 0px',
                  }}
                >
                  Video thuyết trình
                </Typography.Text>
                <iframe
                  width={'90%'}
                  height={240}
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
      </Layout.Content>
    </Layout>
  );
};

export default Home;
