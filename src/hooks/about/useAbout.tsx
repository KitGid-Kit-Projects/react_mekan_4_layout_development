import { 
    GithubOutlined,
    CodeOutlined,
    LayoutOutlined,
    MobileOutlined,
    CheckCircleOutlined, 
    SyncOutlined, 
    ClockCircleOutlined
  } from '@ant-design/icons';
import { Typography } from 'antd';
  const {Text } = Typography;
export default function useAbout() {

    
    const features = [
        {
          title: 'Responsive Layout',
          description: 'Mobile-first design that adapts to all screen sizes',
          icon: <MobileOutlined style={{ fontSize: 24, color: '#1890ff' }} />,
        },
        {
          title: 'Component Structure',
          description: 'Modular and reusable component architecture',
          icon: <LayoutOutlined style={{ fontSize: 24, color: '#52c41a' }} />,
        },
        {
          title: 'Modern React',
          description: 'Built with React 18, TypeScript, and functional components',
          icon: <CodeOutlined style={{ fontSize: 24, color: '#722ed1' }} />,
        },
        {
          title: 'Ant Design',
          description: 'Enterprise-class UI design language and components',
          icon: <GithubOutlined style={{ fontSize: 24, color: '#fa541c' }} />,
        },
      ];
    
      const technologies = [
        { name: 'React 18', color: 'blue' },
        { name: 'TypeScript', color: 'purple' },
        { name: 'Ant Design', color: 'cyan' },
        { name: 'React Router v6', color: 'green' },
        { name: 'Responsive Design', color: 'orange' },
        { name: 'Modern CSS', color: 'red' },
      ];

      const timeLine=[
        {
          color: 'green',
          dot: <CheckCircleOutlined />,
          children: (
            <div>
              <Text strong>Project Setup</Text>
              <br />
              <Text type="secondary">Initialize React app with TypeScript</Text>
            </div>
          ),
        },
        {
          color: 'green',
          dot: <CheckCircleOutlined />,
          children: (
            <div>
              <Text strong>Layout Structure</Text>
              <br />
              <Text type="secondary">Implement responsive layout with Ant Design</Text>
            </div>
          ),
        },
        {
          color: 'blue',
          dot: <SyncOutlined spin />,
          children: (
            <div>
              <Text strong>Component Development</Text>
              <br />
              <Text type="secondary">Building reusable components</Text>
            </div>
          ),
        },
        {
          color: 'gray',
          dot: <ClockCircleOutlined />,
          children: (
            <div>
              <Text strong>Testing & Optimization</Text>
              <br />
              <Text type="secondary">Performance optimization and testing</Text>
            </div>
          ),
        },
      ];

  
    
  return {features,timeLine,technologies}
}
