
import React from 'react';
import Section from './Section';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-black/20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-400 mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-lg shadow-lg border border-white/10 backdrop-blur-sm">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 bg-gray-800/50 border-gray-700 rounded-md placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 bg-gray-800/50 border-gray-700 rounded-md placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 bg-gray-800/50 border-gray-700 rounded-md placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" placeholder="Message"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all transform hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
       <div className="text-center mt-12">
        <p className="text-gray-400">Or reach me directly at:</p>
        <a href="mailto:vongkakada0@gmail.com" className="text-lg font-semibold text-purple-400 hover:underline">vongkakada0@gmail.com</a>
      </div>
    </Section>
  );
};

export default ContactSection;
