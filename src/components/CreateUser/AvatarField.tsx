import React from 'react';
import { Form, Upload, Button, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import useCreateUser from '@/hooks/createUser/useCreateUser';

const AvatarField: React.FC = () => {
  const { uploadProps } = useCreateUser();

  return (
    <Col xs={24}>
      <Form.Item
        label="Profile Picture"
        name="avatar"
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />} size="large">
            Click to Upload
          </Button>
        </Upload>
      </Form.Item>
    </Col>
  );
};

export default AvatarField;