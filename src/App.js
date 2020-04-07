import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    
      
    function getImage() {
      fetch('https://spaceimages.herokuapp.com')
        .then(response => response.json())
        .then(data => {setImage(data.hdurl);setText(data.description)});
    }

    useEffect(() => {
      getImage();
    }, []);
  
    return (
      <div className="App">
        <h1>api2</h1>
        <img src={image}/>
        <p>{text}</p>
      </div>

 );
}

export default App;
