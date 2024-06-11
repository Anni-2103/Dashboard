import React from 'react';

const CourseDetails = ({ course }) => {
  if (!course) {
    return <div>No course details available</div>;
  }

  return (
    <div className="course-details">
      <h3>{course.title}</h3>
      <div className="course-icon">{course.icon}</div>
      <p>{course.description}</p>
      <h4>Topics Covered:</h4>
      <ul>
        {course.topics && course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <h4>Videos:</h4>
      <ul>
        {course.videos && course.videos.map((video, index) => (
          <li key={index}>{video}</li>
        ))}
      </ul>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
      <p><strong>Reviews:</strong> {course.reviews}</p>
      <p><strong>Enrollment Options:</strong> {course.enrollmentOptions}</p>
    </div>
  );
};

export default CourseDetails;
