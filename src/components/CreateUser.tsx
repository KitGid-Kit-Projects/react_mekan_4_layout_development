// Line-by-line detailed annotations for CreateUser.tsx.
// Each line or small logical group includes a short comment explaining its purpose, types, and runtime behavior.

import React from 'react'; 
// Import React to enable JSX and access React types (explicit for clarity across toolchains).

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
// Import Ant Design components used in this form:
// - Typography: for Title/Paragraph text.
// - Form: controlled form instance with validation.
// - Input / TextArea: text inputs.
// - Button: actionable buttons (submit/reset, upload trigger).
// - Card: visual container for the form.
// - Select: dropdowns for role/department.
// - Switch: boolean toggle for account status.
// - DatePicker: date selector for join date.
// - Upload: file upload wrapper for profile picture.
// - Row/Col: grid layout for responsive form arrangement.
// - Space: small layout helper for spacing inline items.

import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  SaveOutlined,
  ClearOutlined,
  UploadOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
// Import only the icon components used in this file for visual affordances:
// - UserOutlined, MailOutlined, PhoneOutlined: input prefixes.
// - SaveOutlined, ClearOutlined: action icons for buttons.
// - UploadOutlined: icon inside upload button.
// - ArrowLeftOutlined: back navigation button.

import useCreateUser from '../hooks/useCreateUser.tsx';
// Import custom hook that encapsulates form logic, validation handling, upload props, and navigation helpers.
// The hook returns the AntD form instance and handlers used below.

const { Title, Paragraph } = Typography;
// Destructure Title and Paragraph from Typography to use semantic headings and paragraphs.

const { Option } = Select;
// Destructure Option from Select to define dropdown options concisely.

const { TextArea } = Input;
// Destructure TextArea from Input for multi-line bio input.

const CreateUser: React.FC = () => {
// Define the CreateUser component as a React Functional Component with no props expected.
// This component renders a form for creating a new user and delegates logic to useCreateUser hook.

  const {
    navigate,
    form,
    uploadProps,
    onFinish,
    onFinishFailed,
    onReset
  } = useCreateUser();
  // Destructure values returned by the custom hook:
  // - navigate: function to programmatically navigate (react-router).
  // - form: Ant Design Form instance used for programmatic control (reset/validate).
  // - uploadProps: object to spread into Upload component (controls beforeUpload, onChange, etc).
  // - onFinish: handler called when form validation succeeds and submit occurs.
  // - onFinishFailed: handler called when form validation fails.
  // - onReset: convenience function to reset the form fields.

  return (
    <div>
      {/* Top action row with back button */}
      <div style={{ marginBottom: 24 }}>
        <Space>
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/users')}
          >
            Back to Users
          </Button>
          {/* Button with arrow icon that navigates back to the users list using navigate('/users').
              Using navigate keeps navigation client-side (no full page reload). */}
        </Space>
      </div>

      <Title level={2}>Create New User</Title>
      {/* Page heading using Ant Design typography (semantic H2). */}

      <Paragraph>
        Fill in the form below to create a new user account. All fields marked with * are required.
      </Paragraph>
      {/* Introductory paragraph explaining form intent and required fields. */}

      <Card>
        {/* Card provides a white, padded surface to contain the form for visual separation. */}

        <Form
          form={form}                        // controlled AntD form instance returned by hook
          layout="vertical"                  // vertical label layout (label above control)
          onFinish={onFinish}                // called when validation passes and submit triggered
          onFinishFailed={onFinishFailed}    // called when validation fails on submit
          initialValues={{                   // initial default values for form fields
            status: true,
            role: 'viewer',
            department: 'general',
          }}
        >
          <Row gutter={[16, 16]}>
            {/* Use responsive grid: gutter provides spacing between columns/rows. */}

            <Col xs={24} sm={12}>
              <Form.Item
                label="First Name"            // visible label above the input
                name="firstName"              // form field key used in values/validation
                rules={[                      // validation rules for this field
                  { required: true, message: 'Please enter first name!' },
                  { min: 2, message: 'First name must be at least 2 characters!' },
                ]}
              >
                <Input 
                  prefix={<UserOutlined />}  // input prefix icon
                  placeholder="Enter first name"
                  size="large"
                />
              </Form.Item>
              {/* First name input: required, min length enforced by AntD Form. */}
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
              {/* Last name input: mirrors first name validation. */}
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
              {/* Email input: required and uses built-in 'email' type validation for format. */}
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
              {/* Phone input: required and validated against a simple regex that permits international formats, spaces, dashes, parentheses. */}
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
              {/* Role select: required; options represent application roles. */}
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
              {/* Department select: required; provides several organizational options. */}
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
              {/* Join date: required DatePicker that fills full column width. Value type depends on DatePicker config (Moment/Date). */}
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
              {/* Status switch: uses valuePropName="checked" so boolean maps to Switch checked state.
                  Default initial value defined in initialValues above. */}
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
              {/* Upload control for avatar:
                  - uploadProps comes from hook and typically prevents automatic upload (beforeUpload returning false),
                    validates file type/size, and provides onChange to capture selected file.
                  - Upload is wrapped around a Button that triggers file selection. */}
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
              {/* Multi-line bio: optional, but limited to 500 characters; showCount gives a character counter. */}
            </Col>
          </Row>

          <div style={{ 
            marginTop: 24, 
            display: 'flex', 
            gap: 16, 
            justifyContent: 'flex-end',
            flexWrap: 'wrap'
          }}>
            {/* Action buttons container:
                - spaced horizontally with gap,
                - right-aligned using justifyContent,
                - wraps on narrow screens for responsiveness. */}

            <Button 
              icon={<ClearOutlined />}
              onClick={onReset}
              size="large"
            >
              Reset Form
            </Button>
            {/* Reset button: calls onReset from hook which resets the form and optionally shows feedback. */}

            <Button 
              type="primary" 
              htmlType="submit"
              icon={<SaveOutlined />}
              size="large"
            >
              Create User
            </Button>
            {/* Submit button:
                - type="primary" gives visual emphasis.
                - htmlType="submit" triggers Form's onFinish validation + submit flow.
                - onFinish (hook) will handle the validated values (e.g., call API then navigate). */}
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default CreateUser;
// Default export so router or other modules can import and render