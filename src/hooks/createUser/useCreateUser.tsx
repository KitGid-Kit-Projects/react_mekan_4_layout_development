import { Form, UploadProps, message } from "antd";
import { useNavigate } from "react-router-dom";


interface UserFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    status: boolean;
    joinDate: any;
    department: string;
    bio: string;
    avatar: any;
  }

  
export default function useCreateUser() {
    const navigate = useNavigate();
    const [form] = Form.useForm<UserFormData>();
  
    const uploadProps: UploadProps = {
      name: 'avatar',
      listType: 'picture',
      maxCount: 1,
      beforeUpload: (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return false; // Prevent auto upload
      },
      onChange: (info) => {
        console.log('Upload info:', info);
      },
    };
  
    const onFinish = (values: UserFormData) => {
      console.log('Form values:', values);
      message.success('User created successfully!');
      
      // Simulate API call delay
      setTimeout(() => {
        navigate('/users');
      }, 1000);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
      message.error('Please check the form for errors');
    };
  
    const onReset = () => {
      form.resetFields();
      message.info('Form has been reset');
    };
  
  return {
    navigate,
    form,
    uploadProps,
    onFinish,
    onFinishFailed,
    onReset
  }
}
