import React from 'react';

const NovelList = ({ novels, onSelectNovel }) => {
  return (
    <div>
      <h2>Novel List</h2>
      {novels.length === 0 ? (
        <p>No novels available.</p>
      ) : (
        <ul>
          {novels.map((novel, index) => (
            <li key={index}>
              <h3>{novel.title}</h3>
              <p>by {novel.author}</p>
              <button onClick={() => onSelectNovel(novel)}>View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NovelList;
