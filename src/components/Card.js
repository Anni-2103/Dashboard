// Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ courses }) => {
  return (
    <div className='card--container'>
      {courses.map((course) => ( // Map through all courses
        <Link key={course.id} to={`/courses/${course.id}`} className="card">
          <div className="card--cover">{course.icon}</div>
          <div className="card--title">
            <h2>{course.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
