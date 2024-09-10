import React from 'react';

const NovelDetails = ({ novel, goHome }) => {
  return (
    <div>
      <h2>{novel.title}</h2>
      <p>Author: {novel.author}</p>
      <p>Genre: {novel.genre}</p>
      <p>{novel.summary}</p>
      {novel.imageUrl && <img src={novel.imageUrl} alt={novel.title} />}
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
};

export default NovelDetails;
