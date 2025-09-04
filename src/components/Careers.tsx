import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
    cvLink: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const sendEmailToCompany = async (formData: any) => {
    const templateParams = {
      to_email: 'zylectra.official@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      position: formData.position || 'Not specified',
      message: formData.message || 'No additional message provided',
      cv_link: formData.cvLink || 'No resume link provided',
      subject: `New Job Application from ${formData.name}`,
      reply_to: formData.email
    };

    return emailjs.send(
      'service_qnk95di',
      'template_244j7jz',
      templateParams,
      'SOTgC69s6tm3hBuLD'
    );
  };

  const sendThankYouEmail = async (userEmail: string, userName: string) => {
    const templateParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'Zylectra Team',
      subject: 'Thank you for your application!',
      company_name: 'Zylectra'
    };

    return emailjs.send(
      'service_qnk95di',
      'template_8hdvzeo',
      templateParams,
      'SOTgC69s6tm3hBuLD'
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.cvLink || !formData.position) {
      setSubmissionStatus('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      await sendEmailToCompany(formData);
      await sendThankYouEmail(formData.email, formData.name);
      setSubmissionStatus('Application submitted successfully!');
      setIsSubmittedSuccessfully(true);
      setFormData({
        name: '',
        email: '',
        position: '',
        message: '',
        cvLink: '',
      });
    } catch (error) {
      console.error('Error sending emails:', error);
      setSubmissionStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="careers" className="max-w-2xl mx-auto px-4 py-12">
      
      <h2 className="main-heading text-center mb-6">Join Our Team</h2>

      {isSubmittedSuccessfully ? (
        <div className="text-center sub-heading text-emerald-700 font-medium bg-emerald-50 border border-emerald-200 rounded-lg px-6 py-10 mt-8 shadow-sm animate-fade-in-up">
          Thanks for your response!<br />Our team will review your application and contact you.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="pre-heading block text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
              disabled={isSubmitting}
            />
          </div>

       
          <div>
            <label className="pre-heading block text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
              disabled={isSubmitting}
            />
          </div>

          
          <div>
            <label className="pre-heading block text-gray-700 mb-1">
              Position Applied For *
            </label>
            <select
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
              disabled={isSubmitting}
            >
              <option value="">Select a position</option>
              <option value="App Developer">App Developer</option>
              <option value="AI/ML Engineer">AI/ML Engineer</option>
            </select>
          </div>

          
          <div>
            <label className="pre-heading block text-gray-700 mb-1">
              Why are you interested in this position? *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          {/* CV */}
          <div>
            <label className="pre-heading block text-gray-700 mb-1">
              Resume Link (Google Drive, Dropbox, etc.) *
            </label>
            <input
              type="url"
              value={formData.cvLink}
              onChange={(e) => setFormData({ ...formData, cvLink: e.target.value })}
              placeholder="https://drive.google.com/..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {submissionStatus && (
            <p className="text-center pre-heading text-red-600">{submissionStatus}</p>
          )}
        </form>
      )}
    </div>
  );
}

export default Careers;
