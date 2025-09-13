import React from 'react';
import { Form, Input, Col } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const ContactFields: React.FC = () => {
  return (
    <>
      <Col xs={24} sm={12}>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please enter email address!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input 
            prefix={<MailOutlined />} 
            placeholder="Enter email address"
            size="large"
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: 'Please enter phone number!' },
            { pattern: /^\+?[\d\s\-\(\)]+$/, message: 'Please enter a valid phone number!' },
          ]}
        >
          <Input 
            prefix={<PhoneOutlined />} 
            placeholder="+1 (555) 123-4567"
            size="large"
          />
        </Form.Item>
      </Col>
    </>
  );
};

export default ContactFields;