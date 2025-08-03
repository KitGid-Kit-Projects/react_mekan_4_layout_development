import { 
    GithubOutlined,
    CodeOutlined,
    LayoutOutlined,
    MobileOutlined
  } from '@ant-design/icons'; // 🔹 Ant Design ikonları
export function useAbout(){
      // ✅ Xüsusiyyətlər siyahısı – hər biri ikonla birlikdə göstərilir
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

  // ✅ Texnologiya siyahısı — `Tag` komponenti ilə rəngli göstərilir
  const technologies = [
    { name: 'React 18', color: 'blue' },
    { name: 'TypeScript', color: 'purple' },
    { name: 'Ant Design', color: 'cyan' },
    { name: 'React Router v6', color: 'green' },
    { name: 'Responsive Design', color: 'orange' },
    { name: 'Modern CSS', color: 'red' },
  ];

  return{
    features,
    technologies
  }
}