import React from 'react'; // React core: required for JSX and component definitions
import { Table, Input, Space } from 'antd'; // AntD primitives: Table for listing, Input for search, Space for spacing
import { SearchOutlined } from '@ant-design/icons'; // Icon used inside the search input as a prefix
import useUsers from '../hooks/useUsers.tsx'; // Custom hook that provides users data, filtering and table columns

const UsersPage: React.FC = () => { // Define UsersPage as a React functional component (no props)
  // Destructure values returned by the custom hook:
  // - searchText: current search input value
  // - setSearchText: setter to update the search text
  // - filteredUsers: array of users filtered by searchText
  // - columns: configured columns array for the AntD Table
  const {
    searchText,
    setSearchText,
    filteredUsers,
    columns
  } = useUsers();

  return (
    <div>
      {/* Top control area: search input placed inside a Space for consistent spacing */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search users..." // Placeholder guiding the user what to search
          value={searchText} // Controlled input value bound to hook state
          onChange={(e) => setSearchText(e.target.value)} // Update hook state on user input
          prefix={<SearchOutlined />} // Leading icon to indicate search purpose
          style={{ width: 300 }} // Fixed width for a predictable layout
        />
      </Space>
      
      {/* Users table:
          - columns: column definitions from the hook (renderers, actions)
          - dataSource: filtered list of users to display
          - rowKey: unique key for each row (uses 'id' field)
          - pagination: show 10 rows per page
      */}
      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UsersPage; // Default export so routing/pages can import and render the users list