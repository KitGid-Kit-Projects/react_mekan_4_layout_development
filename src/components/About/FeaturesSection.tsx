import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import useAbout from '@/hooks/about/useAbout';

const { Title } = Typography;

const FeaturesSection: React.FC = () => {
  const { features } = useAbout();

  return (
    <>
      <Title level={3}>Key Features</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card hoverable style={{ height: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                {feature.icon}
              </div>
              <Card.Meta
                title={feature.title}
                description={feature.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturesSection;