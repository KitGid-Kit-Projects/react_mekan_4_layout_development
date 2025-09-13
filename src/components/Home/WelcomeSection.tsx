import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const WelcomeSection: React.FC = () => {
  return (
    <>
      <Title level={2}>Welcome to Dashboard</Title>
      <Paragraph>
        This is a comprehensive demo of Ant Design layout components with React Router.
        The layout includes a responsive sidebar, header with user menu, and footer.
      </Paragraph>
    </>
  );
};

export default WelcomeSection;