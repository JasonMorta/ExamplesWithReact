import logo from './logo.svg';
import './App.css';
import Job from './components/Job';


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
      <Job jobs={jobs}/>
      </header>
    </div>
  );
}

export default App;
