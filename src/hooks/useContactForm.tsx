import { message } from 'antd';

export const useContactForm = () => {
  const onFinish = (values, form) => {
    console.log('Contact form submitted:', values);
    message.success('Message sent successfully! (This is just a demo)');
    form.resetFields();
  };

  return {
    onFinish
  };
};