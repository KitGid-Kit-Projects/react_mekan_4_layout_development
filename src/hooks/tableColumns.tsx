// src/hooks/tableColumns.tsx
import { TableColumnsType, Button, Space, Avatar, Tag, Dropdown } from 'antd'; // AntD types/components used to build table columns and cell UI
import { UserOutlined, MailOutlined, PhoneOutlined, MoreOutlined } from '@ant-design/icons'; // Icons used inside table cells and actions
import { getActionItems } from './actionItems'; // Helper that builds action menu items for the Actions column

// Export a factory that returns the Table columns configured with the provided row action handlers
export const columns = (
  handleView: (userId: string) => void, // callback to view user details
  handleEdit: (userId: string) => void, // callback to edit a user
  handleDelete: (userId: string) => void // callback to delete a user
): TableColumnsType<any> => [ // Return value: array of AntD Table column definitions
  {
    title: 'User', // Column header text shown in the table
    dataIndex: 'name', // Default data key for this column's value
    key: 'name', // Unique key for React reconciliation and column identity
    render: (text: string, record: any) => ( // Custom render function to display avatar + name + email
      <Space> {/* Space: horizontal spacing between avatar and text block */}
        <Avatar src={record.avatar} icon={<UserOutlined />} /> {/* Avatar: shows image if provided, otherwise user icon */}
        <div> {/* Container for name and secondary email line */}
          <div style={{ fontWeight: 500 }}>{text}</div> {/* Primary line: user's display name in bold */}
          <div style={{ fontSize: '12px', color: '#666' }}> {/* Secondary line: small, muted text for email */}
            <MailOutlined style={{ marginRight: 4 }} /> {/* Small mail icon preceding the email */}
            {record.email} {/* Render email from the record */}
          </div>
        </div>
      </Space>
    ),
  },
  {
    title: 'Contact', // Column header for contact information
    dataIndex: 'phone', // Data key for phone numbers
    key: 'phone', // Unique key for this column
    render: (phone: string) => ( // Render phone with a leading icon for clarity
      <Space>
        <PhoneOutlined /> {/* Phone icon to indicate the type of data */}
        {phone} {/* Plain phone number text */}
      </Space>
    ),
    responsive: ['md'], // Only show this column on medium and larger screens
  },
  {
    title: 'Role', // Column header for the user's role
    dataIndex: 'role', // Data key for role
    key: 'role', // Unique key for role column
    render: (role: string) => { // Render the role inside a colored Tag for visual distinction
      const color = role === 'Admin' ? 'red' : role === 'Editor' ? 'blue' : 'green'; // Choose tag color by role
      return <Tag color={color}>{role}</Tag>; // Return Tag component with computed color and role label
    },
  },
  {
    title: 'Status', // Column header for account status
    dataIndex: 'status', // Data key for status (e.g., 'active' | 'inactive')
    key: 'status', // Unique key for status column
    render: (status: string) => <Tag color={status === 'active' ? 'green' : 'default'}>{status.toUpperCase()}</Tag>, // Render status as uppercase inside a Tag with success color for active
  },
  {
    title: 'Join Date', // Column header for join date
    dataIndex: 'joinDate', // Data key for the date the user joined
    key: 'joinDate', // Unique key for join date column
    responsive: ['lg'], // Only show join date on large screens to save space on small devices
  },
  {
    title: 'Actions', // Column header for row actions
    key: 'actions', // Unique key (no dataIndex since render uses full record)
    render: (_: any, record: any) => ( // Render a dropdown of actions for the given row
      <Dropdown
        menu={{ items: getActionItems(record, handleView, handleEdit, handleDelete) }} // Build menu items wired to handlers for this record
        trigger={['click']} // Open the dropdown on click
      >
        <Button icon={<MoreOutlined />} /> {/* Button with "more" icon that triggers the actions dropdown */}
      </Dropdown>
    ),
  },
];