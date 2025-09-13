import React from 'react';
import { Row, Col, Card, Tag, Typography } from 'antd';
import useAbout from '@/hooks/about/useAbout';
import TechnologiesCard from './TechnologiesCard';
import TimelineCard from './TimelineCard';

const TechAndTimelineSection: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={12}>
        <TechnologiesCard />
      </Col>
      <Col xs={24} lg={12}>
        <TimelineCard />
      </Col>
    </Row>
  );
};

export default TechAndTimelineSection;