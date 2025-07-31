import React from 'react';
import { Typography, Card, Row, Col, Timeline, Tag, Divider } from 'antd';

import useAbout from '@/hooks/about/useAbout';

const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  const {features,timeLine,technologies}=useAbout()


  return (
    <div>
      <Title level={2}>About This Application</Title>
      <Paragraph>
        This application demonstrates a comprehensive layout structure using Ant Design components
        with React Router for navigation. It showcases best practices for building scalable and
        maintainable React applications.
      </Paragraph>

      <Divider />

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

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="Technologies Used">
            <div style={{ marginBottom: 16 }}>
              {technologies.map((tech, index) => (
                <Tag key={index} color={tech.color} style={{ marginBottom: 8 }}>
                  {tech.name}
                </Tag>
              ))}
            </div>
            <Paragraph>
              This project leverages modern web technologies to create a robust and scalable
              application architecture. Each technology is carefully chosen to provide the
              best developer experience and user interface.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Development Timeline">
            <Timeline
              items={timeLine}
            />
          </Card>
        </Col>
      </Row>

      <Divider />

      <Card>
        <Title level={4}>Architecture Overview</Title>
        <Paragraph>
          The application follows a modular architecture pattern with clear separation of concerns:
        </Paragraph>
        <ul>
          <li><Text strong>Layout Component:</Text> Provides the main application shell with navigation</li>
          <li><Text strong>Page Components:</Text> Individual pages with specific functionality</li>
          <li><Text strong>Routing:</Text> React Router v6 with nested routes and outlet pattern</li>
          <li><Text strong>Responsive Design:</Text> Mobile-first approach with breakpoint-based layouts</li>
          <li><Text strong>Component Library:</Text> Consistent UI using Ant Design components</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;