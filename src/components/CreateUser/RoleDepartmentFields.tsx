import React from 'react';
import { Form, Select, Col } from 'antd';

const { Option } = Select;

const RoleDepartmentFields: React.FC = () => {
  return (
    <>
      <Col xs={24} sm={12}>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          <Select placeholder="Select user role" size="large">
            <Option value="admin">Administrator</Option>
            <Option value="editor">Editor</Option>
            <Option value="viewer">Viewer</Option>
            <Option value="manager">Manager</Option>
          </Select>
        </Form.Item>
      </Col>

      <Col xs={24} sm={12}>
        <Form.Item
          label="Department"
          name="department"
          rules={[{ required: true, message: 'Please select a department!' }]}
        >
          <Select placeholder="Select department" size="large">
            <Option value="engineering">Engineering</Option>
            <Option value="marketing">Marketing</Option>
            <Option value="sales">Sales</Option>
            <Option value="hr">Human Resources</Option>
            <Option value="finance">Finance</Option>
            <Option value="general">General</Option>
          </Select>
        </Form.Item>
      </Col>
    </>
  );
};

export default RoleDepartmentFields;