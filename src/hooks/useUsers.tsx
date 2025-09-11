
////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

// Import Ant Design components used to build table action UI and inline content:
// - Button: clickable button used to open dropdown menu
// - Space: layout helper to space items horizontally
// - Tag: visual label/badge for role/status
// - Avatar: user avatar placeholder
// - Dropdown: contextual menu for row actions
import { Button, Space, Tag, Avatar, Dropdown } from 'antd';

// Import icons used in table cells and dropdown items.
// - UserOutlined: generic user avatar icon
// - EditOutlined: edit action icon
// - DeleteOutlined: delete action icon
// - MoreOutlined: "more" icon used on actions button
// - MailOutlined: mail icon shown next to email
// - PhoneOutlined: phone icon shown next to phone numbers
import { 
  UserOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  MoreOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

// useNavigate allows programmatic navigation (e.g., navigate to edit page).
import { useNavigate } from 'react-router-dom';

// Type import from Ant Design for strong typing of table columns.
import type { TableColumnsType } from 'antd';

// Local React hook for managing simple component state.
import { useState } from 'react';

////////////////////////////////////////////////////////////////////////////////
// Types / Interfaces
////////////////////////////////////////////////////////////////////////////////

// Interface describing the shape of a User object used in this hook and table.
// Fields:
// - id: unique identifier (string)
// - name: full name of the user
// - email: user's email address
// - phone: user's phone number string
// - role: role name (Admin|Editor|Viewer etc.)
// - status: limited union to 'active' | 'inactive' to control tag display
// - avatar?: optional avatar url or image identifier
// - joinDate: string representation (ISO or human) of when the user joined
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive';
  avatar?: string;
  joinDate: string;
}

////////////////////////////////////////////////////////////////////////////////
// Hook: useUsers
////////////////////////////////////////////////////////////////////////////////

// Default export of the custom hook encapsulating user list logic/UI helpers.
// Purpose:
// - provide navigation handle
// - hold local search state
// - expose mock dataset and filtered results
// - expose table column definitions and row action helpers
export default function useUsers() {
    // Acquire navigate function to allow components using the hook to redirect.
    const navigate = useNavigate();

    // Local state holding the current search string entered by the user.
    // setSearchText updates the search text and will affect filteredUsers.
    const [searchText, setSearchText] = useState('');

    // -------------------------------------------------------------------------
    // Mock user dataset
    // In a real application this would be fetched from an API and managed with
    // async state (useEffect + fetch or a data fetching library).
    // Each object conforms to the User interface above.
    // -------------------------------------------------------------------------
    const usersData: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        role: 'Admin',
        status: 'active',
        joinDate: '2024-01-15',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 (555) 234-5678',
        role: 'Editor',
        status: 'active',
        joinDate: '2024-02-20',
      },
      {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        phone: '+1 (555) 345-6789',
        role: 'Viewer',
        status: 'inactive',
        joinDate: '2024-03-10',
      },
      {
        id: '4',
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        phone: '+1 (555) 456-7890',
        role: 'Editor',
        status: 'active',
        joinDate: '2024-03-25',
      },
      {
        id: '5',
        name: 'Charlie Wilson',
        email: 'charlie.wilson@example.com',
        phone: '+1 (555) 567-8901',
        role: 'Viewer',
        status: 'active',
        joinDate: '2024-04-05',
      },
    ];

    // -------------------------------------------------------------------------
    // filteredUsers
    // Derived list computed from usersData and current searchText.
    // Filtering logic:
    // - Convert both source fields and searchText to lowercase for case-insensitive match.
    // - Checks name, email, and role fields for inclusion of searchText.
    // -------------------------------------------------------------------------
    const filteredUsers = usersData.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.role.toLowerCase().includes(searchText.toLowerCase())
    );

    // -------------------------------------------------------------------------
    // Action handlers
    // These functions are currently simple placeholders that log the action.
    // In a production app these would trigger navigation, open modals, call APIs,
    // or update local/global state.
    // -------------------------------------------------------------------------
    // handleEdit: Called when "Edit" action is triggered for a user.
    // Parameter userId: id of the user to edit.
    const handleEdit = (userId: string) => {
      console.log('Edit user:', userId);
      // Example real behavior: navigate(`/users/${userId}/edit`)
    };

    // handleDelete: Called when "Delete" action is triggered for a user.
    // Parameter userId: id of the user to delete.
    const handleDelete = (userId: string) => {
      console.log('Delete user:', userId);
      // Example real behavior: show confirmation modal then call delete API
    };

    // handleView: Called when "View" action is triggered for a user.
    // Parameter userId: id of the user to view.
    const handleView = (userId: string) => {
      console.log('View user:', userId);
      // Example real behavior: navigate(`/users/${userId}`)
    };

    // -------------------------------------------------------------------------
    // getActionItems
    // Returns an array of menu items consumed by Ant Design's Dropdown menu.
    // Each item contains:
    // - key: unique menu key
    // - label: visible text
    // - icon: JSX icon element
    // - onClick: handler that calls the corresponding action handler above
    // A divider item is included to separate destructive action visually.
    // -------------------------------------------------------------------------
    const getActionItems = (record: User) => [
      {
        key: 'view',
        label: 'View Details',
        icon: <UserOutlined />,               // icon shown next to label
        onClick: () => handleView(record.id), // calls handleView with record id
      },
      {
        key: 'edit',
        label: 'Edit User',
        icon: <EditOutlined />,
        onClick: () => handleEdit(record.id),
      },
      {
        type: 'divider' as const, // renders a visual divider in the menu
      },
      {
        key: 'delete',
        label: 'Delete User',
        icon: <DeleteOutlined />,
        danger: true,                           // marks the item as dangerous (red)
        onClick: () => handleDelete(record.id), // calls handleDelete with record id
      },
    ];

    // -------------------------------------------------------------------------
    // Table columns definition for Ant Design Table component.
    // TableColumnsType<User> enforces typing for each column's data and render fn.
    // Columns include custom renderers for complex cells (avatar + email, role tags, etc).
    // -------------------------------------------------------------------------
    const columns: TableColumnsType<User> = [
      {
        // Column that shows user avatar, name and email stacked vertically.
        title: 'User',            // header label
        dataIndex: 'name',        // primary field (used for sorting/search by table)
        key: 'name',              // unique key for React lists
        render: (text: string, record: User) => ( // custom renderer receives text and full record
          <Space>
            {/* Avatar with fallback icon when no avatar provided */}
            <Avatar icon={<UserOutlined />} />
            <div>
              {/* User name shown with semi-bold weight */}
              <div style={{ fontWeight: 500 }}>{text}</div>
              {/* Email shown smaller and muted, with a mail icon */}
              <div style={{ fontSize: '12px', color: '#666' }}>
                <MailOutlined style={{ marginRight: 4 }} />
                {record.email}
              </div>
            </div>
          </Space>
        ),
      },
      {
        // Contact column: phone number with phone icon.
        title: 'Contact',
        dataIndex: 'phone',
        key: 'phone',
        render: (phone: string) => (
          <Space>
            <PhoneOutlined />
            {phone}
          </Space>
        ),
        responsive: ['md'], // visible on medium screens and up
      },
      {
        // Role column: shows a colored Tag based on role value.
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        render: (role: string) => {
          // Simple mapping from role name to tag color.
          const color = role === 'Admin' ? 'red' : role === 'Editor' ? 'blue' : 'green';
          return <Tag color={color}>{role}</Tag>;
        },
      },
      {
        // Status column: shows active/inactive as Tag with different color.
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => (
          // 'success' color for active, default/gray for inactive
          <Tag color={status === 'active' ? 'success' : 'default'}>
            {status.toUpperCase()}
          </Tag>
        ),
      },
      {
        // Join Date column: simple text column, visible on large screens.
        title: 'Join Date',
        dataIndex: 'joinDate',
        key: 'joinDate',
        responsive: ['lg'],
      },
      {
        // Actions column: renders a Dropdown with action menu items for each row.
        title: 'Actions',
        key: 'actions',
        render: (_, record: User) => (
          <Dropdown 
            menu={{ 
              // menu items generated for this specific record
              items: getActionItems(record),
              // onClick receives clicked menu key; example shows finding item by key.
              onClick: ({ key }) => {
                const item = getActionItems(record).find(item => item.key === key);
                // The menu item itself defines onClick which already calls handlers,
                // so here we only demonstrate how to look up the item if needed.
                // Example: if manual invocation required, check and call item.onClick()
                // if (item && 'onClick' in item) {
                //   item.onClick();
                // }
              }
            }}
            trigger={['click']} // open dropdown on click (not hover)
          >
            {/* Button that opens the dropdown; uses a "more" icon for affordance */}
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        ),
      },
    ];

    // -------------------------------------------------------------------------
    // Hook return: expose navigation, current state, data and helpers to consumers.
    // Returned properties:
    // - navigate: programmatic navigation function
    // - searchText, setSearchText: stateful search input and setter
    // - usersData: original mock dataset
    // - filteredUsers: dataset filtered by searchText
    // - handleEdit, handleDelete, handleView: action handlers (currently stubs)
    // - getActionItems: menu builder for row dropdown actions
    // - columns: strongly-typed column configuration for Ant Design Table
    // -------------------------------------------------------------------------
  return {
    navigate,
    searchText,
    setSearchText,
    usersData,
    filteredUsers,
    handleEdit,
    handleDelete,
    handleView,
    getActionItems,
    columns
  }
}
