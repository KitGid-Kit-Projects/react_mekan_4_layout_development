import React from 'react'
import { 
    ArrowUpOutlined, 
    ArrowDownOutlined, 
    UserOutlined,
    ShoppingCartOutlined,
    DollarCircleOutlined
  } from '@ant-design/icons';
  import { useNavigate } from 'react-router-dom';
export default function useHome() {
    const navigate = useNavigate();

    const statsData = [
      {
        title: 'Active Users',
        value: 1128,
        precision: 0,
        valueStyle: { color: '#3f8600' },
        prefix: <ArrowUpOutlined />,
        suffix: '%',
        icon: <UserOutlined />,
      },
      {
        title: 'Sales',
        value: 93,
        precision: 2,
        valueStyle: { color: '#cf1322' },
        prefix: <ArrowDownOutlined />,
        suffix: '%',
        icon: <ShoppingCartOutlined />,
      },
      {
        title: 'Revenue',
        value: 58730,
        precision: 0,
        prefix: '$',
        icon: <DollarCircleOutlined />,
      },
    ];
  return {navigate,statsData}
}
