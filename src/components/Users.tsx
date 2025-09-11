import React from 'react'; // Core React import required for JSX transformation (explicit here for clarity).
import { Typography, Table, Card, Button, Input } from 'antd'; 
// Typography: provides semantic text components (Title, Text, etc).
// Table: Ant Design table component used to render tabular user data.
// Card: simple container with padded content and subtle border/background.
// Button: clickable UI control used for actions like "Create New User".
// Input: provides text input components; we use Search variant for filtering.

import { 
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
// PlusOutlined: icon used inside the Create button to indicate addition/creation.
// SearchOutlined: icon used inside the search input as a visual affordance.

import useUsers from '../hooks/useUsers.tsx';
// Custom hook that encapsulates user list state, filtered results, table columns, and navigation helpers.
// Using a hook keeps this component focused on rendering; all data/logic is obtained from useUsers.

const { Title } = Typography; // Destructure Title component for page heading.
const { Search } = Input;     // Destructure Input.Search to access the specialized Search component.

const Users: React.FC = () => {
  // Functional component that renders the Users management UI.
  // React.FC typed for clarity; no props expected.

  const {
    navigate,        // function to programmatically navigate routes (from useUsers hook)
    setSearchText,   // setter to update the search text used by the hook's filtering logic
    usersData,       // full (unfiltered) users dataset (mock or fetched source)
    filteredUsers,   // dataset filtered by the current search input (used as table dataSource)
    columns          // table column definitions (strongly-typed and include renderers)
  } = useUsers();    // Invoke the hook and destructure required values.

  return (
    <div>
      {/* Header row: title + action button aligned horizontally */}
      <div style={{ 
        display: 'flex',               // use flexbox to align title and actions
        justifyContent: 'space-between', // place title left and button right
        alignItems: 'center',          // vertically center content within the header row
        marginBottom: 24,              // spacing below the header
        flexWrap: 'wrap',              // allow wrapping on narrow screens (responsive)
        gap: 16                        // consistent spacing between wrapped items
      }}>
        <Title level={2} style={{ margin: 0 }}>User Management</Title>
        {/* Title: level 2 heading, remove default margin to align with button baseline. */}

        <Button 
          type="primary" 
          icon={<PlusOutlined />}              // show plus icon inside the button for affordance
          onClick={() => navigate('/create-user')} // navigate to create-user page when clicked
        >
          Create New User
          {/* Button label shown alongside the icon; using text ensures accessibility and clarity. */}
        </Button>
      </div>

      {/* Main card container that holds search and table */}
      <Card>
        {/* Search control area */}
        <div style={{ marginBottom: 16 }}>
          <Search
            placeholder="Search users by name, email, or role" // helper text guiding user input
            prefix={<SearchOutlined />}                        // leading icon inside the input
            onChange={(e) => setSearchText(e.target.value)}    // update hook's search state on every keystroke
            style={{ width: 300 }}                             // fixed width for consistent layout
            allowClear                                         // show clear (x) button to reset input quickly
          />
        </div>

        {/* Users table: renders columns defined in hook and uses filtered data as source */}
        <Table
          columns={columns}                 // column configuration including renderers and actions
          dataSource={filteredUsers}        // filtered list of users to display in rows
          rowKey="id"                       // unique key property on each data item (important for React list rendering)
          pagination={{
            pageSize: 10,                   // default number of rows per page
            showSizeChanger: true,          // allow user to change page size
            showQuickJumper: true,          // allow jumping to a specific page quickly
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} users`, // human-readable pagination summary
          }}
          scroll={{ x: 800 }}               // enable horizontal scrolling when table exceeds 800px width (prevents layout break)
        />
      </Card>
    </div>
  );
};

export default Users; // Export component as default so it can be imported by routes or other components.