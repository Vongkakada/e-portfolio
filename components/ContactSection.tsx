import React, { useState, useRef } from 'react';
import Section from './Section';

// This lets TypeScript know that window.emailjs exists, as it's loaded from a script tag in index.html
declare global {
  interface Window {
    emailjs: {
      sendForm: (serviceID: string, templateID: string, form: HTMLFormElement, publicKey: string) => Promise<any>;
    };
  }
}

const ContactSection: React.FC = () => {
  // --- IMPORTANT ---
  // API keys are now loaded from environment variables.
  // Create a .env file in the root of your project and add your keys there.
  // See .env.example and README.txt for more details.
  const EMAILJS_SERVICE_ID = process.env.PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.PUBLIC_EMAILJS_PUBLIC_KEY;
  const RECAPTCHA_SITE_KEY = process.env.PUBLIC_RECAPTCHA_SITE_KEY;

  const form = useRef<HTMLFormElement>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Check if the form is configured with actual keys from the .env file
  const isConfigured = 
    EMAILJS_SERVICE_ID && 
    EMAILJS_TEMPLATE_ID && 
    EMAILJS_PUBLIC_KEY;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isConfigured || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setErrorMessage('Contact form is not configured. Please check your .env file and the instructions in README.txt.');
      return;
    }
    
    if (!form.current) return;

    setStatus('sending');
    setErrorMessage('');

    window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setStatus('success');
          setFullName('');
          setEmail('');
          setMessage('');
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus('error');
          setErrorMessage('Oops! Something went wrong. Please try again later.');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-black/20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-400 mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-lg shadow-lg border border-white/10 backdrop-blur-sm">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input 
                type="text" 
                name="full-name" 
                id="full-name" 
                autoComplete="name" 
                className="block w-full shadow-sm py-3 px-4 bg-gray-800/50 border-gray-700 rounded-md placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" 
                placeholder="Full name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                className="block w-full shadow-sm py-3 px-4 bg-gray-800/50 border-gray-700 rounded-md placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="block w-full shadow-sm py-3 px-4 bg-gray-800/50 border-gray-700 rounded-md placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" 
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            {isConfigured && RECAPTCHA_SITE_KEY && (
              <div 
                className="g-recaptcha"
                data-sitekey={RECAPTCHA_SITE_KEY}
                data-size="invisible"
              ></div>
            )}
            <div>
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-center text-green-400">
            Thank you! Your message has been sent successfully.
          </p>
        )}
        {status === 'error' && (
           <p className="mt-4 text-center text-red-400">
            {errorMessage}
          </p>
        )}
      </div>
       <div className="text-center mt-12 space-y-6">
        <div>
          <p className="text-gray-400">Email</p>
          <a href="mailto:vongkakada168@gmail.com" className="text-lg font-semibold text-purple-400 hover:underline">vongkakada168@gmail.com</a>
        </div>
        <div>
          <p className="text-gray-400">Phone</p>
          <a href="tel:+85566700401" className="text-lg font-semibold text-gray-300 hover:text-white">(+855) 66 700 401</a>
        </div>
        <div>
          <p className="text-gray-400">Address</p>
          <p className="text-lg font-semibold text-gray-300">No 12, St 149, Kampong Cham, Cambodia</p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;