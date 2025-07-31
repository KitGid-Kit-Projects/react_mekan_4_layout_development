import React from 'react';
import { 
  Typography, 
  Form, 
  Input, 
  Button, 
  Card, 
  Select, 
  Switch, 
  DatePicker, 
  Upload,
  Row,
  Col,
  Space
} from 'antd';
import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  SaveOutlined,
  ClearOutlined,
  UploadOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import useCreateUser from '@/hooks/createUser/useCreateUser';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;


const CreateUser: React.FC = () => {
const {
  navigate,
  form,
  uploadProps,
  onFinish,
  onFinishFailed,
  onReset
}=useCreateUser()
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Space>
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/users')}
          >
            Back to Users
          </Button>
        </Space>
      </div>

      <Title level={2}>Create New User</Title>
      <Paragraph>
        Fill in the form below to create a new user account. All fields marked with * are required.
      </Paragraph>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            status: true,
            role: 'viewer',
            department: 'general',
          }}
        >
          <Row gutter={[16, 16]}>
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
          </Row>

          <div style={{ 
            marginTop: 24, 
            display: 'flex', 
            gap: 16, 
            justifyContent: 'flex-end',
            flexWrap: 'wrap'
          }}>
            <Button 
              icon={<ClearOutlined />}
              onClick={onReset}
              size="large"
            >
              Reset Form
            </Button>
            <Button 
              type="primary" 
              htmlType="submit"
              icon={<SaveOutlined />}
              size="large"
            >
              Create User
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default CreateUser;