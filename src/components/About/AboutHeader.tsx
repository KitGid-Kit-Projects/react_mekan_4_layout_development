import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutHeader: React.FC = () => {
  return (
    <>
      <Title level={2}>About This Application</Title>
      <Paragraph>
        This application demonstrates a comprehensive layout structure using Ant Design components
        with React Router for navigation. It showcases best practices for building scalable and
        maintainable React applications.
      </Paragraph>
    </>
  );
};

export default AboutHeader;