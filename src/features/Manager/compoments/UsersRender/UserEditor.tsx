import { Button, Checkbox, Form, Input, message, Modal } from 'antd';

import { User } from '../../../user/type';

type Props = {
  user?: User;
  onCancel: () => void;
};

export const UserEditor = ({ user, onCancel }: Props) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title={user?.id ? 'Sủa thông tin' : 'Thêm user'}
      open={true}
      onOk={() => {}}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => message.info('Tính năng đang phát triển')}
        >
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" initialValues={user}>
        <Form.Item label="Tên" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input disabled={!!user?.email} />
        </Form.Item>
        <Form.Item label="Role" name="isAdmin" valuePropName="checked">
          <Checkbox>Admin</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};
