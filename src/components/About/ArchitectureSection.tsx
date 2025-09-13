import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const ArchitectureSection: React.FC = () => {
  return (
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
  );
};

export default ArchitectureSection;