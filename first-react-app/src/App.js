import logo from './logo.svg';
import './App.css';

const h1Style = { 
  "fontSize":"30px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};

function App() {
  return (
    <div className="App">
      <h1 style={h1Style}>Grace's React Page</h1>
      <h2 className="bio">This is my first react page. I created it on November 3rd.</h2>
    </div>
  );
}

export default App;
