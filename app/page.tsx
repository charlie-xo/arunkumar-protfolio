"use client";

// Welcome to your new portfolio!
// This is a complete, single-file component for your Next.js portfolio.
// You can copy-paste this code into your `app/page.tsx` file.
// Make sure you have Next.js and Tailwind CSS setup.
// To use icons, run: npm install lucide-react

import React, { useState, ReactNode } from 'react'; // ReactNode-ah import panniyachu
// import Image from 'next/image'; // Intha line-ah neekiyachu. Build error-ah sari seiya.

// You can install lucide-react for icons: npm install lucide-react
import { Github, Linkedin, Mail, Phone, Award, Briefcase, Music, Star } from 'lucide-react';

// --- Data from your Resume ---
const portfolioData = {
  name: "ARUNKUMAR R",
  profilePicture: "/arun-profile.jpg", 
  summary: "A self-driven and detail-oriented recent M.Sc. Information Technology graduate with practical skills in developing dynamic web applications using React.js and other modern front-end technologies. Proficient in problem-solving and user-centric design. Eager to apply academic knowledge and project-based skills to a challenging entry-level role in a growth-driven organization.",
  contact: {
    email: "arunkumarr09032003@gmail.com",
    phone: "+91 90256 04721",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/charlie-xo?tab=packages",
  },
  skills: {
    technical: ["HTML", "CSS", "JavaScript (ES6)", "React", "Next.js", "Supabase", "Figma", "Python", "MySQL"],
    soft: ["Adaptability", "Problem Solving", "Team Collaboration", "Decision Making"],
  },
  projects: [
    {
      title: "Uzhavar Sandhai - E-commerce App",
      description: "Developed a full-stack web application using Next.js and Supabase to create a digital marketplace for farmers. Implemented features for product listing, user authentication, and a shopping cart.",
      liveLink: "#",
    },
    {
      title: "Notes Web Application",
      description: "Designed and developed a secure notes web application using Next.js and Supabase. Implemented user authentication to allow users to create, manage, and save their personal notes privately.",
      liveLink: "#",
    },
    {
      title: "Ecommerce Website",
      description: "Created a functional e-commerce site using HTML, CSS, JavaScript, and MySQL, focusing on a clean user interface.",
    },
    {
      title: "Text-to-Image Creation",
      description: "Built an application that leverages the DALL-E API to generate images from textual descriptions.",
    },
  ],
  education: [
    {
      degree: "Master of Science in Information Technology",
      institution: "Hindusthan College of Arts and Science, Coimbatore",
      period: "2023-2025",
      cgpa: "7.9",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Erode Arts and Science College, Erode",
      period: "2020-2023",
      cgpa: "7.5",
    },
  ],
  favoriteSong: {
    title: "Billie Jean", 
    mp3Url: "/arun-song.mp3", 
  }
};

// --- TypeScript Interfaces for Props ---
// Intha types add pannathunala antha error varathu
interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

interface SkillBadgeProps {
  skill: string;
}

// --- Reusable Components ---
const Section = ({ id, title, icon, children }: SectionProps) => (
  <section id={id} className="py-12 md:py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-white ml-4">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span className="bg-gray-700 text-teal-300 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full">{skill}</span>
);

// --- Main Page Component ---
export default function PortfolioPage() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
    setShowPhone(false);
  };

  const handlePhoneClick = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      
      <header className="bg-gray-800 text-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Image component-ah maathi <img> tag use panniyachu */}
          <img
            src={portfolioData.profilePicture}
            alt={portfolioData.name}
            width={160}
            height={160}
            className="rounded-full mx-auto ring-4 ring-teal-500 shadow-lg"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src='https://placehold.co/160x160/1a202c/4fd1c5?text=AR'; }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6">{portfolioData.name}</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">{portfolioData.summary}</p>
          
          <div className="flex justify-center items-center space-x-6 mt-8">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Github size={28} />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <button onClick={handleEmailClick} className="text-gray-300 hover:text-teal-400 transition-colors">
              <Mail size={28} />
            </button>
            <button onClick={handlePhoneClick} className="text-gray-300 hover:text-teal-400 transition-colors">
              <Phone size={28} />
            </button>
          </div>

          <div className="mt-6 text-lg text-teal-300 transition-all duration-300 h-8">
            {showEmail && <p>{portfolioData.contact.email}</p>}
            {showPhone && <p>{portfolioData.contact.phone}</p>}
          </div>

        </div>
      </header>

      <main>
        <Section id="skills" title="Skills" icon={<Star className="text-teal-400" size={32} />}>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
            <div className="flex flex-wrap">
              {portfolioData.skills.technical.map(skill => <SkillBadge key={skill} skill={skill} />)}
            </div>
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Soft Skills</h3>
            <div className="flex flex-wrap">
              {portfolioData.skills.soft.map(skill => <SkillBadge key={skill} skill={skill} />)}
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects" icon={<Briefcase className="text-teal-400" size={32} />}>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-500/20 hover:scale-105 transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-3 flex-grow">{project.description}</p>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-semibold mt-4 self-start">
                    View Project &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" icon={<Award className="text-teal-400" size={32} />}>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-gray-300 mt-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.period} | CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="song" title={portfolioData.favoriteSong.title} icon={<Music className="text-teal-400" size={32} />}>
          <div className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
             <audio controls className="w-full">
              <source src={portfolioData.favoriteSong.mp3Url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </Section>
      </main>

      <footer className="bg-gray-800 text-center py-8 px-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
