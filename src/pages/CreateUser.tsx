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
  message,
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
import { useNavigate } from 'react-router-dom';
import type { UploadProps } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  status: boolean;
  joinDate: any;
  department: string;
  bio: string;
  avatar: any;
}

const CreateUser: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<UserFormData>();

  const uploadProps: UploadProps = {
    name: 'avatar',
    listType: 'picture',
    maxCount: 1,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return false; // Prevent auto upload
    },
    onChange: (info) => {
      console.log('Upload info:', info);
    },
  };

  const onFinish = (values: UserFormData) => {
    console.log('Form values:', values);
    message.success('User created successfully!');
    
    // Simulate API call delay
    setTimeout(() => {
      navigate('/users');
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Please check the form for errors');
  };

  const onReset = () => {
    form.resetFields();
    message.info('Form has been reset');
  };

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