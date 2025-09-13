import { TableColumnsType } from 'antd';

import { UserOutlined, MailOutlined, PhoneOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Space, Avatar, Tag, Dropdown } from 'antd';
import { getActionItems } from './actionItems';
import { User } from './user';

export const columns = (
  handleView: (userId: string) => void,
  handleEdit: (userId: string) => void,
  handleDelete: (userId: string) => void
): TableColumnsType<User> => [
  {
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: User) => (
      <Space>
        <Avatar icon={<UserOutlined />} />
        <div>
          <div style={{ fontWeight: 500 }}>{text}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            <MailOutlined style={{ marginRight: 4 }} />
            {record.email}
          </div>
        </div>
      </Space>
    ),
  },
  {
    title: 'Contact',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone: string) => (
      <Space>
        <PhoneOutlined />
        {phone}
      </Space>
    ),
    responsive: ['md'],
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (role: string) => {
      const color = role === 'Admin' ? 'red' : role === 'Editor' ? 'blue' : 'green';
      return <Tag color={color}>{role}</Tag>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'success' : 'default'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Join Date',
    dataIndex: 'joinDate',
    key: 'joinDate',
    responsive: ['lg'],
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record: User) => (
      <Dropdown 
        menu={{ 
          items: getActionItems(record, handleView, handleEdit, handleDelete),
          onClick: ({ key }) => {
            const items = getActionItems(record, handleView, handleEdit, handleDelete);
            const item = items?.find(item => 'key' in item && item.key === key);
            if (item && 'onClick' in item) {
              // item.onClick();
            }
          }
        }}
        trigger={['click']}
      >
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];