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
      title={'Tìm trạm cứu hộ'}
      footer={[
        <Row justify="space-between">
          {Object.entries(findStationOptions).map(([key, value]) => (
            <Button type="primary" key={key} onClick={() => handleFindStation(key)}>
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
              label="Nhập mã trạm đầu"
              name="firstStation"
              rules={[{ required: true, message: 'Vui lòng nhập mã trạm đầu' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Nhập mã trạm cuối"
              name="lastStation"
              rules={[{ required: true, message: 'Vui lòng nhập mã trạm đầu' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="numberStation"
          label="Nhập số trạm cần tìm"
          rules={[{ required: true, message: 'Vui lòng nhập mã trạm đầu' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FindStation;
