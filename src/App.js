import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Data from './components/Data';
import Show from './components/Show';
function App() {  
  const [show, setShow] = useState(true);

  function clickHandler(){
    setShow(prevVal => !prevVal);
  }
  return (
    <div className="App">
      <Header />
      <Meme {...Data}/>
      {/* <button onClick={clickHandler}>Click me</button>
      {show && <Show />} */}
    </div>
  )
}

export default App;
