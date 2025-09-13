import React from 'react';
import { Row, Col, Card } from 'antd';
import StatCard from './StatCard';

interface StatData {
  title: string;
  value: number;
  precision?: number;
  valueStyle?: React.CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

interface StatsSectionProps {
  statsData: StatData[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ statsData }) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {statsData.map((stat, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <StatCard stat={stat} />
        </Col>
      ))}
    </Row>
  );
};

export default StatsSection;