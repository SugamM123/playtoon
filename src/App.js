import { useState } from 'react';
import './App.css';

function App() {

  const [backgroundColor, setBackgroundColor] = useState('#eeee');

  const ColorButton = ({ color, onClick }) => (
    <button
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
      aria-label={`Select ${color} color`}
      className="color-button"
    />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Avatar Color Picker</h1>

        <div className="avatar-container" style={{ backgroundColor: backgroundColor }}>
          <img 
            src="/logo512.png" 
            alt="Avatar"
            className="avatar-circle"  
          />
        </div>

        <div className="color-control">
          <div className="color-picker" style={{ marginTop: '20px', display: 'flex', }}>
            <ColorButton color="#ff0000" onClick={setBackgroundColor} />
            <ColorButton color="#4287f5" onClick={setBackgroundColor} />
            <ColorButton color="#42f54e" onClick={setBackgroundColor} />
            <ColorButton color="#f5d442" onClick={setBackgroundColor} />

            <input 
              type="color" 
              value={backgroundColor} 
              onChange={(e) => setBackgroundColor(e.target.value)}
            />

            <button className="reset" onClick={() => setBackgroundColor('#eeee')}>
              Reset
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
