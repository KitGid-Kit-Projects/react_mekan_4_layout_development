import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ContactForm = ({ form, onFinish }) => {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(values) => onFinish(values, form)}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      >
        <Input placeholder="Your full name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      >
        <Input placeholder="your.email@example.com" />
      </Form.Item>

      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: 'Please enter a subject!' }]}
      >
        <Input placeholder="What's this about?" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message!' }]}
      >
        <TextArea 
          rows={4} 
          placeholder="Tell us more about your question or feedback..."
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;