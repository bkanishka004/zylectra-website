// Email template configurations for EmailJS

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_zylectra',
  COMPANY_TEMPLATE_ID: 'template_company',
  THANKYOU_TEMPLATE_ID: 'template_thankyou',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};


// Template for company notification email
export const COMPANY_EMAIL_TEMPLATE = `
Subject: New Job Application from {{from_name}}

Dear Zylectra Team,

You have received a new job application with the following details:

Name: {{from_name}}
Email: {{from_email}}
Position: {{position}}
CV/Resume: {{cv_filename}}

Message from applicant:
{{message}}

Please review the application and respond accordingly.

Best regards,
Zylectra Careers System
`;

// Template for thank you email to applicant
export const THANKYOU_EMAIL_TEMPLATE = `
Subject: Thank you for your application to Zylectra!

Dear {{to_name}},

Thank you for your interest in joining the Zylectra team! We have successfully received your application and our team will review it carefully.

Here's what happens next:
• Our hiring team will review your application within 3-5 business days
• If your profile matches our requirements, we'll reach out to schedule an interview
• We'll keep you updated throughout the process

We appreciate your interest in revolutionizing the EV industry with us. If you have any questions, feel free to reach out to us at hello@zylectra.com.

Best regards,
The Zylectra Team

---
Zylectra - Powering the Intelligence Layer of EV Infrastructure
Based at Venture Lab, Thapar Institute of Engineering & Technology
`;

// Instructions for EmailJS setup
export const EMAILJS_SETUP_INSTRUCTIONS = `
To set up EmailJS for the careers form:

1. Create an account at https://www.emailjs.com/
2. Create a new service (Gmail, Outlook, etc.)
3. Create two email templates:
   - One for company notifications (when someone applies)
   - One for thank you emails to applicants
4. Replace the placeholder values in EMAIL_CONFIG with your actual:
   - Service ID
   - Template IDs
   - Public Key
5. Update the template content to match your needs

Template Variables Available:
- {{from_name}} - Applicant's name
- {{from_email}} - Applicant's email
- {{to_name}} - Recipient's name
- {{to_email}} - Recipient's email
- {{position}} - Applied position
- {{message}} - Applicant's message
- {{cv_filename}} - CV file name
- {{company_name}} - Company name
`;