import React from 'react';
import { Form, DatePicker, Switch, Col } from 'antd';

const DateStatusFields: React.FC = () => {
  return (
    <>
      <Col xs={24} sm={12}>
        <Form.Item
          label="Join Date"
          name="joinDate"
          rules={[{ required: true, message: 'Please select join date!' }]}
        >
          <DatePicker 
            style={{ width: '100%' }} 
            placeholder="Select join date"
            size="large"
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}>
        <Form.Item
          label="Account Status"
          name="status"
          valuePropName="checked"
        >
          <div style={{ paddingTop: 8 }}>
            <Switch 
              checkedChildren="Active" 
              unCheckedChildren="Inactive"
              size="default"
            />
          </div>
        </Form.Item>
      </Col>
    </>
  );
};

export default DateStatusFields;