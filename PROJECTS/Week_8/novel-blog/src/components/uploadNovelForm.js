import React, { useState } from 'react';

const UploadNovelForm = ({ onAddNovel, goHome }) => {
  const [novel, setNovel] = useState({
    title: '',
    author: '',
    genre: '',
    summary: '',
    imageUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNovel(novel);
    goHome();
  };

  const handleChange = (e) => {
    setNovel({ ...novel, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload a New Novel</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre" onChange={handleChange} required />
      <textarea name="summary" placeholder="Summary" onChange={handleChange} required></textarea>
      <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Upload Novel</button>
      <button type="button" onClick={goHome}>Cancel</button>
    </form>
  );
};

export default UploadNovelForm;
