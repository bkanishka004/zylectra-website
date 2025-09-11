import React, { useState } from 'react';
import emailjs from 'emailjs-com';

type HackathonFormData = {
  name: string;
  email: string;
  github: string;
  branch: string;
};

const Careers: React.FC = () => {
  const [formData, setFormData] = useState<HackathonFormData>({
    name: '',
    email: '',
    github: '',
    branch: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const sendHackathonSignupEmail = async (formData: HackathonFormData) => {
    const templateParams = {
      to_email: 'zylectra.official@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      github: formData.github || 'Not provided',
      branch: formData.branch || 'Not provided',
      subject: `Hackathon Signup from ${formData.name}`,
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
      subject: 'Thank you for signing up!',
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

    if (!formData.name || !formData.email || !formData.github || !formData.branch) {
      setSubmissionStatus('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      await sendHackathonSignupEmail(formData);
      await sendThankYouEmail(formData.email, formData.name);
      setSubmissionStatus('Signed up successfully!');
      setIsSubmittedSuccessfully(true);
      setFormData({ name: '', email: '', github: '', branch: '' });
    } catch (error) {
      console.error('Error sending emails:', error);
      setSubmissionStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Hackathons</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We currently hire only Thapar students via offline hackathons. Show your skills, solve real EV challenges, and get noticed by our team.
          </p>
        </div>

        {/* Hackathon Registration Form */}
        {isSubmittedSuccessfully ? (
          <div className="bg-white rounded-2xl shadow-xl border border-emerald-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Signed Up!</h3>
              <p className="text-emerald-100">We’ll reach out with hackathon details soon.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-emerald-50 px-8 py-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Sign Up for the Next Hackathon</h3>
              <p className="text-gray-600 text-center mt-2">Fill out your details below to participate</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Name */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* GitHub URL */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <span>GitHub Account URL *</span>
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="https://github.com/yourusername"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Branch */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <span>Branch *</span>
                </label>
                <input
                  type="text"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="E.g. ECE, CSE, ME"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up for Hackathon'}
              </button>

              {submissionStatus && (
                <div className={`text-center p-4 rounded-xl ${
                  submissionStatus.includes('successfully') 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  <p className="font-semibold">{submissionStatus}</p>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default Careers;
