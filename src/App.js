// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BiLogoHtml5, BiLogoAndroid, BiBuilding, BiCodeAlt, BiCodeCurly, BiCloud, BiGame, BiLink, BiMobile, BiShield, BiDollarCircle, BiBrain } from 'react-icons/bi';
import Sidebar from './components/Sidebar.js';
import Dashboard from './components/Dashboard.js';
import Assignment from './components/Resources.js';
import Courses from './components/Courses.js';
import Statistics from './components/Statistics.js';
import CourseDetailsPage from './components/CourseDetailPage.js'; // Import the CourseDetailsPage component
import './styles/App.css';
import Resources from './components/Resources.js';

const App = () => {
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
    // Add more courses here
  ];

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard courses={courses} />} /> {/* Pass the courses array as a prop */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/stats" element={<Statistics />} />
            <Route path="/courses/:courseId" element={<CourseDetailsPage />} /> {/* Route for CourseDetailsPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
