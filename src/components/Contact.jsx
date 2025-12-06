import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Your name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!formData.message.trim()) newErrors.message = 'A message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Placeholder for actual form submission logic
      console.log('Form data submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Headline and Intro */}
        <div className="text-center md:text-left space-y-4 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-normal">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
            Reach out to us today. We're eager to hear your ideas and discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="order-1 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Send Your Inquiry
            </h3>

            {submitSuccess && (
              <div className="p-4 mb-6 text-base font-medium text-white bg-indigo-600 rounded-xl transition-all duration-200" role="alert">
                Thank you! Your message has been sent successfully. We will respond shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-base text-gray-800 font-medium leading-normal">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  aria-label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 text-gray-900 focus:border-indigo-600 focus:ring-indigo-600 transition-colors duration-200"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-base text-gray-800 font-medium leading-normal">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  aria-label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 text-gray-900 focus:border-indigo-600 focus:ring-indigo-600 transition-colors duration-200"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-base text-gray-800 font-medium leading-normal">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  aria-label="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 text-gray-900 focus:border-indigo-600 focus:ring-indigo-600 transition-colors duration-200"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Illustration */}
          <div className="order-2 md:order-2 flex justify-center md:justify-start pt-6 md:pt-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="An illustration of a person working remotely, representing customer support and communication."
              className="w-full h-auto object-cover rounded-xl shadow-lg md:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;