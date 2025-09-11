// Complete file with explicit, line-by-line comments describing purpose, types, and runtime behavior.

import React, { useState } from 'react'; // Import React (JSX) and useState for local component state management.
import { Outlet, useNavigate, useLocation } from 'react-router-dom'; // Router helpers: Outlet for nested routes, useNavigate for programmatic navigation, useLocation to read current path.

import {
  Layout as AntLayout,
  Menu,
  Button,
  Typography,
  Avatar,
  Dropdown,
  Space,
  Grid
} from 'antd'; // Import Ant Design layout and UI primitives used to build the application shell.

import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  SettingOutlined
} from '@ant-design/icons'; // Import the specific icons used across the layout (keeps bundle small).

// Destructure Ant Design Layout subcomponents for clearer usage in JSX.
const { Header, Sider, Footer, Content } = AntLayout;

// Destructure Title from Typography to render the app/section title.
const { Title } = Typography;

// Extract useBreakpoint from AntD Grid for responsive behavior detection.
const { useBreakpoint } = Grid;

const AppLayout: React.FC = () => { // Define AppLayout component as a React Functional Component.
  const [collapsed, setCollapsed] = useState(false); // Local state: whether the sidebar is collapsed (narrow) or expanded.

  const navigate = useNavigate(); // Hook to perform programmatic navigation (e.g., on menu clicks).
  const location = useLocation(); // Hook to read current location (used to highlight active menu item).
  const screens = useBreakpoint(); // Responsive breakpoint map: e.g., { xs:true, sm:true, md:false, ... }.

  // Side-effect: automatically collapse the sidebar on small screens and expand on medium+ screens.
  React.useEffect(() => {
    if (!screens.md) { // If the viewport is smaller than the medium breakpoint...
      setCollapsed(true); // ...collapse the sidebar to save horizontal space.
    } else { // If medium or larger...
      setCollapsed(false); // ...ensure the sidebar is expanded for easier navigation.
    }
  }, [screens.md]); // Re-run when the md breakpoint boolean changes.

  // Define sidebar navigation items. Keys correspond to route paths to allow direct navigation.
  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Home' },
    { key: '/about', icon: <InfoCircleOutlined />, label: 'About' },
    { key: '/users', icon: <UserOutlined />, label: 'Users' },
    { key: '/create-user', icon: <PlusOutlined />, label: 'Create User' },
  ];

  // Define the items for the user dropdown menu in the header (profile/settings/logout).
  const userMenuItems = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
    { type: 'divider' as const }, // Visual divider within the dropdown menu.
    { key: 'logout', icon: <LogoutOutlined />, label: 'Logout', danger: true }, // Dangerous action style for logout.
  ];

  // Handler for clicks on sidebar menu items; navigates to the menu key (which is a route path).
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key); // Imperatively navigate to the selected route.
  };

  // Handler for user dropdown menu actions (profile/settings/logout).
  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') { // If the user chose to logout...
      console.log('Logging out...'); // Placeholder: replace with real auth logout logic.
      // e.g., clear auth tokens, call logout endpoint, redirect to login page.
    } else {
      console.log(`Clicked: ${key}`); // Log other user menu interactions for debugging.
    }
  };

  return (
    // Top-level Ant Design Layout component; using a style to ensure it fills the viewport height.
    <AntLayout style={{ minHeight: '100vh' }}>
      {/* Sider: left vertical navigation area */}
      <Sider
        trigger={null}               // Disable AntD's default collapse trigger; we use a custom button in the Header.
        collapsible                  // Enable collapsing behavior.
        collapsed={collapsed}        // Controlled collapsed state driven by local state.
        breakpoint="md"              // Built-in breakpoint; on breakpoint crossing AntD signals via onBreakpoint.
        onBreakpoint={(broken) => {  // Called when window crosses the specified breakpoint.
          setCollapsed(broken);      // Collapse when broken=true (narrow), expand when broken=false (wide).
        }}
        style={{
          overflow: 'auto',          // Enable vertical scrolling inside the sider if content overflows.
          height: '100vh',           // Make sider as tall as the viewport.
          position: 'fixed',         // Fix position so content can scroll independently.
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,              // Keep the sidebar above other elements.
        }}
      >
        {/* Branding / logo area in the sider with subtle background and rounded corners */}
        <div style={{ 
          height: 32, 
          margin: 16, 
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {!collapsed && ( // If the sider is expanded, show the textual brand title; hide when collapsed for compactness.
            <Title level={4} style={{ color: 'white', margin: 0 }}>
              AntD App
            </Title>
          )}
        </div>

        {/* Sidebar navigation menu */}
        <Menu
          theme="dark"                          // Dark theme for the sidebar for contrast.
          mode="inline"                         // Inline vertical menu mode.
          selectedKeys={[location.pathname]}    // Highlight the item matching the current pathname.
          items={menuItems}                     // Inject menu items defined above.
          onClick={handleMenuClick}             // Handle clicks to navigate.
        />
      </Sider>

      {/* Main layout area to the right of the sider; margin-left changes based on collapsed width. */}
      <AntLayout style={{ marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}>
        {/* Header: top bar with collapse toggle and user dropdown */}
        <Header style={{ 
          padding: '0 16px', 
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <Space>
            {/* Custom collapse toggle button placed in header */}
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} // Icon flips based on collapsed state.
              onClick={() => setCollapsed(!collapsed)} // Toggle collapsed state when clicked.
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            {/* Page title next to the toggle for context */}
            <Title level={4} style={{ margin: 0 }}>
              Dashboard
            </Title>
          </Space>

          <Space>
            {/* User dropdown: avatar + username trigger a contextual menu */}
            <Dropdown 
              menu={{ 
                items: userMenuItems,          // Provide dropdown items defined earlier.
                onClick: handleUserMenuClick   // Handle clicks inside the dropdown.
              }} 
              placement="bottomRight"          // Align dropdown to the bottom-right of the trigger.
            >
              <Space style={{ cursor: 'pointer' }}>
                <Avatar icon={<UserOutlined />} /> {/* Visual avatar; replace with real user image when available. */}
                <span>John Doe</span>               {/* Hard-coded display name; in real app use user state. */}
              </Space>
            </Dropdown>
          </Space>
        </Header>

        {/* Content area where nested routes render via Outlet */}
        <Content style={{ 
          margin: '24px 16px 0',
          overflow: 'initial',
          minHeight: 'calc(100vh - 112px)' // Keep footer visible and content area sized relative to viewport.
        }}>
          <div style={{
            padding: 24,
            background: '#fff',
            borderRadius: 8,
            minHeight: '100%'
          }}>
            <Outlet /> {/* Renders whichever child route is active (Home, Users, CreateUser, etc.). */}
          </div>
        </Content>

        {/* Footer: small attribution bar at the bottom */}
        <Footer style={{ 
          textAlign: 'center',
          background: '#f5f5f5',
          borderTop: '1px solid #e8e8e8'
        }}>
          Ant Design Layout Demo ©2024 Created with ❤️
        </Footer>
      </AntLayout>
    </AntLayout>
  );
};

export default AppLayout; // Default export so this component can be used as the app's layout