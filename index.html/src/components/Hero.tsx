import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Front-end Developer';
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-teal-600 dark:text-teal-400">Sachin</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            {typedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
            Crafting beautiful, responsive web experiences with a passion for clean code and intuitive design and  
             I specialize in crafting visually stunning, user-centric web experiences that merge creativity with functionality. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I design responsive interfaces that work seamlessly across devices. Passionate about staying at the forefront of web technologies, I continuously enhance my skills to deliver innovative solutions. Whether it's creating interactive web applications or optimizing user experiences, I am committed to bringing ideas to life through clean and efficient code.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-teal-600 dark:text-teal-400" size={24} />
      </button>
    </section>
  );
};

export default Hero;