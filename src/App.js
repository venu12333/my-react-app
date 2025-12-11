import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Weather from './components/Weather/Weather';
import Todo from './components/Todo/Todo';

function App() {
  const [activeTab, setActiveTab] = useState('calculator'); // Default active tab

  const renderTabContent = () => {
    switch (activeTab) {
      case 'calculator':
        return <Calculator />; 
      case 'weather':
        return <Weather />; 
      case 'todo':
        return <Todo />;
      default:
        return <Calculator />; // Fallback to Calculator
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Application</h1>
        <nav className="tab-nav">
          <button 
            className={`tab-button ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            Calculator
          </button>
          <button 
            className={`tab-button ${activeTab === 'weather' ? 'active' : ''}`}
            onClick={() => setActiveTab('weather')}
          >
            Weather
          </button>
          <button 
            className={`tab-button ${activeTab === 'todo' ? 'active' : ''}`}
            onClick={() => setActiveTab('todo')}
          >
            Todo List
          </button>
        </nav>
      </header>
      <main className="tab-content">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;
