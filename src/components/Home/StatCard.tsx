import React from 'react';
import { Card, Statistic } from 'antd';

interface StatData {
  title: string;
  value: number;
  precision?: number;
  valueStyle?: React.CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

interface StatCardProps {
  stat: StatData;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card>
      <Statistic
        title={stat.title}
        value={stat.value}
        precision={stat.precision}
        valueStyle={stat.valueStyle}
        prefix={stat.prefix}
        suffix={stat.suffix}
      />
    </Card>
  );
};

export default StatCard;