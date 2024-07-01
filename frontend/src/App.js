import React, { useState } from 'react';
import { executeCode } from './api';

function App() {
  const [language, setLanguage] = useState('nodejs');
  const [script, setScript] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await executeCode(language, script);
      setResult(response.data);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <div className="App">
      <h1>Online Code Judge</h1>
      <form onSubmit={handleSubmit}>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="nodejs">Node.js</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="ruby">Ruby</option>
        </select>
        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Enter your code here"
        />
        <button type="submit">Execute</button>
      </form>
      {result && (
        <div>
          <h2>Output</h2>
          <pre>{result.output}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
