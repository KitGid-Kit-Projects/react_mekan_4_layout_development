import React from 'react';
import { Layout, Button, Typography, Space, Dropdown, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

interface HeaderBarProps {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ collapsed, setCollapsed }) => {
  const userMenuItems = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
    { type: 'divider' as const },
    { key: 'logout', icon: <LogoutOutlined />, label: 'Logout', danger: true },
  ];

  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') console.log('Logging out...');
    else console.log(`Clicked: ${key}`);
  };

  return (
    <Header
      style={{
        padding: '0 16px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <Space>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: '16px', width: 64, height: 64 }}
        />
        <Title level={4} style={{ margin: 0 }}>
          Dashboard
        </Title>
      </Space>

      <Dropdown
        menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
        placement="bottomRight"
      >
        <Space style={{ cursor: 'pointer' }}>
          <Avatar icon={<UserOutlined />} />
          <span>John Doe</span>
        </Space>
      </Dropdown>
    </Header>
  );
};

export default HeaderBar;
