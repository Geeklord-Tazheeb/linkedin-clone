import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
   
        {/* Header */}
        <Header/>
    
        {/* App body */}
      <div className="app__body">
        
        {/* Sidebar */}
        <Sidebar/>

        {/* Feeds */}
        <Feed/>

        {/* Widgets */}

        </div>
    </div>
  );
}

export default App;
