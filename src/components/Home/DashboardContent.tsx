import React from 'react';
import { Row, Col } from 'antd';
import ProjectProgressCard from './ProjectProgressCard';
import QuickActionsCard from './QuickActionsCard';

interface DashboardContentProps {
  navigate: (path: string) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ navigate }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={12}>
        <ProjectProgressCard />
      </Col>
      <Col xs={24} lg={12}>
        <QuickActionsCard navigate={navigate} />
      </Col>
    </Row>
  );
};

export default DashboardContent;