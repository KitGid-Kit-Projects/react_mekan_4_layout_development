import React from 'react';
import { Card, Progress } from 'antd';
import ProgressItem from './ProgressItem';

const ProjectProgressCard: React.FC = () => {
  return (
    <Card title="Project Progress" bordered={false}>
      <ProgressItem 
        title="Website Redesign" 
        percent={75} 
        status="active" 
      />
      <ProgressItem 
        title="Mobile App" 
        percent={50} 
      />
      <ProgressItem 
        title="API Development" 
        percent={90} 
        status="success" 
      />
    </Card>
  );
};

export default ProjectProgressCard;