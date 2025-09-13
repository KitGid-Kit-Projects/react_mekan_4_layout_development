import React from 'react';
import { Typography, Card} from 'antd';
import useCreateUser from '@/hooks/createUser/useCreateUser';
import BackButton from '@/components/CreateUser/BackButton';
import UserForm from '@/components/CreateUser/UserForm';
const { Title, Paragraph } = Typography;

const CreateUser: React.FC = () => {
  const { navigate } = useCreateUser();

  return (
    <div>
      <BackButton onBack={() => navigate('/users')} />
      
      <Title level={2}>Create New User</Title>
      <Paragraph>
        Fill in the form below to create a new user account. All fields marked with * are required.
      </Paragraph>

      <Card>
        <UserForm />
      </Card>
    </div>
  );
};

export default CreateUser;