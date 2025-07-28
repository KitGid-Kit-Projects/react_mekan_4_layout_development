import React, { useState } from 'react';
import { Typography, Table, Card, Button, Space, Tag, Avatar, Input, Dropdown, MenuProps } from 'antd';
import { 
  UserOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  PlusOutlined,
  SearchOutlined,
  MoreOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { TableColumnsType } from 'antd';

const { Title } = Typography;
const { Search } = Input;

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

const Users: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  // Mock user data array
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
      phone: '+1 (555) 987-6543',
      role: 'Editor',
      status: 'active',
      joinDate: '2024-02-20',
    },
    {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      phone: '+1 (555) 456-7890',
      role: 'Viewer',
      status: 'inactive',
      joinDate: '2024-03-10',
    },
  ];

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleEdit = (userId: string) => {
    console.log('Edit user:', userId);
    navigate(`/edit-user/${userId}`);
  };

  const handleDelete = (userId: string) => {
    console.log('Delete user:', userId);
    // Add your delete logic here
  };

  const handleView = (userId: string) => {
    console.log('View user:', userId);
    navigate(`/user/${userId}`);
  };

  const getActionItems = (record: User): MenuProps['items'] => [
    {
      key: 'view',
      label: 'View Details',
      icon: <UserOutlined />,
      onClick: () => handleView(record.id),
    },
    {
      key: 'edit',
      label: 'Edit User',
      icon: <EditOutlined />,
      onClick: () => handleEdit(record.id),
    },
    {
      type: 'divider',
    },
    {
      key: 'delete',
      label: 'Delete User',
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => handleDelete(record.id),
    },
  ];

  const columns: TableColumnsType<User> = [
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
          menu={{ items: getActionItems(record) }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 24,
        flexWrap: 'wrap',
        gap: 16
      }}>
        <Title level={2} style={{ margin: 0 }}>User Management</Title>
        <Button 
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate('/create-user')}
        >
          Create New User
        </Button>
      </div>

      <Card>
        <div style={{ marginBottom: 16 }}>
          <Search
            placeholder="Search users by name, email, or role"
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
            allowClear
          />
        </div>

        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} users`,
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
};

export default Users;