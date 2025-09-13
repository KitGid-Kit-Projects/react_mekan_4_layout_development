import React from 'react';
import { Typography, Row, Col } from 'antd';
import useHome from '@/hooks/home/useHome';
import WelcomeSection from '@/components/Home/WelcomeSection';
import StatsSection from '@/components/Home/StatsSection';
import DashboardContent from '@/components/Home/DashboardContent';


const Home: React.FC = () => {
  const { navigate, statsData } = useHome();
  
  return (
    <div>
      <WelcomeSection />
      <StatsSection statsData={statsData} />
      <DashboardContent navigate={navigate} />
    </div>
  );
};

export default Home;