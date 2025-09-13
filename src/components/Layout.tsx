import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Layout as AntLayout, Grid } from 'antd';
import Sidebar from './Layout/Sidebar';
import HeaderBar from './Layout/HeaderBar';
import FooterBar from './Layout/FooterBar';


const { Content } = AntLayout;
const { useBreakpoint } = Grid;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();

  useEffect(() => {
    setCollapsed(!screens.md);
  }, [screens.md]);

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        navigate={navigate}
        location={location}
      />

      <AntLayout
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: 'margin-left 0.2s',
        }}
      >
        <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            minHeight: 'calc(100vh - 112px)',
          }}
        >
          <div
            style={{
              padding: 24,
              background: '#fff',
              borderRadius: 8,
              minHeight: '100%',
            }}
          >
            <Outlet />
          </div>
        </Content>

        <FooterBar />
      </AntLayout>
    </AntLayout>
  );
};

export default AppLayout;
