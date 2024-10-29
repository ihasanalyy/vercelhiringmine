import Navbar from './Components/navbar/Navbar';
import ContentBody from './Components/ContentBody/ContentBody';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GetJobs, JobBox} from './Components/jobPage';
import JobDetailsCard from '../src/Components/JobDetailsCard';
import Login from './Components/Pages/Login';
import About from './Components/Pages/About';
import Employee from './Components/Pages/Employee';
import People from './Components/Pages/People';
import JoinNow from './Components/Pages/JoinNow';

function App() {

  return (
   
     <Router>
     <Routes>
       <Route path="/" element={ <>
      <div>
        <Navbar />
      </div>
      <div>
        <ContentBody/>
      </div>
      <div>
        
      </div>
    </>} />
       <Route path="/jobs" element={<GetJobs />} />
       <Route path='/jobs/jobcards/:jobid' element={<JobDetailsCard />} />
       <Route path='/Aboutus' element={<About />} />
       <Route path='/people' element={<People />} />
       <Route path='/login' element={<Login />} />
       <Route path='/joinnow' element={<JoinNow />} />
       <Route path='/employee' element={<Employee />} />
     </Routes>
   </Router>
  );
}

export default App;
