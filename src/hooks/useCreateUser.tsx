import { Form, UploadProps, message } from "antd"; // AntD Form utilities, Upload props typing, and message for notifications
import { useNavigate } from "react-router-dom"; // Hook to programmatically navigate after successful form submit

// Custom hook that encapsulates CreateUser form instance, upload configuration and handlers
export default function useCreateUser() {
  const navigate = useNavigate(); // Get navigate function to change routes programmatically
  const [form] = Form.useForm<any>(); // Create an AntD Form instance for controlled form operations

  // uploadProps: configuration passed into AntD <Upload /> to control behavior and validation
  const uploadProps: UploadProps = {
    name: 'avatar', // field name sent with upload requests (if used)
    listType: 'picture', // show thumbnails for selected files
    maxCount: 1, // allow only a single file selection
    beforeUpload: (file) => { // validation executed before upload attempt
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'; // allow JPEG/PNG only
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!'); // notify user if wrong file type
      }
      const isLt2M = file.size / 1024 / 1024 < 2; // size check: less than 2MB
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!'); // notify user if file too large
      }
      return false; // return false to prevent automatic upload (we handle file client-side)
    },
    onChange: (info) => { // called when file list changes (select/remove)
      console.log('Upload info:', info); // log for debugging; replace with state handling if needed
    },
  };

  // onFinish: handler invoked when form validation passes and user submits
  const onFinish = (values: any) => {
    console.log('Form values:', values); // debug print of collected form values
    message.success('User created successfully!'); // show success notification to the user

    // Simulate API call delay then navigate to the users list
    setTimeout(() => {
      navigate('/users'); // navigate to users page after creation
    }, 1000);
  };

  // onFinishFailed: handler when form validation fails on submit
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo); // log validation errors for debugging
    message.error('Please check the form for errors'); // show user-facing error notification
  };

  // onReset: reset form fields to initial state and notify the user
  const onReset = () => {
    form.resetFields(); // reset all fields in the AntD form instance
    message.info('Form has been reset'); // informational message to user
  };

  // Return the hook API used by CreateUser form component
  return {
    navigate, // expose navigate in case callers need it
    form, // AntD form instance bound to the form
    uploadProps, // upload configuration for avatar field
    onFinish, // submit success handler
    onFinishFailed, // submit failure handler
    onReset // form reset handler
  }
}
