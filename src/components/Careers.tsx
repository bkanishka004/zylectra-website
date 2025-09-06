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

  const positions = [
    {
      value: "App Developer",
      label: "App Developer",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      value: "AI/ML Engineer", 
      label: "AI/ML Engineer",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of the future of EV intelligence. Help us build the brain that powers smart transportation.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Open Positions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position) => (
              <div key={position.value} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                    {position.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{position.label}</h4>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Hybrid • Part-time/Internship
                </div>
              </div>
            ))}
          </div>
        </div>

        {isSubmittedSuccessfully ? (
          <div className="bg-white rounded-2xl shadow-xl border border-emerald-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
              <p className="text-emerald-100">Thanks for your interest in joining Zylectra.</p>
            </div>
            <div className="px-8 py-6 text-center">
              <p className="text-gray-700">
                Our team will review your application and contact you soon.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-gray-50 to-emerald-50 px-8 py-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Apply Now</h3>
              <p className="text-gray-600 text-center mt-2">Fill out the form below to start your journey with us</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              {/* Name Field */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
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

              {/* Email Field */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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

              {/* Position Field */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
                  </svg>
                  <span>Position Applied For *</span>
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors appearance-none bg-white"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a position</option>
                  {positions.map((position) => (
                    <option key={position.value} value={position.value}>{position.label}</option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Why are you interested in this position? *</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  rows={4}
                  placeholder="Tell us about your passion for EV technology and what excites you about this role..."
                  disabled={isSubmitting}
                />
              </div>

              {/* CV Field */}
              <div className="group">
                <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume Link *</span>
                </label>
                <input
                  type="url"
                  value={formData.cvLink}
                  onChange={(e) => setFormData({ ...formData, cvLink: e.target.value })}
                  placeholder="https://drive.google.com/file/d/your-resume-link"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  required
                  disabled={isSubmitting}
                />
                <p className="text-sm text-gray-500 mt-1">Share a Google Drive, Dropbox, or similar link to your resume</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Submit Application</span>
                  </>
                )}
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