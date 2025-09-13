import React from 'react';
import { Form, Row, Col } from 'antd';
import useCreateUser from '@/hooks/createUser/useCreateUser';
import NameFields from './NameFields';
import ContactFields from './ContactFields';
import RoleDepartmentFields from './RoleDepartmentFields';
import DateStatusFields from './DateStatusFields';
import AvatarField from './AvatarField';
import BioField from './BioField';
import FormActions from './FormActions';

const UserForm: React.FC = () => {
  const { form, onFinish, onFinishFailed, onReset } = useCreateUser();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        status: true,
        role: 'viewer',
        department: 'general',
      }}
    >
      <Row gutter={[16, 16]}>
        <NameFields />
        <ContactFields />
        <RoleDepartmentFields />
        <DateStatusFields />
        <AvatarField />
        <BioField />
      </Row>

      <FormActions onReset={onReset} />
    </Form>
  );
};

export default UserForm;