// src/NovelStoryContainer.js
import "../App.css";
import  { useState } from 'react';
import '../NovelStoryContainer.css'; // Optional for styling

const chapters = [
  { title: "Chapter 1: The Beginning", content: "This is the first chapter of the novel..." },
  { title: "Chapter 2: The Journey", content: "This is the second chapter of the novel..." },
  { title: "Chapter 3: The Conflict", content: "This is the third chapter of the novel..." },
  { title: "Chapter 4: The Resolution", content: "This is the fourth chapter of the novel..." },
  // Add more chapters as needed
];

const NovelStoryContainer = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const nextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  return (
    <div className="novel-container">
      <h1>Novel Story</h1>
      <div className="chapter-container">
        <h2>{chapters[currentChapterIndex].title}</h2>
        <p>{chapters[currentChapterIndex].content}</p>
      </div>

      <div className="navigation-buttons">
        <button onClick={prevChapter} disabled={currentChapterIndex === 0}>
          Previous
        </button>
        <button onClick={nextChapter} disabled={currentChapterIndex === chapters.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NovelStoryContainer;
