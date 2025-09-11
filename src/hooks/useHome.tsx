// Detailed, line-by-line annotated version of useHome hook.
// Each line or small group of lines includes an explanatory comment
// describing purpose, types, and intended runtime behavior.

import React from 'react' 
// Import React to make TSX/JSX syntax available and for potential future React APIs.
// Note: React 17+ doesn't require this import for JSX in many setups, but keeping it
// preserves compatibility and makes intent explicit.

import { 
    ArrowUpOutlined, 
    ArrowDownOutlined, 
    UserOutlined,
    ShoppingCartOutlined,
    DollarCircleOutlined
  } from '@ant-design/icons';
// Import specific Ant Design icons used by the stats data.
// - ArrowUpOutlined / ArrowDownOutlined: visual prefix indicating trend direction.
// - UserOutlined: icon representing users.
// - ShoppingCartOutlined: icon representing sales/orders.
// - DollarCircleOutlined: icon representing revenue / money.
// Importing only used icons keeps bundle smaller than importing the whole icon set.

import { useNavigate } from 'react-router-dom';
// Import useNavigate from react-router-dom for programmatic navigation.
// The hook returns a navigate() function which consumers can call to change routes.

export default function useHome() {
// Default-exported custom hook named useHome.
// Purpose: encapsulate home/dashboard related data and helpers so consuming components
// can remain presentational and stateless.
    const navigate = useNavigate();
    // Acquire the navigate function from react-router.
    // Intended use: consumer components call navigate('/some-path') to move to another page
    // (e.g., clicking a stat card could navigate to a detailed view).

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
      // Explanation for the first item:
      // - title: label shown to the user ("Active Users").
      // - value: numeric metric to display (1128).
      // - precision: number of decimals to format the value with (0 means integer).
      // - valueStyle: inline style applied to the value element; here sets a green color.
      // - prefix: JSX element rendered before value (arrow up icon to indicate positive change).
      // - suffix: text appended to the displayed value (percent sign).
      // - icon: separate icon representing the metric (user icon).

      {
        title: 'Sales',
        value: 93,
        precision: 2,
        valueStyle: { color: '#cf1322' },
        prefix: <ArrowDownOutlined />,
        suffix: '%',
        icon: <ShoppingCartOutlined />,
      },
      // Explanation for the second item:
      // - title: "Sales" label.
      // - value: 93 (displayed with 2 decimal places due to precision: 2).
      // - valueStyle: red color (indicating negative trend or attention).
      // - prefix: arrow-down icon (indicates a drop).
      // - suffix: percent sign to denote percent change.
      // - icon: shopping cart icon representing sales metric.

      {
        title: 'Revenue',
        value: 58730,
        precision: 0,
        prefix: '$',
        icon: <DollarCircleOutlined />,
      },
      // Explanation for the third item:
      // - title: "Revenue" label.
      // - value: 58730 (large whole number, precision: 0).
      // - prefix: dollar sign string to show currency before the number.
      // - icon: dollar-circle icon representing money/revenue.
      // Note: valueStyle and suffix are omitted here; consumer components should
      // handle missing optional fields safely.
    ];
    // statsData is an array of stat descriptor objects intended to drive a UI component
    // (cards, tiles, or statistic components). The structure is purposely lightweight
    // so the presentation layer can map fields to UI controls (icon, title, formatted value).

  return {navigate,statsData}
  // The hook returns an object with:
  // - navigate: programmatic navigation function for event handlers in the UI.
  // - statsData: array of stat descriptors for rendering dashboard statistics.
  // Returning a plain object makes it easy to destructure in consuming components:
  // const { navigate, statsData } = useHome();
  }