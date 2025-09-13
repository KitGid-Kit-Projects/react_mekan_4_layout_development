import { TableColumnsType } from 'antd'; // AntD type for columns array definition

// Import icons used inside table cells for visual affordances
import { UserOutlined, MailOutlined, PhoneOutlined, MoreOutlined } from '@ant-design/icons';
// Import AntD UI pieces used in render functions (Avatar, Tag, Button, Space, Dropdown)
import { Button, Space, Avatar, Tag, Dropdown } from 'antd';
// Import helper that builds action menu items for the Actions column
import { getActionItems } from './actionItems';

/**
 * columns
 * - Returns an array of TableColumnsType<any> configured for the users table.
 * - Accepts three callbacks used by the Actions menu items to view/edit/delete a user.
 */
export const columns = (
  handleView: (userId: string) => void,   // callback to view user details
  handleEdit: (userId: string) => void,   // callback to start editing a user
  handleDelete: (userId: string) => void  // callback to delete a user
): TableColumnsType<any> => [
  {
    // User column: shows avatar, name and email beneath the name
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: any) => ( // render receives cell text and full record
      <Space> {/* Space: horizontal spacing between avatar and text block */}
        <Avatar icon={<UserOutlined />} /> {/* Avatar: fallback icon when no image provided */}
        <div>
          <div style={{ fontWeight: 500 }}>{text}</div> {/* Bold name for emphasis */}
          <div style={{ fontSize: '12px', color: '#666' }}> {/* secondary text for email */}
            <MailOutlined style={{ marginRight: 4 }} /> {/* small email icon */}
            {record.email} {/* show the email from the record */}
          </div>
        </div>
      </Space>
    ),
  },
  {
    // Contact column: shows phone with an icon; hidden on small screens via responsive
    title: 'Contact',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone: string) => ( // render the phone value with a leading icon
      <Space>
        <PhoneOutlined /> {/* Phone icon for quick recognition */}
        {phone} {/* plain phone number text */}
      </Space>
    ),
    responsive: ['md'], // only show this column on medium+ screens
  },
  {
    // Role column: displays role name inside a colored Tag
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (role: string) => {
      // Determine tag color by role value (Admin=red, Editor=blue, others=green)
      const color = role === 'Admin' ? 'red' : role === 'Editor' ? 'blue' : 'green';
      return <Tag color={color}>{role}</Tag>; // return a colored Tag with role label
    },
  },
  {
    // Status column: show account status as an uppercase Tag (success color for active)
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'success' : 'default'}>
        {status.toUpperCase()} {/* convert status to uppercase for consistency */}
      </Tag>
    ),
  },
  {
    // Join Date column: simple data column, only visible on large screens
    title: 'Join Date',
    dataIndex: 'joinDate',
    key: 'joinDate',
    responsive: ['lg'],
  },
  {
    // Actions column: renders a Dropdown containing action menu items for the row
    title: 'Actions',
    key: 'actions',
    render: (_, record: any) => ( // render ignores a dataIndex and uses the full record
      <Dropdown 
        menu={{ 
          // Build menu items using helper and wire an onClick to optionally invoke the found item
          items: getActionItems(record, handleView, handleEdit, handleDelete),
          onClick: ({ key }) => {
            // Rebuild items to locate the clicked item (keeps handlers scoped to the record)
            const items = getActionItems(record, handleView, handleEdit, handleDelete);
            const item = items?.find(item => 'key' in item && item.key === key);
            if (item && 'onClick' in item) {
              // Intentionally commented: actual item.onClick invocation could be used here if desired
              // item.onClick();
            }
          }
        }}
        trigger={['click']} /* open menu on click */
      >
        <Button icon={<MoreOutlined />} /> {/* Button with "more" icon opens the dropdown */}
      </Dropdown>
    ),
  },
];