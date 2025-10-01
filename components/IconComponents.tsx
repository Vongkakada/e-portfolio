import React from 'react';

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Facebook</title>
    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/>
  </svg>
);

export const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Telegram</title>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.493.493 0 0 1 .193.437c-.01.21-.082.413-.16.604l-2.144 10.012c-.104.482-.354.602-.702.382l-3.32-2.454-1.614 1.554a.63.63 0 0 1-.504.242l.226-3.394 6.138-5.556c.27-.244-.06-.378-.412-.132l-7.58 4.798-3.31-1.033c-.476-.148-.482-.472.092-.704l12.122-4.66z"/>
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>TikTok</title>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.75-1.77-1.02-.75-1.85-1.66-2.5-2.65-.6-.89-1.04-1.86-1.29-2.86-.32-1.26-.42-2.58-.41-3.89.01-1.67.23-3.34.61-4.96.25-1.05.59-2.08.98-3.09.43-1.11.96-2.19 1.58-3.23.6-.99 1.28-1.92 2.03-2.79.89-1.02 1.92-1.89 3.02-2.61.99-.64 2.05-1.15 3.16-1.52.88-.3 1.8-.49 2.74-.59.23-.02.47-.02.7-.02zM7.99 6.22c.01 1.11.02 2.21.01 3.32 0 .5-.16.96-.41 1.38-.26.43-.61.81-1.03 1.09-.58.38-1.25.61-1.93.65-.68.04-1.35-.11-1.95-.43-.59-.32-1.12-.76-1.55-1.28-.41-.5-.73-1.06-.94-1.65-.2-.58-.3-1.19-.29-1.8.01-.68.13-1.35.35-1.98.17-.5.41-.98.7-1.42.28-.43.62-.82 1-1.16.42-.37.9-.68 1.41-.91.55-.24 1.13-.39 1.73-.42.69-.03 1.37.12 1.98.45.64.34 1.2.8 1.63 1.36.43.56.74 1.2.92 1.87.13.48.21 1.01.21 1.53z"/>
    </svg>
);


// Skill Icons
export const PedagogyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Pedagogy</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);

export const ComputerScienceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Computer Science</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);

export const SoftwareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Software</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
);

export const HardwareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Hardware & Networking</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h6a2 2 0 012 2v4m-6 6H5a2 2 0 01-2-2v-4m6 6h6a2 2 0 002-2v-4m-6 6v6m0-6H9m3 0h3m-3 0V9m0 6V9m0-6h.01M9 12h.01M15 12h.01M12 9h.01M12 15h.01" /></svg>
);

export const LanguagesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Languages</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 13-4-4H3v-2h6L9 9m12 8a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);