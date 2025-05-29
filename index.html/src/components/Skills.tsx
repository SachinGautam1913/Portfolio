import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Database, LineChart } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

const Skills: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const frontendSkills: Skill[] = [
    { name: 'HTML5/CSS3', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 90 },
  ];

  const designSkills: Skill[] = [
    { name: 'UI/UX Design', percentage: 65 },
    { name: 'Figma', percentage: 70 },
    { name: 'Adobe XD', percentage: 50 },
    { name: 'Responsive Design', percentage: 90 },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 70 },
    { name: 'Express', percentage: 65 },
    { name: 'MongoDB', percentage: 60 },
    { name: 'RESTful APIs', percentage: 75 },
  ];

  const otherSkills: Skill[] = [
    { name: 'Git/GitHub', percentage: 85 },
    { name: 'Performance Optimization', percentage: 80 },
    { name: 'Accessibility', percentage: 75 },
    { name: 'Testing', percentage: 70 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-teal-600 dark:bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${skill.percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  const SkillCategory = ({ 
    title, 
    skills, 
    icon 
  }: { 
    title: string, 
    skills: Skill[], 
    icon: React.ReactNode 
  }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency levels in various technologies and tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            icon={<Code className="text-teal-600 dark:text-teal-400\" size={24} />} 
          />
          
          <SkillCategory 
            title="Design" 
            skills={designSkills} 
            icon={<Palette className="text-teal-600 dark:text-teal-400\" size={24} />} 
          />
          
          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills} 
            icon={<Database className="text-teal-600 dark:text-teal-400\" size={24} />} 
          />
          
          <SkillCategory 
            title="Other Skills" 
            skills={otherSkills} 
            icon={<LineChart className="text-teal-600 dark:text-teal-400\" size={24} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;