// Courses.js
import React, { useState } from 'react';
import ContentHeader from './ContentHeader';
import Card from './Card';
import { BiLogoHtml5, BiLogoAndroid, BiBuilding, BiCodeAlt, BiCodeCurly, BiCloud, BiGame, BiLink, BiMobile, BiShield, BiDollarCircle, BiBrain } from 'react-icons/bi';

function Courses() {
  const [searchQuery, setSearchQuery] = useState('');

  // Define the courses array
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      icon: <BiLogoHtml5 />,
      details: ['HTML', 'CSS', 'JavaScript'],
      videos: ['Introduction to HTML', 'Styling with CSS', 'JavaScript Basics'],
    },
    {
      id: 2,
      title: 'App Development',
      icon: <BiLogoAndroid />,
      details: ['Android Development', 'iOS Development'],
      videos: ['Getting Started with Android', 'iOS App Development Basics'],
    },
    {
      id: 3,
      title: 'UX & UI Design',
      icon: <BiBuilding />,
      details: ['User Experience Design', 'User Interface Design'],
      videos: ['UX Principles', 'UI Design Fundamentals'],
    },
    {
      id: 4,
      title: 'Data Science',
      icon: <BiCodeAlt />,
      details: ['Data Analysis', 'Machine Learning', 'Data Visualization'],
      videos: ['Introduction to Data Science', 'Machine Learning Basics'],
    },
    {
      id: 5,
      title: 'Digital Marketing',
      icon: <BiDollarCircle />,
      details: ['SEO', 'SEM', 'Social Media Marketing'],
      videos: ['Introduction to Digital Marketing', 'SEO Fundamentals'],
    },
    {
      id: 6,
      title: 'Cybersecurity',
      icon: <BiShield />,
      details: ['Network Security', 'Ethical Hacking', 'Cyber Defense'],
      videos: ['Introduction to Cybersecurity', 'Ethical Hacking Fundamentals'],
    },
    {
      id: 7,
      title: 'Python Programming',
      icon: <BiCodeCurly />,
      details: ['Python Basics', 'Object-Oriented Programming', 'Web Development with Python'],
      videos: ['Introduction to Python', 'Python OOP Concepts', 'Python Web Development'],
    },
    {
      id: 8,
      title: 'Mobile App Design',
      icon: <BiMobile />,
      details: ['UI/UX Principles', 'Mobile Design Patterns', 'Wireframing and Prototyping'],
      videos: ['UI/UX Fundamentals', 'Mobile Design Best Practices', 'Wireframing Tools'],
    },
    {
      id: 9,
      title: 'Cloud Computing',
      icon: <BiCloud />,
      details: ['Introduction to Cloud', 'Cloud Deployment Models', 'Cloud Service Models'],
      videos: ['Cloud Basics', 'Cloud Deployment Strategies', 'Cloud Service Providers'],
    },
    {
      id: 10,
      title: 'Game Development',
      icon: <BiGame />,
      details: ['Game Design Principles', 'Game Development Tools', 'Game Publishing'],
      videos: ['Introduction to Game Design', 'Game Development Software', 'Game Marketing Strategies'],
    },
    {
      id: 11,
      title: 'Blockchain Technology',
      icon: <BiLink />,
      details: ['Blockchain Fundamentals', 'Decentralized Applications', 'Smart Contracts'],
      videos: ['Introduction to Blockchain', 'DApp Development', 'Smart Contract Programming'],
    },
    {
      id: 12,
      title: 'Artificial Intelligence',
      icon: <BiBrain />,
      details: ['AI Fundamentals', 'Machine Learning Algorithms', 'Deep Learning'],
      videos: ['Introduction to AI', 'ML Basics', 'Deep Learning Concepts'],
    },
  ];
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = searchQuery
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  return (
    <div>
      <ContentHeader />
      <div>
        <input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* Pass the filteredCourses array to the Card component */}
      <Card courses={filteredCourses} />
    </div>
  );
}

export default Courses;
