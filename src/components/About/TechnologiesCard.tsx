import React from 'react';
import { Card, Tag, Typography } from 'antd';
import useAbout from '@/hooks/about/useAbout';

const { Paragraph } = Typography;

const TechnologiesCard: React.FC = () => {
  const { technologies } = useAbout();

  return (
    <Card title="Technologies Used">
      <div style={{ marginBottom: 16 }}>
        {technologies.map((tech, index) => (
          <Tag key={index} color={tech.color} style={{ marginBottom: 8 }}>
            {tech.name}
          </Tag>
        ))}
      </div>
      <Paragraph>
        This project leverages modern web technologies to create a robust and scalable
        application architecture. Each technology is carefully chosen to provide the
        best developer experience and user interface.
      </Paragraph>
    </Card>
  );
};

export default TechnologiesCard;