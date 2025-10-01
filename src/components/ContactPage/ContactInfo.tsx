import { Card, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Email',
      content: 'info@eduapp.com',
    },
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#f5222d' }} />,
      title: 'Address',
      content: '123 Education St, Learning City, LC 12345',
    },
  ];

  return (
    <Card title="Get in Touch">
      <div style={{ marginBottom: '24px' }}>
        {contactInfo.map((info, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '16px',
            padding: '12px',
            border: '1px solid #f0f0f0',
            borderRadius: '8px'
          }}>
            <div style={{ marginRight: '16px' }}>{info.icon}</div>
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                {info.title}
              </div>
              <div style={{ color: '#666' }}>{info.content}</div>
            </div>
          </div>
        ))}
      </div>

      <Title level={4}>About This Contact Page</Title>
      <Paragraph>
        This contact page demonstrates:
      </Paragraph>
      <ul>
        <li>Ant Design Form components and validation</li>
        <li>Form handling with onFinish callback</li>
        <li>Message notifications using Ant Design's message API</li>
        <li>Responsive layout with Row and Col components</li>
        <li>Icon integration from Ant Design</li>
      </ul>
    </Card>
  );
};

export default ContactInfo;