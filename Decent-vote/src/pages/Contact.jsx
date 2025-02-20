import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          We'd love to hear from you! Please fill out the form below and we'll get in touch with you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea id="message" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" rows="5"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="mt-4 px-6 py-2 text-lg font-medium text-white bg-emerald-600 rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
