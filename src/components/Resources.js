import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/Resources.css';
 

const Resources = () => {
  return (
    <div>
      <ContentHeader />
    <div className="resources">
      <h1>Resources</h1>
      <section className="resources-section">
        <h2>Learning Materials</h2>
        <ul>
          <li><a href="/path/to/lecture-notes.pdf" download>Lecture Notes</a></li>
          <li><a href="/path/to/slides.pdf" download>Slides</a></li>
          <li><a href="/path/to/ebook.pdf" download>eBook</a></li>
          <li><a href="https://www.example.com/article">Relevant Article</a></li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>Study Guides</h2>
        <ul>
          <li><a href="/path/to/syllabus.pdf" download>Syllabus</a></li>
          <li><a href="/path/to/study-guide.pdf" download>Study Guide</a></li>
          <li><a href="/path/to/cheat-sheet.pdf" download>Cheat Sheet</a></li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>Multimedia Content</h2>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">Instructional Video</a></li>
          <li><a href="https://www.examplepodcast.com" target="_blank" rel="noopener noreferrer">Educational Podcast</a></li>
          <li><a href="https://www.example.com/interactive-module" target="_blank" rel="noopener noreferrer">Interactive Module</a></li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>External Links</h2>
        <ul>
          <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Useful Website</a></li>
          <li><a href="https://www.example.com/tool" target="_blank" rel="noopener noreferrer">Online Tool</a></li>
          <li><a href="https://www.exampleforum.com" target="_blank" rel="noopener noreferrer">Discussion Forum</a></li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>Downloadable Content</h2>
        <ul>
          <li><a href="/path/to/software" download>Software</a></li>
          <li><a href="/path/to/template.docx" download>Assignment Template</a></li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>Help and Support</h2>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Information</a></li>
          <li><a href="/tutoring-services">Tutoring Services</a></li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default Resources;
