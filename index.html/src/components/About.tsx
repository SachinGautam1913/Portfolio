import React from 'react';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import img from "./../Images/sachin.jpg"
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img 
              src={img}
              alt="Sachin" 
               className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Front-end Developer & Web Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate front-end developer with a keen eye for design and user experience. 
              I specialize in creating responsive, accessible, and performant web applications that 
              provide exceptional user experiences across all devices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              With a background in both design and development, I bridge the gap between aesthetics and 
              functionality, ensuring that websites not only look great but also perform flawlessly.
              I'm constantly exploring new technologies and techniques to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900 mr-3">
                  <User className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                  <p className="font-medium text-gray-900 dark:text-white">Sachin</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900 mr-3">
                  <Calendar className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="font-medium text-gray-900 dark:text-white">1+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900 mr-3">
                  <MapPin className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900 mr-3">
                  <Briefcase className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
                  <p className="font-medium text-gray-900 dark:text-white">Available</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;