import { Button, Col, Form, Input, message, Modal, Row } from 'antd';
import { useDispatch } from 'react-redux';

import { findStationOptions } from '../../../../libs/options';
import { useWebgisSlice } from '../../store';

type Props = {
  onCancel: () => void;
};

type FormValues = {
  firstStation: string;
  lastStation: string;
  numberStation: string;
};

const FindStation = ({ onCancel }: Props) => {
  const [form] = Form.useForm<FormValues>();
  const dispatch = useDispatch();

  const { actions } = useWebgisSlice();
  const handleFindStation = async (key: string) => {
    try {
      const values = await form.validateFields();
      dispatch(actions.findStation({ ...values, type: key }));
      onCancel();
    } catch {
      message.error('Vui lòng nhập đúng thông tin');
    }
  };
  return (
    <Modal
      open
      width={400}
      onCancel={onCancel}
      title={'Quy hoạch trạm cứu hộ'}
      footer={[
        <Row justify="space-between">
          {Object.entries(findStationOptions).map(([key, value]) => (
            <Button
              type="primary"
              style={{ backgroundColor: '#d3a971' }}
              key={key}
              onClick={() => handleFindStation(key)}
            >
              {`Tìm bằng ${value}`}
            </Button>
          ))}
        </Row>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Row justify="space-between" gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item
              label="Mã trạm nhỏ nhất"
              name="firstStation"
              rules={[{ required: true, message: 'Mã trạm từ 0-9840' }]}
            >
              <Input placeholder="Mã trạm từ 0-9840" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Mã trạm lớn nhất"
              name="lastStation"
              rules={[{ required: true, message: 'Mã trạm từ 0-9840' }]}
            >
              <Input placeholder="Mã trạm từ 0-9840" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="numberStation"
          label="Nhập số trạm cần tìm"
          rules={[{ required: true, message: 'Số lượng không quá 200' }]}
        >
          <Input placeholder="Số lượng không quá 200" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FindStation;
