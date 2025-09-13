import React from 'react';
import { Progress } from 'antd';

interface ProgressItemProps {
  title: string;
  percent: number;
  status?: 'active' | 'success' | 'exception' | 'normal';
}

const ProgressItem: React.FC<ProgressItemProps> = ({ 
  title, 
  percent, 
  status = 'normal' 
}) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span>{title}</span>
        <span>{percent}%</span>
      </div>
      <Progress percent={percent} status={status} />
    </div>
  );
};

export default ProgressItem;