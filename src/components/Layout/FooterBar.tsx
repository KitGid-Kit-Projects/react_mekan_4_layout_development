import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterBar: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        background: '#f5f5f5',
        borderTop: '1px solid #e8e8e8',
      }}
    >
      Ant Design Layout Demo ©2024 Created with ❤️
    </Footer>
  );
};

export default FooterBar;
