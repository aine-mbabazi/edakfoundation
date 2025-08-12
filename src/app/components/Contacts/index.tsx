"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contacts = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>(''); // 'success' or 'error'
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // In a real application, you would send this data to a backend.
      // For this example, we'll just simulate a submission.
      console.log('Form submitted:', formData);
      setMessage('Thank you for your message! We will get back to you soon.');
      setMessageType('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000); // Clear message after 5 seconds
    };
  
    return (
      <section id="contact" className="py-16 bg-[#F8F8F8] rounded-xl shadow-inner mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 font-montserrat">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-montserrat">Get in Touch</h3>
              <div className="space-y-6 text-gray-700 font-open-sans">
                <div className="flex items-center">
                  <MapPin size={24} className="text-[#4CAF50] mr-4" />
                  <p>Karamoja, Uganda</p>
                </div>
                <div className="flex items-center">
                  <PhoneCall size={24} className="text-[#4CAF50] mr-4" />
                  <p>+256 768 660867</p>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="text-[#4CAF50] mr-4" />
                  <p>jlorika@gmail.com</p>
                </div>
                <p className="mt-6 text-sm">
                  Feel free to reach out to us for partnerships, volunteering, or any inquiries.
                </p>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-montserrat">Send Us a Message</h3>
              {message && (
                <div className={`p-4 mb-4 rounded-md ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-open-sans">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm font-open-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-open-sans">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm font-open-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-open-sans">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm font-open-sans"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#4CAF50] focus:ring-opacity-50 font-montserrat"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contacts;