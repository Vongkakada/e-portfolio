
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = 'bg-white' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
