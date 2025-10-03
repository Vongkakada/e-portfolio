
import React from 'react';
import type { Education, Certificate } from '../types';
import Section from './Section';
import ImageSlideshow from './ImageSlideshow';

const educations: Education[] = [
  {
    degree: 'Completed a Bachelor of Science in Information Technology.',
    institution: 'Cambodian University for Specialties',
    period: '2022 - 2024',
    imageUrls: ['https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/555451823_1358169416311829_2472120701005351006_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAp00ohHBMng5E2hrHZ4yIHXiZQ62C3VEdeJlDrYLdUajJFI1ygH8MZ9jS10qjDV8AXyayucLzOnuGUfMSSKLj&_nc_ohc=SzFZf8vbH38Q7kNvwEzA9qC&_nc_oc=AdnIxX7Q9gVThYuGYFpEzCUkufJiyZ9nqWpvE-kbSoHFZOZ4NIXbDw1G5GTjIHGNnOc&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=pW1BOqUK5OWfCwqH0Ze_VA&oh=00_Afaz3DAwNDvJip81ZyyCMpwvpOOy2IhoHBHnA5iKWo05bA&oe=68E17E32'],
  },
  {
    degree: 'Bachelor of Arts in Mathematics',
    institution: 'National University of CheaSim Kamchaymear, Kampong Cham Campus',
    period: '2019 - 2022',
    imageUrls: ['https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/487450581_4038456703034863_7635011793623442254_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFGoiU_JKeh5PtYIjwyWcoUvE-NxIohHPu8T43EiiEc-4njnpDE6WAM8FhJlUjHV5XDq4UyLW6IDkKXWNqPw92-&_nc_ohc=0XAH7aBMp4MQ7kNvwEDBNYo&_nc_oc=Adnjry5sdoiIpIYRmqUK2THZRxL09D3utEQxK4EZc3IUGgE1jEz2XRxou0dBNw0LsQ4&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=u43bEKWy9_OlI1eWqUcb-w&oh=00_AfYjP57Bhjc6xWfeEixXlKdICMyjP9ttD9Wpyo9lu7pRMQ&oe=68E1812B'],
  },
];

const trainings: Education[] = [
    {
        degree: 'Lead Teacher, Business Idea Competition',
        institution: 'Khmer Enterprise at NUCKKC',
        period: '2025',
        description: 'ចូលរួមធ្វើជាគ្រូដឹកនាំនិសិ្សតចំនួន ៣ក្រុម ចូលរូមប្រកួតប្រជែង គំនិតអាជីវកម្ម នៅសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ ក្រោមការដឹកនាំរបស់ សហគ្រិនខ្មែរ Khmer Enterprise ។',
        imageUrls: [
            'https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/531069505_1308668237931483_8354851879563861586_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH_Pej_rexmrm2EQN9i-cfQ3y8lcMjR5vzfLyVwyNHm_NOxDEw7FeSnGGP4VUOVWh7fMaEL0AM7M1W10qm5tfEb&_nc_ohc=4e5zBftzm3oQ7kNvwFUs-eY&_nc_oc=Adn6_AJ2efnYoEuMkLEB4C1ET046eqKVYitAQcflbwnCnYMNqSycD1BX3By2Brbwq4U&_nc_zt=23&_nc_ht=scontent.fpnh5-5.fna&_nc_gid=pG6oQeN1m9yZoVqugCdXfw&oh=00_AfZe9VApKmmezua7J1aKRvtMBRYQ1YrL8PYEbY1mmX85kw&oe=68E2ADE7',
            'https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/531854044_768638375533945_8548814356554550952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7TfajVDDd9YoDJrVG32QuGMfjWZSuUsoYx-NZlK5SyrbGdE5chwCtoiQCxzIm8EeHTkXfeU76BnuWxjpxsa8r&_nc_ohc=oOUVxQhO_iEQ7kNvwFyGh4t&_nc_oc=Adl9A7fH31dAYmKdFb1mC1KtI6vQOVLfGHL7Wg_HuPVZEfZ87V2XnrwULTv3ruNJIuE&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=uKK6spBDXwGV9VZQb0jn2Q&oh=00_AfYaLDfmrq6yW_Crf8vsQAR2wxCy0_lpNaWb5slhG8M3BQ&oe=68E293DC',
            'https://scontent.fpnh5-6.fna.fbcdn.net/v/t39.30808-6/531600620_768641112200338_9110203466394039373_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKm7bm_W0KOYU8STGcu_c2nSaZwWZYzUadJpnBZljNRrTssCZhIbJ7XCfp2aPhszRG_9wRUeyVhN6XA0eXI1LR&_nc_ohc=TCLBiRZWA8cQ7kNvwGEe9Cl&_nc_oc=AdmTonukBzBYmM1NFOEN_2A4ZicUI4kXAAfd58bvhHbvnH-tG2nZd3VaZxFL_iq9pgI&_nc_zt=23&_nc_ht=scontent.fpnh5-6.fna&_nc_gid=EaLcm4SDQLcsZjYkOdMYwQ&oh=00_AfZkSO2aFOe1xa6HVQOtUV5Q4NhYtgdiEVvdyijs6NN0ww&oe=68E27E75',
            'https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/514865153_738187148579068_2306819686038461857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGn2oITWy8GED2RX4lsteos7FSyBlNx0KrsVLIGU3HQqgGs45uECjSHq_qZxVoGkUrjRJS1Ya6iLCAzASnpJUzy&_nc_ohc=t5bhJIDRZBQQ7kNvwE0Voqx&_nc_oc=Adl_W_EG7DbEy-upaL3ZvEsphQKqHdgUEtq9mZEFvxMqrqu2vbqdZNBuImRPj9Wslms&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=I4m6t6kL2xu2zUW1OyMn4A&oh=00_AfbQBpkAf95xrZiJU10foI9hnVumuHWs2OSq-TmKGQe00A&oe=68E281E1',
            'https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/514380064_738186225245827_1021222613453079829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHuKXEkufddK9_HdoNO37VElZdXEjSDJHOVl1cSNIMkc_1KbrVzQa20IipXXncgwnxXlgMuM4_0Ocvao2sAJrhK&_nc_ohc=f5z_Tl6FvEsQ7kNvwFftjYD&_nc_oc=AdmtDmMeQ_GM59-FqYUp2XpREOn6RLH4xRp5IzNDvQD1XXAPffHgDMuLrTcynxHwRLQ&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=RXATJGufXF7KqsiBHv9UGg&oh=00_Afat4lnTy2QRKkXBN-Cyts9vxhtjHgFYExHrErXJALC4aw&oe=68E2AB4B',
        ],
    },
    {
        degree: 'Programming and Cybersecurity Analysis',
        institution: 'CodeForCambodia.com',
        period: 'Oct 2022 - Nov 2024',
        imageUrls: [
          'https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/461415588_122094950330556193_5438379922088863095_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEq-09tJOBLXIbtLEm_2ljPSsNmDUP_etxKw2YNQ_963AxIWO3J1CP_KH5eNmFm7jj2KDbs6cWV670iHezaC8JK&_nc_ohc=Q2uJpWM1YzMQ7kNvwGcx5FX&_nc_oc=AdkBapKlLSwRihPgApbBYTCuS96FdlWCA2jkI6-jw7ghdo5pIqKQeIXtmB1AdGqKeDc&_nc_zt=23&_nc_ht=scontent.fpnh5-2.fna&_nc_gid=qZtHxu1AQns2z-PA2tgCsQ&oh=00_AfZ_2MPoYTQYJ61xT598CoFFXXb4GtQXZamD3PU5rndIaw&oe=68E2A4AD',
          'https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/472782655_122128352270542013_5926710309541658245_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEiWpJ-ud84w19QppQbsAFZn70He_hxdTOfvQd7-HF1MzUo06H-qNaZKVTkqKe6o0H3eyMGAuNkXX6egKGEJJJx&_nc_ohc=tHLlN42qY7YQ7kNvwEnPD4B&_nc_oc=AdnFuQbzQrk-w_vxMTSJzyb0RU4L4eaY5-NsWbCrHk2aGDgMgKyNkqigcaPlSJRrcIc&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=0And6t6jegHyk4OUNelpnw&oh=00_AfaJFTnY5vM_Pe-iQcTF9VGlzP_VpuTQq-MoadwjwwH18Q&oe=68E29139',
          'https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/472330405_122128267868542013_271310224544130219_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPxdy3B4ixP2X1R_2p8g05kaqFR4HuQTaRqoVHge5BNjPnpbCT3yqCxY1AURS2mTWdSD7sAAc0dh7EUhJCRbkN&_nc_ohc=iueeo1nCUl8Q7kNvwEzR0Gw&_nc_oc=AdnPkmuasqXQX05UgZ-S7_aBxaJ-Zd1n-AjYhFMaDKbo8xqYZ2I-Szd_Ow2csFpWFbg&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=aQ7gy7YZTqDX8qoi1mNZpA&oh=00_Afa3ho3zaNWMaRyU772YPOx_uDcTTpfiGp6Dv3zITjHM2Q&oe=68E2A64A'

        ],
    },
    {
        degree: 'Computer and Graphic Design',
        institution: 'Baktouk Information Technology Center',
        period: 'Jun 2020 - Oct 2022',
        description: `ជាគ្រូបង្រៀនលើកម្រិតសិក្សាដូចជា៖\n
✅ វគ្គកុំព្យូទ័រកម្រិតដំបូង សំរាប់អ្នកទើបតែចាប់ផ្តើមប្រើប្រាស់កុំព្យូទ័រ (Typing English & Khmer, Ms.​Word , Excel, PowerPoint, Internet Email & Telegram)\n
✅ វគ្គ Advance Excel (Excelកម្រិតខ្ពស់)\n
✅ ជំនាញរចនារូបភាព និងក្រាហ្វិចឌីស្យាញ (Adobe photoshop , Adobe Illustrator, CorelDraw)\n
✅ ជំនាញកាត់តវីដេអូ (Adobe Premiere Pro)`,
        imageUrls: [
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_8_2025-10-01_13-55-58.jpg?updatedAt=1759301843408',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_9_2025-10-01_13-55-58.jpg?updatedAt=1759301843224',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_6_2025-10-01_13-55-58.jpg?updatedAt=1759301843174',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_2_2025-10-01_13-55-58.jpg?updatedAt=1759301843035',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_5_2025-10-01_13-55-58.jpg?updatedAt=1759301843029',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_4_2025-10-01_13-55-58.jpg?updatedAt=1759301843003',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_7_2025-10-01_13-55-58.jpg?updatedAt=1759301842850',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_1_2025-10-01_13-55-58.jpg?updatedAt=1759301842838',
          'https://ik.imagekit.io/9qcuiwxwi/image%20for%20portfolio/photo_3_2025-10-01_13-55-58.jpg?updatedAt=1759301842830',
        ],
    },
];

const certifications: Certificate[] = [
    {
      title: 'Gemini Certified University Student',
      issuer: 'Google for Education',
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/162377962?key=8e8f02372c40b2349845b03d5004cb89cc989b10bad714dcdb17304ae8fe190f',
      credentialUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/162377962?key=8e8f02372c40b2349845b03d5004cb89cc989b10bad714dcdb17304ae8fe190f',
    },
    {
      title: 'Gemini Certified Educator',
      issuer: 'Google for Education',
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/162466017?key=0a1db3dd7da34131327a24455ecb19ddd672b7bc5b41e84480f1d4962b326343',
      credentialUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/162466017?key=0a1db3dd7da34131327a24455ecb19ddd672b7bc5b41e84480f1d4962b326343',
    },
  ];

// Card for formal education (compact layout)
const EducationCard: React.FC<{ edu: Education }> = ({ edu }) => (
  <div className="p-6 bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm hover:border-white/20 transition-all flex flex-col sm:flex-row items-center gap-6">
    {edu.imageUrls && edu.imageUrls.length > 0 && (
      <ImageSlideshow urls={edu.imageUrls} alt={edu.institution} className="w-20 h-20 rounded-lg" />
    )}
    <div className="flex-grow flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1 sm:gap-4">
      <div>
        <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
        <p className="text-md text-purple-400">{edu.institution}</p>
        {edu.description && (
          <p className="mt-2 text-sm text-gray-400">{edu.description}</p>
        )}
      </div>
      <p className="text-sm text-gray-500 sm:whitespace-nowrap flex-shrink-0 mt-2 sm:mt-0">{edu.period}</p>
    </div>
  </div>
);

// Card for extra training (large image-top layout)
const TrainingCard: React.FC<{ train: Education }> = ({ train }) => (
    <div className="bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm overflow-hidden transition-all hover:border-white/20">
      {train.imageUrls && train.imageUrls.length > 0 && (
        <ImageSlideshow 
          urls={train.imageUrls} 
          alt={train.institution} 
          className="w-full h-64 md:h-80"
        />
      )}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-100">{train.degree}</h3>
          <p className="text-sm text-gray-500 sm:whitespace-nowrap flex-shrink-0">{train.period}</p>
        </div>
        <p className="text-md text-purple-400 mb-4">{train.institution}</p>
        {train.description && (
          <p className="text-sm text-gray-400">{train.description}</p>
        )}
      </div>
    </div>
  );

  const CertificateCard: React.FC<{ cert: Certificate }> = ({ cert }) => (
    <a 
      href={cert.credentialUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20"
      aria-label={`View certificate for ${cert.title}`}
    >
      <img 
        src={cert.imageUrl} 
        alt={cert.title} 
        className="w-full h-auto object-contain bg-black"
      />
      <div className="p-4">
        <h4 className="font-bold text-lg text-gray-100">{cert.title}</h4>
        <p className="text-sm text-purple-400">{cert.issuer}</p>
      </div>
    </a>
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
              <TrainingCard key={index} train={train} />
            ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <CertificateCard key={index} cert={cert} />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
