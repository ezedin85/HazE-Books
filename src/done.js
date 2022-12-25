import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState([])
  const [input, setInput] = useState("")

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyB80LDCE5ACBHkfcaiz-Drv7d_xzVihkLk&maxResults=10")
    .then(data => {
      setResult(data.data.items)
    })
  }
  let mapped;
  return (
    <div>
      <div>
        <input 
          type="text"
          value={input}
          onChange={handleChange}
        />
        <input 
          type="submit"
          onClick={handleSubmit}
        />
      </div>
      
      <div className='books'>
        {
          mapped = result.map((book)=>{
            return <div className='book' key={book.volumeInfo.title}>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="not found"/>
            <p>author: {book.volumeInfo.authors[0]}</p>
            </div>
          })
        }
      </div>

    </div>
  );
}

export default App;
