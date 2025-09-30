import React from 'react';
import Section from './Section';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-gray-50">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
       <div className="text-center mt-12">
        <p className="text-gray-600">Or reach me directly at:</p>
        <a href="mailto:vong.kakada@example.com" className="text-lg font-semibold text-indigo-600 hover:underline">vong.kakada@example.com</a>
      </div>
    </section>
  );
};

export default ContactSection;