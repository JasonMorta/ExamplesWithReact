import logo from './logo.svg';
import './App.css';
import RENDER_ARRAY_OBJECT from './components/RENDER_ARRAY_OBJECT';
import API_ELEMENTS from './components/API_ELEMENTS';
import ReadExternalFiles from './components/ReadExternalFiles';
import Parent from './components/liftingState/Parent';





function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/* <RENDER_ARRAY_OBJECT /> */}
     {/* <API_ELEMENTS /> */}
     {/* <ReadExternalFiles /> */}
     <Parent />
      </header>
    </div>
  );
}

export default App;
