import { Button, Form, message, Modal, Radio, Select } from 'antd';
import { useSelector } from 'react-redux';

import { supportedFiles } from '../../../../libs/options';
import { selectWebgisLayers } from '../../store/selectors';
type Props = {
  onCancel: () => void;
};

type FormValues = {
  layer: string;
  format: 'geojson' | 'csv';
};

const ExportLayer = ({ onCancel }: Props) => {
  const layers = useSelector(selectWebgisLayers);

  const [form] = Form.useForm<FormValues>();
  const layersOptions = Object.keys(layers).map((key) => ({
    label: layers[key].name,
    value: key,
  }));

  const handleExportLayer = async () => {
    try {
      const { layer, format } = await form.validateFields();
      const data = layers[layer];
      const name = `${data.name}.${format}`;
      let url;
      if (format === 'geojson') {
        const blob = new Blob([JSON.stringify(data.geoJson)], { type: 'application/json' });
        url = URL.createObjectURL(blob);
      } else {
        message.error('Chưa hỗ trợ định dạng này');
        return;
      }
      if (url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
      }
    } catch {
      /* empty */
    }
  };
  return (
    <Modal
      open
      width={400}
      onCancel={onCancel}
      title="Xuất Layer"
      footer={[
        <Button type="primary" onClick={handleExportLayer}>
          Xuất Layer
        </Button>,
      ]}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ format: 'geojson' }}
      >
        <Form.Item
          label="Layer"
          name="layer"
          rules={[{ required: true, message: 'Vui lòng chọn layer' }]}
        >
          <Select options={layersOptions} />
        </Form.Item>

        <Form.Item label="Định dạng" name="format">
          <Radio.Group>
            {Object.entries(supportedFiles).map(([key, name]) => (
              <Radio value={key}>{name}</Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExportLayer;
