import React from 'react';
import { Table, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useUsers from '../useUsers';


const UsersPage: React.FC = () => {
  const {
    searchText,
    setSearchText,
    filteredUsers,
    columns
  } = useUsers();

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
        />
      </Space>
      
      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UsersPage;