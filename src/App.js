import { useState } from 'react';
import './App.css';

function App() {
  // eslint-disable-next-line
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const submit = () => {
    try {
      setResult(eval(result).toString());
    }catch(error) {
      setResult("Err");
    }
    // setTimeout(setResult(""), 5000)
  }

  return (
    <div className='wrapper'>
      <div className='calculator'>
      <form>
        <input type="text" value={result}/>
      </form>

      <div className='keypad'>
        <button className='keypad-item' onClick={clear} id="clear" >Clear</button>
        <button className='keypad-item' onClick={backspace} id="backspace">C</button>
        <button name='/' className='keypad-item symbols' onClick={handleClick}>&divide;</button>
        <button name='7' className='keypad-item' onClick={handleClick}>7</button>
        <button name='8' className='keypad-item' onClick={handleClick}>8</button>
        <button name='9' className='keypad-item' onClick={handleClick}>9</button>
        <button name='*' className='keypad-item symbols' onClick={handleClick}>&times;</button>
        <button name='4' className='keypad-item' onClick={handleClick}>4</button>
        <button name='5' className='keypad-item' onClick={handleClick}>5</button>
        <button name='6' className='keypad-item' onClick={handleClick}>6</button>
        <button name='-' className='keypad-item symbols' onClick={handleClick}>&ndash;</button>
        <button name='1' className='keypad-item' onClick={handleClick}>1</button>
        <button name='2' className='keypad-item' onClick={handleClick}>2</button>
        <button name='3' className='keypad-item' onClick={handleClick}>3</button>
        <button name='+' className='keypad-item symbols' onClick={handleClick}>+</button>
        <button name='.' className='keypad-item' onClick={handleClick}>.</button>
        <button name='0' className='keypad-item zero' onClick={handleClick}>0</button>
        <button className='keypad-item symbols' onClick={submit}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
