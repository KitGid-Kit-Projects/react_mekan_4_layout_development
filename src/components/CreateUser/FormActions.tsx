import React from 'react';
import { Button } from 'antd';
import { SaveOutlined, ClearOutlined } from '@ant-design/icons';



const FormActions: React.FC<any> = ({ onReset }) => {
  return (
    <div style={{ 
      marginTop: 24, 
      display: 'flex', 
      gap: 16, 
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }}>
      <Button 
        icon={<ClearOutlined />}
        onClick={onReset}
        size="large"
      >
        Reset Form
      </Button>
      <Button 
        type="primary" 
        htmlType="submit"
        icon={<SaveOutlined />}
        size="large"
      >
        Create User
      </Button>
    </div>
  );
};

export default FormActions;