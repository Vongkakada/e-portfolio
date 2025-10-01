
import React from 'react';
import type { Education } from '../types';
import Section from './Section';

const educations: Education[] = [
  {
    degree: 'Completed a Bachelor of Science in Information Technology.',
    institution: 'Cambodian University for Specialties',
    period: '2022 - 2024',
    imageUrl: 'https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/555451823_1358169416311829_2472120701005351006_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAp00ohHBMng5E2hrHZ4yIHXiZQ62C3VEdeJlDrYLdUajJFI1ygH8MZ9jS10qjDV8AXyayucLzOnuGUfMSSKLj&_nc_ohc=SzFZf8vbH38Q7kNvwEzA9qC&_nc_oc=AdnIxX7Q9gVThYuGYFpEzCUkufJiyZ9nqWpvE-kbSoHFZOZ4NIXbDw1G5GTjIHGNnOc&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=pW1BOqUK5OWfCwqH0Ze_VA&oh=00_Afaz3DAwNDvJip81ZyyCMpwvpOOy2IhoHBHnA5iKWo05bA&oe=68E17E32',
  },
  {
    degree: 'Bachelor of Arts in Mathematics',
    institution: 'National University of CheaSim Kamchaymear, Kampong Cham Campus',
    period: '2019 - 2022',
    imageUrl: 'https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/487450581_4038456703034863_7635011793623442254_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFGoiU_JKeh5PtYIjwyWcoUvE-NxIohHPu8T43EiiEc-4njnpDE6WAM8FhJlUjHV5XDq4UyLW6IDkKXWNqPw92-&_nc_ohc=0XAH7aBMp4MQ7kNvwEDBNYo&_nc_oc=Adnjry5sdoiIpIYRmqUK2THZRxL09D3utEQxK4EZc3IUGgE1jEz2XRxou0dBNw0LsQ4&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=u43bEKWy9_OlI1eWqUcb-w&oh=00_AfYjP57Bhjc6xWfeEixXlKdICMyjP9ttD9Wpyo9lu7pRMQ&oe=68E1812B',
  },
];

const trainings: Education[] = [
    {
        degree: 'Programming and Cybersecurity Analysis',
        institution: 'CodeForCambodia.com',
        period: 'Oct 2022 - Nov 2024',
        imageUrl: 'https://picsum.photos/seed/training1/200/200',
    },
    {
        degree: 'Computer and Graphic Design',
        institution: 'Baktouk Information Technology Center',
        period: 'Jun 2020 - Oct 2022',
        imageUrl: 'https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/481239190_1327710302001465_825552311202115028_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGXBffLARNgqdJAA1av5DtDBC93URMaR2MEL3dRExpHY9uxWVfRHCwR08RLYW7CUjfGXjP-Jp-GMphAMJW-VmNl&_nc_ohc=miq2v3zMe64Q7kNvwFO0Kfy&_nc_oc=Adm_Fzn4JN7otZJlx9RM2bsB5Ys_vKquPnnSvOwldQl83tlsQw4dX5O-EL7kwTYZpwE&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=gzelMtqYq5f5tX-6d_bf3A&oh=00_AfbL3agDb1o6SG6YakDWP-6ZYtes_m4B5qFymgnrzlTIQw&oe=68E292C4',
    }
];

const EducationCard: React.FC<{ edu: Education }> = ({ edu }) => (
  <div className="p-6 bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm hover:border-white/20 transition-all flex items-center gap-6">
    {edu.imageUrl && (
      <img src={edu.imageUrl} alt={edu.institution} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
    )}
    <div className="flex-grow flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1 sm:gap-4">
      <div>
        <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
        <p className="text-md text-purple-400">{edu.institution}</p>
      </div>
      <p className="text-sm text-gray-500 sm:whitespace-nowrap flex-shrink-0">{edu.period}</p>
    </div>
  </div>
);

const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education & Training">
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">Extra Training</h3>
        <div className="space-y-8">
            {trainings.map((train, index) => (
              <EducationCard key={index} edu={train} />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
