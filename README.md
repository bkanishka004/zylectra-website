# Zylectra - EV Intelligence Platform

A modern, responsive landing page for Zylectra, an AI-powered EV optimization platform.

## Features

- 🚗 Modern EV-focused design
- 📱 Fully responsive mobile-first approach
- ⚡ Built with React, TypeScript, and Tailwind CSS
- 🎨 Beautiful animations and micro-interactions
- 📧 Email functionality for career applications
- 🚀 Optimized for performance

## Email Setup for Careers Form

The careers form includes email functionality using EmailJS. To enable this feature:

### 1. Create EmailJS Account
- Sign up at [EmailJS](https://www.emailjs.com/)
- Create a new email service (Gmail, Outlook, etc.)

### 2. Create Email Templates
Create two templates in your EmailJS dashboard:

**Company Notification Template:**
```
Subject: New Job Application from {{from_name}}

Dear Zylectra Team,

You have received a new job application:

Name: {{from_name}}
Email: {{from_email}}
Position: {{position}}
CV/Resume: {{cv_filename}}

Message: {{message}}

Best regards,
Zylectra Careers System
```

**Thank You Template:**
```
Subject: Thank you for your application!

Dear {{to_name}},

Thank you for applying to Zylectra! We have received your application and will review it within 3-5 business days.

Best regards,
The Zylectra Team
```

### 3. Update Configuration
Replace the placeholder values in `src/components/Careers.tsx`:

```typescript
// Replace these with your actual EmailJS configuration
const SERVICE_ID = 'your_service_id';
const COMPANY_TEMPLATE_ID = 'your_company_template_id';
const THANKYOU_TEMPLATE_ID = 'your_thankyou_template_id';
const PUBLIC_KEY = 'your_public_key';
```

### 4. Template Variables
Available variables for your email templates:
- `{{from_name}}` - Applicant's name
- `{{from_email}}` - Applicant's email
- `{{to_name}}` - Recipient's name
- `{{to_email}}` - Recipient's email
- `{{position}}` - Applied position
- `{{message}}` - Applicant's message
- `{{cv_filename}}` - CV file name

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The project is configured for easy deployment to Netlify, Vercel, or any static hosting service.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)
- EmailJS (email functionality)

## License

© 2025 Zylectra. All rights reserved.