import { 
    ArrowUpOutlined, 
    ArrowDownOutlined, 
    UserOutlined,
    ShoppingCartOutlined,
    DollarCircleOutlined,
  } from '@ant-design/icons';
  
  // ✅ React Router hook for navigation
  import { useNavigate } from 'react-router-dom';

export function useHome(){
    const navigate = useNavigate(); // Used for programmatic navigation

    // ✅ Dashboard mock data for statistics
    const statsData = [
      {
        title: 'Active Users',
        value: 1128,
        precision: 0,
        valueStyle: { color: '#3f8600' }, // Green indicates growth
        prefix: <ArrowUpOutlined />,
        suffix: '%',
        icon: <UserOutlined />, // Not currently used in this layout
      },
      {
        title: 'Sales',
        value: 93,
        precision: 2,
        valueStyle: { color: '#cf1322' }, // Red indicates decline
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

    return{
        statsData,
        navigate
    }
  
}