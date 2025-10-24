// Environment configuration
export const ENV_CONFIG = {
  // EmailJS Configuration
  EMAILJS: {
    SERVICE_ID_CTA: import.meta.env.VITE_EMAILJS_SERVICE_ID_CTA,
    SERVICE_ID_CAREERS: import.meta.env.VITE_EMAILJS_SERVICE_ID_CAREERS,
    TEMPLATES: {
      ADMIN: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
      USER_CONFIRMATION: import.meta.env.VITE_EMAILJS_TEMPLATE_USER_CONFIRMATION,
      HACKATHON_SIGNUP: import.meta.env.VITE_EMAILJS_TEMPLATE_HACKATHON_SIGNUP,
      THANKYOU: import.meta.env.VITE_EMAILJS_TEMPLATE_THANKYOU,
    },
    PUBLIC_KEYS: {
      CTA: import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CTA,
      CAREERS: import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CAREERS,
    },
  },
  
  // Company Configuration
  COMPANY: {
    EMAIL: import.meta.env.VITE_COMPANY_EMAIL,
  },
  
  // External Services
  GOOGLE_SHEETS_URL: import.meta.env.VITE_GOOGLE_SHEETS_URL,
} as const;

// Validation function to check if all required environment variables are set
export const validateEnvConfig = () => {
  const requiredVars = [
    'VITE_EMAILJS_SERVICE_ID_CTA',
    'VITE_EMAILJS_SERVICE_ID_CAREERS',
    'VITE_EMAILJS_TEMPLATE_ADMIN',
    'VITE_EMAILJS_TEMPLATE_USER_CONFIRMATION',
    'VITE_EMAILJS_TEMPLATE_HACKATHON_SIGNUP',
    'VITE_EMAILJS_TEMPLATE_THANKYOU',
    'VITE_EMAILJS_PUBLIC_KEY_CTA',
    'VITE_EMAILJS_PUBLIC_KEY_CAREERS',
    'VITE_COMPANY_EMAIL',
    'VITE_GOOGLE_SHEETS_URL',
  ];

  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    return false;
  }
  
  return true;
};