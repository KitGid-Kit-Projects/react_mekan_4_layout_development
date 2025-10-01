import ContactForm from '@/components/ContactPage/ContactForm';
import ContactInfo from '@/components/ContactPage/ContactInfo';
import { useContactForm } from '@/hooks/useContactForm';
import { Card, Typography, Row, Col } from 'antd';
import { Form } from 'antd';


const { Title, Paragraph } = Typography;

const ContactPage = () => {
  const [form] = Form.useForm();
  const { onFinish } = useContactForm();

  return (
    <div style={{ padding: '24px' }}>
      <Title level={1}>Contact Us</Title>
      <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
        Have questions about React Router or this educational app? We'd love to hear from you!
      </Paragraph>

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card title="Send us a Message">
            <ContactForm form={form} onFinish={onFinish} />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <ContactInfo />
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;