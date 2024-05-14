// AllCourses.jsx

import React from 'react';

function AllCourses() {
  return (
    <div>
      <h2>All Courses</h2>
      <div className="course-cards">
        <div className="course-card">
          <img src="fullstack-image1.jpg" alt="Course 1" />
          <p>Course 1 Description</p>
        </div>
        <div className="course-card">
          <img src="fullstack-image2.jpg" alt="Course 2" />
          <p>Course 2 Description</p>
        </div>
        <div className="course-card">
          <img src="fullstack-image3.jpg" alt="Course 3" />
          <p>Course 3 Description</p>
        </div>
        <div className="course-card">
          <img src="fullstack-image4.jpg" alt="Course 4" />
          <p>Course 4 Description</p>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
