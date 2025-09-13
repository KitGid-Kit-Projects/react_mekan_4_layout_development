import React from 'react';
import { Card, Timeline } from 'antd';
import useAbout from '@/hooks/about/useAbout';

const TimelineCard: React.FC = () => {
  const { timeLine } = useAbout();

  return (
    <Card title="Development Timeline">
      <Timeline items={timeLine} />
    </Card>
  );
};

export default TimelineCard;