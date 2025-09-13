import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Location, NavigateFunction } from 'react-router-dom';

const { Sider } = Layout;
const { Title } = Typography;

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  navigate: NavigateFunction;
  location: Location;
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  navigate,
  location,
}) => {
  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Home' },
    { key: '/about', icon: <InfoCircleOutlined />, label: 'About' },
    { key: '/users', icon: <UserOutlined />, label: 'Users' },
    { key: '/create-user', icon: <PlusOutlined />, label: 'Create User' },
  ];

  return (
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
      <div
        style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!collapsed && (
          <Title level={4} style={{ color: 'white', margin: 0 }}>
            AntD App
          </Title>
        )}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default Sidebar;
