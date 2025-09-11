// Detailed, line-by-line annotated version of useCreateUser hook.
// Each block or statement is followed by a comment describing purpose, types,
// side-effects, and suggestions for where to extend functionality.

import { Form, message } from "antd";
// Import Form from Ant Design to create and control form instance and validation.
// Import message from Ant Design to show transient feedback (success/error/info).

import { useNavigate } from "react-router-dom";
// Import useNavigate to allow programmatic route changes (e.g., redirect after submit).

// Define the shape of the form data this hook manages.
// Using an interface gives TypeScript static guarantees about fields used by the form.
interface UserFormData {
  firstName: string;   // User's first name - required text
  lastName: string;    // User's last name - required text
  email: string;       // User's email - expected to validate as email in the form schema
  phone: string;       // User's phone number - string to preserve formatting
  role: string;        // Role identifier (e.g., 'admin'|'editor'|'viewer')
  status: boolean;     // Active status as boolean (true = active)
  joinDate: any;       // Date when user joined - typed as any to accept Date or Moment depending on form control
  department: string;  // Department name - optional/required depending on business rules
  bio: string;         // Short biography or notes about the user
  avatar: any;         // Placeholder for uploaded avatar file info (File object / UploadFile)
}

export default function useCreateUser() {
  // Exported hook that encapsulates all logic related to creating a user.
  // Consumers get form instance, handlers, upload configuration, and navigation.

  const navigate = useNavigate();
  // Programmatic navigation function from react-router.
  // Use navigate('/users') to redirect to users list after successful creation.

  const [form] = Form.useForm<UserFormData>();
  // Create and destructure an Ant Design Form instance typed with UserFormData.
  // The form instance exposes methods like validateFields, resetFields, getFieldsValue, etc.

  // uploadProps configures Ant Design Upload behavior for the avatar field.
  // It prevents automatic upload (return false in beforeUpload) and provides
  // client-side validation for file type and size. onChange reports upload events.
  const uploadProps: any = {
    name: 'avatar',            // form field name for uploaded file
    listType: 'picture',       // list rendering style for previewing images
    maxCount: 1,               // only allow a single file to be selected
    beforeUpload: (file: any) => {
      // Client-side validations executed before any upload attempt.
      // Returning false prevents automatic upload and allows manual handling of the file.
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      // Validate mime-type - accept JPEG and PNG only.
      if (!isJpgOrPng) {
        // Provide immediate user feedback when file type is invalid.
        message.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      // Validate file size (< 2MB).
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      // Returning false stops auto-upload so the file can be processed manually
      // (e.g., converted to base64, previewed, or uploaded with additional form data).
      return false;
    },
    onChange: (info: any) => {
      // Called whenever the selected file list changes (add/remove).
      // Useful for debugging and for extracting the selected file to attach to form state.
      console.log('Upload info:', info);
      // In a production flow you might:
      // - extract file: const file = info.file.originFileObj
      // - generate preview: URL.createObjectURL(file) or convert to base64
      // - set form field value: form.setFieldsValue({ avatar: file })
    },
  };

  // Handler invoked when the form is successfully validated and submitted.
  // 'values' will conform to UserFormData (subject to form field mapping).
  const onFinish = (values: UserFormData) => {
    // Log submitted payload for debugging; remove or redact sensitive info for production logs.
    console.log('Form values:', values);

    // Provide immediate feedback to the user that creation succeeded.
    message.success('User created successfully!');

    // Simulate an async API call delay (e.g., after posting to server).
    // In a real app, replace setTimeout with an actual API call:
    // api.createUser(values).then(() => navigate('/users'))
    setTimeout(() => {
      // After the simulated delay, navigate to the users list page.
      navigate('/users');
    }, 1000);
  };

  // Handler invoked when form validation fails on submit.
  // The argument contains validation failure info (fields, errors).
  const onFinishFailed = (errorInfo: any) => {
    // Log error details for debugging; do not expose internal errors to end users.
    console.log('Failed:', errorInfo);
    // Provide user-visible feedback instructing them to correct the form.
    message.error('Please check the form for errors');
  };

  // Reset helper to clear the form back to its initial state.
  const onReset = () => {
    // Reset all fields to initial values (empty/default) using Ant Design API.
    form.resetFields();
    // Inform the user that the form was reset.
    message.info('Form has been reset');
  };

  // Return an object exposing the form instance, helpers, and UI configuration
  // so a presentational component can be simple and stateless.
  return {
    navigate,      // navigate function for redirects
    form,          // Ant Design form instance for controlling form programmatically
    uploadProps,   // configuration passed to Upload component for avatar handling
    onFinish,      // submit-success handler
    onFinishFailed,// submit-failure handler (validation errors)
    onReset        // reset handler for clearing the form
  };
}
