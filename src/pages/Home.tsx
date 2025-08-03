import React from 'react';

// ✅ Import Ant Design UI components
import { Typography, Row, Col, Card, Statistic, Progress, Button, Space } from 'antd';

// ✅ Import Ant Design icons
import { 
  ArrowUpOutlined, 
  UserOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useHome } from '@/hooks/home/useHome';

// ✅ Destructure Typography components
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {

const  {
  navigate,
  statsData
}=useHome()
  return (
    <div>
      {/* ✅ Dashboard Header */}
      <Title level={2}>Welcome to Dashboard</Title>

      {/* ✅ Short introduction paragraph */}
      <Paragraph>
        This is a comprehensive demo of Ant Design layout components with React Router.
        The layout includes a responsive sidebar, header with user menu, and footer.
      </Paragraph>

      {/* ✅ Statistics Section */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {statsData.map((stat, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            {/* ✅ Card component to hold each statistic */}
            <Card>
              {/* ✅ AntD Statistic component */}
              <Statistic
                title={stat.title}
                value={stat.value}
                precision={stat.precision}
                valueStyle={stat.valueStyle}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* ✅ Two-column layout: Progress on the left, Quick Actions on the right */}
      <Row gutter={[16, 16]}>
        
        {/* ✅ Project Progress section with progress bars */}
        <Col xs={24} lg={12}>
          <Card title="Project Progress" bordered={false}>
            {/* Project 1: Website Redesign */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Website Redesign</span>
                <span>75%</span>
              </div>
              {/* ✅ Progress bar with "active" status */}
              <Progress percent={75} status="active" />
            </div>

            {/* Project 2: Mobile App */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Mobile App</span>
                <span>50%</span>
              </div>
              <Progress percent={50} />
            </div>

            {/* Project 3: API Development */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>API Development</span>
                <span>90%</span>
              </div>
              {/* ✅ Success style for completed progress */}
              <Progress percent={90} status="success" />
            </div>
          </Card>
        </Col>

        {/* ✅ Quick Action buttons to navigate to other pages */}
        <Col xs={24} lg={12}>
          <Card title="Quick Actions" bordered={false}>
            {/* ✅ Space ensures vertical spacing between buttons */}
            <Space direction="vertical" style={{ width: '100%' }}>
              
              {/* ✅ Create New User button */}
              <Button 
                type="primary" 
                icon={<UserOutlined />}
                onClick={() => navigate('/create-user')}
                block
              >
                Create New User
                <RightOutlined />
              </Button>

              {/* ✅ View All Users button */}
              <Button 
                icon={<UserOutlined />} 
                onClick={() => navigate('/users')}
                block
              >
                View All Users
                <RightOutlined />
              </Button>

              {/* ✅ Learn more about the app */}
              <Button 
                icon={<ArrowUpOutlined />} 
                onClick={() => navigate('/about')}
                block
              >
                Learn More About This App
                <RightOutlined />
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;