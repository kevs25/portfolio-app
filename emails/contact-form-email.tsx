interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <h1 style={{ color: '#0073e6' }}>Let’s Get Connected!</h1>
    <p>Hi <strong>{name}</strong>,</p>
    <p>
      Thank you for reaching out! I appreciate you taking the time to connect.
      Here’s a quick summary of your message:
    </p>
    
    <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>

    <p>
      I’ll review your message and get back to you as soon as possible.
      In the meantime, feel free to check out my work at 
      <a href="https://skevindaniel.com" style={{ color: '#0073e6', textDecoration: 'none', marginLeft: '5px',  marginRight: '5px' }}>
        my portfolio
      </a> 
      or connect with me on 
      <a href="https://linkedin.com/in/kevindaniel25" style={{ color: '#0073e6', textDecoration: 'none', marginLeft: '5px' }}>
        LinkedIn
      </a>.
    </p>

    <p>Looking forward to our conversation!</p>

    <p>Best regards,</p>
    <p><strong>Kevin Daniel</strong></p>
  </div>
);

export default ContactFormEmail;
