import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Webpack App</h1>
      <Button onClick={handleClick}>Click Me!</Button>
    </div>
  );
};

export default App;