/* eslint-disable no-empty */
import { DeleteOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Col, ColorPicker, Form, Input, message, Modal, Radio, Row, Upload } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import { Color } from 'antd/es/color-picker';
import { ColorFactory } from 'antd/es/color-picker/color';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import { supportedFiles } from '../../../../libs/options';
import { convertFileToGeoJson } from '../../../../libs/utils';
import { ImportSupportedType } from '../../../../types';
import { Layer } from '../../type';

type Props = BaseButtonProps & {
  onCancel: () => void;
  onUpload: (data: Layer) => void;
};

const ImportLayer = ({ onUpload, onCancel }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [importType, setImportType] = useState<ImportSupportedType>('geojson');
  const [form] = Form.useForm<{ color: Color; name: string }>();

  const handleConfirm = async () => {
    try {
      const { color, name } = await form.validateFields();
      if (!file) {
        message.error('Vui lòng chọn file');
      }
      if (file?.name.split('.').pop() !== importType) {
        message.error('File không đúng định dạng');
        return;
      }
      const geoJson = await convertFileToGeoJson(importType, file);

      onUpload({ geoJson, color: `#${color.toHex()}`, name, id: nanoid() });
    } catch {}
  };

  return (
    <Modal
      title="Thêm layer"
      open
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleConfirm}>
          Nhập
        </Button>,
      ]}
    >
      <div style={{ marginTop: 10 }}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ color: new ColorFactory('#3388FF'), type: 'polygon' }}
        >
          <Form.Item label="Định dạng">
            <Radio.Group value={importType}>
              {Object.entries(supportedFiles).map(([type, name]) => (
                <Radio
                  key={type}
                  value={type}
                  onChange={({ target }) => setImportType(target.value)}
                >
                  {name}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Row gutter={[24, 4]}>
            <Col span={12}>
              <Form.Item
                label="Tên Layer"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên layer' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Chọn màu" name="color">
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      {!file ? (
        <Upload.Dragger
          name="file"
          multiple={false}
          accept={`.${importType}`}
          beforeUpload={(info) => setFile(info as File)}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-hint">Nhấn hoặc thả file vào vị trí này để tải lên</p>
        </Upload.Dragger>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {file.name}
          <DeleteOutlined style={{ color: 'red' }} onClick={() => setFile(null)} />
        </div>
      )}
    </Modal>
  );
};

export default ImportLayer;
