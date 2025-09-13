import React from 'react';
import { Col, Form, Input } from 'antd';

const { TextArea } = Input;

const BioField: React.FC = () => {
  return (
    <Col xs={24}>
      <Form.Item
        label="Bio"
        name="bio"
        rules={[
          { max: 500, message: 'Bio cannot exceed 500 characters!' },
        ]}
      >
        <TextArea 
          rows={4} 
          placeholder="Enter a brief bio (optional)"
          showCount
          maxLength={500}
        />
      </Form.Item>
    </Col>
  );
};

export default BioField;