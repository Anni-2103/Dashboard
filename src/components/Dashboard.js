// Dashboard.js
import React from 'react';
import ContentHeader from './ContentHeader';
import Card from './Card'; // Ensure that the Card component is imported
import Chart from './Chart';

const Dashboard = ({ courses }) => { // Ensure that the courses prop is received
  // Filter the courses to get the first three
  const firstThreeCourses = courses.slice(0, 3);

  return (
    <div className="content">
      <ContentHeader />
      {/* Pass the first three courses array as a prop to the Card component */}
      <Card courses={firstThreeCourses} /> {/* Ensure that the courses prop is passed to the Card component */}
      <Chart />
    </div>
  );
}

export default Dashboard;
