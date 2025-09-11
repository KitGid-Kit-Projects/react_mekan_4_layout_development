import React from 'react'; // Import React to enable JSX and React types (explicit for clarity across toolchains).
import { Typography, Card, Row, Col, Timeline, Tag, Divider } from 'antd'; 
// Import Ant Design components used by this page:
// - Typography: semantic text primitives (Title, Paragraph, Text).
// - Card: bordered container for grouping related UI blocks.
// - Row / Col: responsive grid for layout.
// - Timeline: vertical timeline component for milestones.
// - Tag: small labeled badges for technologies.
// - Divider: horizontal divider to separate sections visually.

import useAbout from '../hooks/useAbout.tsx'; 
// Import custom hook that provides static data used by this About page (features, timeLine, technologies).
// Keeping content in a hook centralizes text/icons and keeps the component presentational.

const { Title, Paragraph, Text } = Typography; 
// Destructure Title, Paragraph, Text for convenient use in JSX and to keep markup concise.

const About: React.FC = () => { 
  // Define the About component as a React Functional Component with no props expected.
  // Purpose: render static informational content about the application using data from useAbout hook.

  const {features,timeLine,technologies}=useAbout()
  // Call useAbout() and destructure returned datasets:
  // - features: array of feature descriptors { title, description, icon }.
  // - timeLine: array of Timeline item descriptors compatible with AntD Timeline.
  // - technologies: array of tech label objects { name, color }.
  // This keeps the component purely presentational and easy to test.

  return (
    <div>
      {/* Root container for the About page content. */}

      <Title level={2}>About This Application</Title>
      {/* Primary page heading:
          - level={2} gives H2 semantics via Ant Design Typography.
          - Visible to users and useful for accessibility and structure. */}

      <Paragraph>
        This application demonstrates a comprehensive layout structure using Ant Design components
        with React Router for navigation. It showcases best practices for building scalable and
        maintainable React applications.
      </Paragraph>
      {/* Introductory paragraph describing the app purpose and what the page documents. */}

      <Divider />
      {/* Visual separator to break the intro from the following content area. */}

      <Title level={3}>Key Features</Title>
      {/* Secondary heading for the features section. */}

      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {/* Grid row for feature cards:
            - gutter adds horizontal and vertical spacing between columns.
            - marginBottom separates this row from later content. */}

        {features.map((feature, index) => (
          // Map over features array to render one Card per feature.
          // Using index as key is acceptable for static content; prefer stable ids for dynamic lists.
          <Col xs={24} sm={12} lg={6} key={index}>
            {/* Responsive column sizing:
                - xs=24: full width on extra-small screens.
                - sm=12: half width on small screens.
                - lg=6: quarter width on large screens. */}

            <Card hoverable style={{ height: '100%' }}>
              {/* Feature card:
                  - hoverable gives subtle hover elevation.
                  - style height:100% ensures cards in the same row match heights. */}

              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                {feature.icon}
                {/* Render pre-built icon JSX from the feature object, centered above the text. */}
              </div>

              <Card.Meta
                title={feature.title}            // Feature title displayed prominently.
                description={feature.description} // Short description explaining the feature.
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]}>
        {/* New grid row for technologies and timeline columns. */}

        <Col xs={24} lg={12}>
          {/* Left column: Technologies Used card */}
          <Card title="Technologies Used">
            <div style={{ marginBottom: 16 }}>
              {technologies.map((tech, index) => (
                // Render a Tag for each technology entry.
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
            {/* Explanatory paragraph below the tag list clarifies intent and selection rationale. */}
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          {/* Right column: Development Timeline card */}
          <Card title="Development Timeline">
            <Timeline
              items={timeLine} // Ant Design Timeline can accept an items array; we pass the prepared data from the hook.
            />
            {/* Timeline displays milestones; each item includes color, dot icon, and children (JSX) describing the milestone. */}
          </Card>
        </Col>
      </Row>

      <Divider />
      {/* Divider to separate timeline/technologies from the architecture overview. */}

      <Card>
        {/* Card containing the architecture overview text and list. */}

        <Title level={4}>Architecture Overview</Title>
        {/* Section heading inside the card (H4 semantics). */}

        <Paragraph>
          The application follows a modular architecture pattern with clear separation of concerns:
        </Paragraph>
        {/* Introductory paragraph describing the list that follows. */}

        <ul>
          <li><Text strong>Layout Component:</Text> Provides the main application shell with navigation</li>
          {/* List item: Layout component responsibility summary. Text strong highlights the term. */}

          <li><Text strong>Page Components:</Text> Individual pages with specific functionality</li>
          {/* List item: Page components encapsulate per-page UI and logic. */}

          <li><Text strong>Routing:</Text> React Router v6 with nested routes and outlet pattern</li>
          {/* List item: Routing approach and rationale for nested/outlet pattern. */}

          <li><Text strong>Responsive Design:</Text> Mobile-first approach with breakpoint-based layouts</li>
          {/* List item: Responsive strategy using grid and breakpoint hooks. */}

          <li><Text strong>Component Library:</Text> Consistent UI using Ant Design components</li>
          {/* List item: UI consistency by using Ant Design. */}
        </ul>
      </Card>
    </div>
  );
};

export default About; // Default export so this component can be imported by the router or other modules.