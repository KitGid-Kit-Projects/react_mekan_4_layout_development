import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';


export const getActionItems = (
  record: any, 
  handleView: (userId: string) => void,
  handleEdit: (userId: string) => void,
  handleDelete: (userId: string) => void
): MenuProps['items'] => [
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