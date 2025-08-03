import { 
    GithubOutlined,
    CodeOutlined,
    LayoutOutlined,
    MobileOutlined
  } from '@ant-design/icons'; // Ant Design icons

export function useAbout(){
    const features = [
        {
          title: 'Responsive Layout',
          description: 'Mobile-first design that adapts to all screen sizes',
          icon: <MobileOutlined style={{ fontSize: 24, color: '#1890ff' }} />, // Mobile phone icon
        },
        {
          title: 'Component Structure',
          description: 'Modular and reusable component architecture',
          icon: <LayoutOutlined style={{ fontSize: 24, color: '#52c41a' }} />, // Layout icon
        },
        {
          title: 'Modern React',
          description: 'Built with React 18, TypeScript, and functional components',
          icon: <CodeOutlined style={{ fontSize: 24, color: '#722ed1' }} />, // Code icon
        },
        {
          title: 'Ant Design',
          description: 'Enterprise-class UI design language and components',
          icon: <GithubOutlined style={{ fontSize: 24, color: '#fa541c' }} />, // GitHub icon representing Ant Design
        },
      ];
    
      // Technologies used in the project with color tags for visual emphasis
      const technologies = [
        { name: 'React 18', color: 'blue' },
        { name: 'TypeScript', color: 'purple' },
        { name: 'Ant Design', color: 'cyan' },
        { name: 'React Router v6', color: 'green' },
        { name: 'Responsive Design', color: 'orange' },
        { name: 'Modern CSS', color: 'red' },
      ];
    
      return {
        features,
        technologies,
      };
}