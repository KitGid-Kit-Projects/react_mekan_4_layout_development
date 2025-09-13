import React from 'react';
import { Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface BackButtonProps {
  onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  return (
    <div style={{ marginBottom: 24 }}>
      <Space>
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={onBack}
        >
          Back to Users
        </Button>
      </Space>
    </div>
  );
};

export default BackButton;