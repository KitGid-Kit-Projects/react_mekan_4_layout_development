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
import { useUsers } from '@/hooks/users/useUsers';

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
const {
  navigate,
columns,
filteredUsers,
searchText,
setSearchText,
}=useUsers()
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