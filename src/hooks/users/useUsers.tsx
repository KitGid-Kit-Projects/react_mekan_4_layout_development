import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from './actions/mockUsers';
import { User } from './actions/user';
import { getActionItems } from './actions/actionItems';
import { columns } from './actions/tableColumns';

export default function useUsers() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleEdit = (userId: string) => {
    console.log('Edit user:', userId);
  };

  const handleDelete = (userId: string) => {
    console.log('Delete user:', userId);
  };

  const handleView = (userId: string) => {
    console.log('View user:', userId);
  };

  return {
    navigate,
    searchText,
    setSearchText,
    usersData: mockUsers,
    filteredUsers,
    handleEdit,
    handleDelete,
    handleView,
    getActionItems: (record: User) => getActionItems(record, handleView, handleEdit, handleDelete),
    columns: columns(handleView, handleEdit, handleDelete)
  };
}