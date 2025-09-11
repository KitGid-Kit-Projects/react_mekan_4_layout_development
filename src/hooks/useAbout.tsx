// ...existing code...
// Detailed, line-by-line annotated version of useAbout hook.
// This file exports a custom hook that provides static data used by an About page:
// - features: list of product/UX features with icons
// - technologies: small palette of tech names and presentation colors
// - timeLine: timeline entries describing project milestones (Ant Design Timeline format)

import { 
  GithubOutlined,
  CodeOutlined,
  LayoutOutlined,
  MobileOutlined,
  CheckCircleOutlined, 
  SyncOutlined, 
  ClockCircleOutlined
} from '@ant-design/icons';
// Import only the Ant Design icons used in this file.
// Each named import is a JSX-ready icon component that can be rendered inline.
// Using specific imports keeps the bundle smaller than importing everything.

import { Typography } from 'antd';
// Import Ant Design's Typography component collection to access text primitives
// such as Text, Title, Paragraph which provide consistent styling.

const { Text } = Typography;
// Destructure Text from Typography for convenient usage when creating timeline children.
// Text provides props like 'type' and 'strong' to style inline text semantically.

export default function useAbout() {
  // Default-exported custom hook named useAbout.
  // Purpose: provide read-only UI data structures to the About page component.
  // This keeps the About component presentational while centralizing content here.

  const features = [
    {
      title: 'Responsive Layout', // Short heading used in feature card/title
      description: 'Mobile-first design that adapts to all screen sizes', // Supporting text
      icon: <MobileOutlined style={{ fontSize: 24, color: '#1890ff' }} />, // Icon JSX with inline sizing + brand color
    },
    {
      title: 'Component Structure', // Feature name describing architecture
      description: 'Modular and reusable component architecture', // Why it matters
      icon: <LayoutOutlined style={{ fontSize: 24, color: '#52c41a' }} />, // Green layout icon for structure
    },
    {
      title: 'Modern React', // Emphasizes tech choices
      description: 'Built with React 18, TypeScript, and functional components', // Tooling and patterns
      icon: <CodeOutlined style={{ fontSize: 24, color: '#722ed1' }} />, // Purple code icon for developer tooling
    },
    {
      title: 'Ant Design', // UI library highlight
      description: 'Enterprise-class UI design language and components', // Benefit statement
      icon: <GithubOutlined style={{ fontSize: 24, color: '#fa541c' }} />, // GitHub icon used as a visual affordance here (colorful)
    },
  ];
  // features: array of objects intended to be mapped to a UI list/cards.
  // Each object is intentionally lightweight: title, description, and pre-rendered icon JSX.
  // Consumer component responsibilities:
  // - map over features
  // - render title/description with accessible markup
  // - avoid modifying icon prop (already a JSX element)

  const technologies = [
    { name: 'React 18', color: 'blue' },        // Technology name + presentation color key
    { name: 'TypeScript', color: 'purple' },   // Consumer may render as Tag/Badge with this color
    { name: 'Ant Design', color: 'cyan' },
    { name: 'React Router v6', color: 'green' },
    { name: 'Responsive Design', color: 'orange' },
    { name: 'Modern CSS', color: 'red' },
  ];
  // technologies: simple array of label objects.
  // Designed to be used in a "tech stack" display (badges, tags, or chips).
  // Colors are semantic hints for the UI and not strict CSS values — the consumer may map them.

  const timeLine = [
    {
      color: 'green',                     // Color used by Ant Design Timeline item
      dot: <CheckCircleOutlined />,       // Custom dot: a check icon indicating completion
      children: (
        <div>
          <Text strong>Project Setup</Text> {/* Strong text for the milestone title */}
          <br />
          <Text type="secondary">Initialize React app with TypeScript</Text> {/* Supporting description */}
        </div>
      ),
    },
    {
      color: 'green',                     // Another completed step
      dot: <CheckCircleOutlined />,       // Reuse check icon
      children: (
        <div>
          <Text strong>Layout Structure</Text>
          <br />
          <Text type="secondary">Implement responsive layout with Ant Design</Text>
        </div>
      ),
    },
    {
      color: 'blue',                      // In-progress or active color
      dot: <SyncOutlined spin />,         // Spinning sync icon to indicate active work
      children: (
        <div>
          <Text strong>Component Development</Text>
          <br />
          <Text type="secondary">Building reusable components</Text>
        </div>
      ),
    },
    {
      color: 'gray',                      // Upcoming/neutral step
      dot: <ClockCircleOutlined />,       // Clock icon indicating scheduled or pending
      children: (
        <div>
          <Text strong>Testing & Optimization</Text>
          <br />
          <Text type="secondary">Performance optimization and testing</Text>
        </div>
      ),
    },
  ];
  // timeLine: structured to match Ant Design Timeline item props.
  // Each object contains:
  // - color: color string for the timeline dot
  // - dot: optional custom JSX node for the dot area (icon components allowed)
  // - children: JSX content rendered as the body of the timeline item
  // Consumers should render: <Timeline items={timeLine} /> or map manually.

  // Return an object with the prepared datasets so a component can destructure and render them.
  return { features, timeLine, technologies }
}