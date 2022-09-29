import logo from './logo.svg';
import './App.css';


const jobs = [{
  id: "1",
  job_title: "Senior Adviser",
  company: "Shelter Scotland",
  date: "July2016-Present"
}, {
  id: "2",
  job_title: "Helpline Adviser",
  company: "Shelter Scotland",
  date: "March 2014- July 2016"
}, {
  id: "3",
  job_title: "Service Co-ordinator",
  company: "Airdrie Citizens Advice Bureau",
  date: "September 2012- March 2014"
}];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
