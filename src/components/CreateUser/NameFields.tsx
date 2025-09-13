import React from 'react';
import { Form, Input, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const NameFields: React.FC = () => {
  return (
    <>
      <Col xs={24} sm={12}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            { required: true, message: 'Please enter first name!' },
            { min: 2, message: 'First name must be at least 2 characters!' },
          ]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Enter first name"
            size="large"
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            { required: true, message: 'Please enter last name!' },
            { min: 2, message: 'Last name must be at least 2 characters!' },
          ]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Enter last name"
            size="large"
          />
        </Form.Item>
      </Col>
    </>
  );
};

export default NameFields;