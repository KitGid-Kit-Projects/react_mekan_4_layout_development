import React from 'react';
import { Button } from 'antd';
import { 
  UserOutlined, 
  RightOutlined, 
  ArrowUpOutlined 
} from '@ant-design/icons';

interface ActionButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  icon: 'user' | 'arrowUp';
  text: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  type = 'default', 
  icon, 
  text, 
  onClick 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'user':
        return <UserOutlined />;
      case 'arrowUp':
        return <ArrowUpOutlined />;
      default:
        return null;
    }
  };

  return (
    <Button 
      type={type} 
      icon={getIcon()} 
      onClick={onClick}
      block
    >
      {text}
      <RightOutlined />
    </Button>
  );
};

export default ActionButton;