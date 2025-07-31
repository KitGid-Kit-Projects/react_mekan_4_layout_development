import React from 'react';
import { Typography, Row, Col, Card, Statistic, Progress, Button, Space } from 'antd';
import { 
  ArrowUpOutlined,  
  UserOutlined,
  RightOutlined
} from '@ant-design/icons';
import useHome from '@/hooks/home/useHome';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {

const {navigate,statsData}=useHome()
  return (
    <div>
      <Title level={2}>Welcome to Dashboard</Title>
      <Paragraph>
        This is a comprehensive demo of Ant Design layout components with React Router.
        The layout includes a responsive sidebar, header with user menu, and footer.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {statsData.map((stat, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card>
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

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Project Progress" bordered={false}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Website Redesign</span>
                <span>75%</span>
              </div>
              <Progress percent={75} status="active" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>Mobile App</span>
                <span>50%</span>
              </div>
              <Progress percent={50} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>API Development</span>
                <span>90%</span>
              </div>
              <Progress percent={90} status="success" />
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Quick Actions" bordered={false}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button 
                type="primary" 
                icon={<UserOutlined />} 
                onClick={() => navigate('/create-user')}
                block
              >
                Create New User
                <RightOutlined />
              </Button>
              <Button 
                icon={<UserOutlined />} 
                onClick={() => navigate('/users')}
                block
              >
                View All Users
                <RightOutlined />
              </Button>
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