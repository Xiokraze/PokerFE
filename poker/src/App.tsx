import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5285/hello') // C# backend endpoint
      .then(res => res.text())
      .then(setMessage)
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Frontend (CRA + TS)</h1>
      <p>Message from Backend: {message || 'Loading...'}</p>
    </div>
  );
}

export default App;
