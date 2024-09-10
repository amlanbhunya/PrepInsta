import React, { useState } from 'react';
import UploadNovelForm from './uploadNovelForm';
import NovelList from './NovelList';
import NovelDetails from './NovelDetails';
import '../styles.css';


const App = () => {
  const [novels, setNovels] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [selectedNovel, setSelectedNovel] = useState(null);

  const addNovel = (novel) => {
    setNovels([...novels, novel]);
  };

  const viewNovelDetails = (novel) => {
    setSelectedNovel(novel);
    setCurrentView('details');
  };

  return (
    <div>
      {currentView === 'home' && (
        <div>
          <h1>Novel Blog</h1>
          <button onClick={() => setCurrentView('upload')}>Upload New Novel</button>
          <NovelList novels={novels} onSelectNovel={viewNovelDetails} />
        </div>
      )}

      {currentView === 'upload' && (
        <UploadNovelForm onAddNovel={addNovel} goHome={() => setCurrentView('home')} />
      )}

      {currentView === 'details' && selectedNovel && (
        <NovelDetails novel={selectedNovel} goHome={() => setCurrentView('home')} />
      )}
    </div>
  );
};

export default App;
