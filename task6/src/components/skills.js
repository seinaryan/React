import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";const Skills = () => {
    const skills = [
      { name: "HTML", icon: <FaHtml5 className="text-4xl text-blue-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-4xl text-blue-500" /> },
      { name: "JavaScript", icon: <FaReact className="text-4xl text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-4xl text-blue-500" /> },
      { name: "Database", icon: <FaDatabase className="text-4xl text-blue-500" /> },
    ];
  
    return (
      <div className="bg-blue-300 p-8">
        <h1 className="text-2xl font-bold mb-4">My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default Skills;