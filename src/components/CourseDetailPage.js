// CourseDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetails from './CourseDetails'; // Import the CourseDetails component

const CourseDetailsPage = () => {
  const { courseId } = useParams(); // Get the courseId from URL params
  const [loading, setLoading] = useState(true);
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    // Simulate fetching course details with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        // Mock course details based on courseId
        const mockData = {
          id: courseId,
          title: `Course ${courseId}`,
          description: `Description of Course ${courseId}`,
          // Other course details...
        };
        setCourseDetails(mockData);
        setLoading(false); // Set loading to false once data is fetched
      }, 1000); // Simulate 1 second delay
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup any resources if needed
    };
  }, [courseId]); // Run effect whenever courseId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      <CourseDetails course={courseDetails} />
    </div>
  );
};

export default CourseDetailsPage;
