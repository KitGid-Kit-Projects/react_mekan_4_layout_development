import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Layout as AntLayout,
  Menu,
  Button,
  Typography,
  Space,
  Grid
} from 'antd';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

// Ant Design Layout subcomponents
const { Header, Sider, Footer, Content } = AntLayout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state
  const navigate = useNavigate(); // Navigation hook
  const location = useLocation(); // Current path
  const screens = useBreakpoint(); // Responsive breakpoints (e.g., md, lg)

  // 📱 Collapse sidebar on mobile screens
  useEffect(() => {
    if (!screens.md) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screens.md]);

  // 🧭 Sidebar menu items
  const menuItems = [
    {
      key: '/', // Route path
      icon: <HomeOutlined />, // Icon shown on menu
      label: 'Home', // Label text
    },
  ];

  // 🔁 Navigate to route when menu item is clicked
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {/* 🚪 Sidebar Menu */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={(broken) => setCollapsed(broken)}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        {/* 🔷 Logo or App Title */}
        <div style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {!collapsed && (
            <Title level={4} style={{ color: 'white', margin: 0 }}>
              AntD App
            </Title>
          )}
        </div>

        {/* 📋 Menu items */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]} // Highlights current path
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>

      {/* 📄 Main Content Area */}
      <AntLayout style={{
        marginLeft: collapsed ? 80 : 200, // Adjust margin when sidebar collapses
        transition: 'margin-left 0.2s'
      }}>
        
        {/* 🔝 Top Navigation Bar */}
        <Header style={{
          padding: '0 16px',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <Space>
            {/* 📂 Collapse / Expand Sidebar Toggle */}
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Title level={4} style={{ margin: 0 }}>
              Dashboard
            </Title>
          </Space>
        </Header>

        {/* 📦 Page Content */}
        <Content style={{
          margin: '24px 16px 0',
          overflow: 'initial',
          minHeight: 'calc(100vh - 112px)' // Adjust for header + footer height
        }}>
          <div style={{
            padding: 24,
            background: '#fff',
            borderRadius: 8,
            minHeight: '100%'
          }}>
            <Outlet /> {/* Renders the child route component */}
          </div>
        </Content>

        {/* 🧾 Footer */}
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

export default AppLayout;