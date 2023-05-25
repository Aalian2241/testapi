import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [apiresponse, setapiresponse] = useState("");

  useEffect(() => {
    setInputValue(text);
  }, [text]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      setText(inputValue);

      console.log(inputValue)
      const response = await axios.post('http://localhost:3000/download/youtube', { text: inputValue });
      setapiresponse(response)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Send Request</button>
      {apiresponse}
    </div>
  );
};


export default App;
