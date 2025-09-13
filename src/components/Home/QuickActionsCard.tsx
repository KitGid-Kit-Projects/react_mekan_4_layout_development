import React from 'react';
import { Card, Space } from 'antd';
import ActionButton from './ActionButton';

interface QuickActionsCardProps {
  navigate: (path: string) => void;
}

const QuickActionsCard: React.FC<QuickActionsCardProps> = ({ navigate }) => {
  return (
    <Card title="Quick Actions" bordered={false}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <ActionButton 
          type="primary"
          icon="user"
          text="Create New User"
          onClick={() => navigate('/create-user')}
        />
        <ActionButton 
          icon="user"
          text="View All Users"
          onClick={() => navigate('/users')}
        />
        <ActionButton 
          icon="arrowUp"
          text="Learn More About This App"
          onClick={() => navigate('/about')}
        />
      </Space>
    </Card>
  );
};

export default QuickActionsCard;