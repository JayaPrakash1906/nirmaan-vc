import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, redirect, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login';
import Connections from './pages/Connections/connection';
import Forms from './components/Forms';
import Startups from './pages/startups/Startups';
import Mentors from './pages/Mentors/Mentor';
import AddStartup from './pages/startups/AddStartup';
import Events from './pages/Events/Events';
import MentorShip from './pages/Mentorship/MentorShip';
import Settings from './pages/Settings/Settings'
import CreateNewEvent from './pages/Events/CreateNewEvent';
import AddNewMentor from './pages/Mentors/AddNewMentor';
import Contacts from './pages/Connections/Contacts';
import Reports from './pages/Reports/Reports';
import RequestSpeaker from './pages/Events/RequestSpeaker';
import CustomerHome from './Customer/Pages/Home/home';
import Resume from './Customer/Pages/Resume/Resume';
import UploadFile from './pages/UploadFile/UploadFile';
import View from './pages/UploadFile/View';
import ViewComponents from './pages/UploadFile/ViewComponents';
// import Todo from '../src/__test__/todo'
import ProtectedRoutes from './utils/ProtectedRoutes';
import Cms from './pages/cms/Cms.js';
import Profile from './pages/profile/Profile.js';
import DisEnt from './Customer/Pages/DisEnt/DisEnt.js';
import CustomerProfile from './Customer/Pages/Profile/Profile.js';
import Applycustomerprofile from './Customer/Pages/Profile/Profileapply.js';
import CustomerMentor from './Customer/Pages/Mentor/Mentor.js';
import CustomerStartup from './Customer/Pages/Startups/Startups.js';
import CustomerContacts from './Customer/Pages/Contact/contact.js';
import Jobs from './Customer/Pages/Job/Job.js';
import Resources from './Customer/Pages/Resources/Resources.js';
function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const authenticate = async() => {
    try
    {
      const token = localStorage.getItem('token');
      console.log(token);
      if(token)
      {
          setLoggedIn(true);
      }
      else
      {
        setLoggedIn(false);
      }
    }
    catch(err){
      console.log(err);
      setLoggedIn(false);
    }
  }
  useEffect(()=>{
    authenticate();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />  
            <Route element={<ProtectedRoutes requiredRoles={[localStorage.getItem('token'), '2']} />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/connections" element={<Connections />} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/addconnections" element={<Forms />} />
                  <Route path="/startups" element={<Startups />} />
                  <Route path="/mentors" element={<Mentors />} />
                  <Route path="/events" element={<Events/>} />
                  <Route path="/mentorship" element={<MentorShip/>} />
                  <Route path="/startup/new" element={<AddStartup/>} />
                  <Route path="/settings" element={<Settings/>} />
                  <Route path="/events/new" element={<CreateNewEvent />} />
                  <Route path="/contacts" element={<Contacts/>} /> 
                  <Route path="/mentor/new" element={<AddNewMentor />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/uploads" element={<UploadFile />} />
                  <Route path="/view/uploads" element={<ViewComponents/> }/>
                  <Route path="/cms" element={<Cms />} />
             </Route>
             <Route  element={<ProtectedRoutes requiredRoles={[localStorage.getItem('token'), '5']} />} >
                  <Route path="/events/request-speaker" element={<RequestSpeaker/>} />  
                  <Route path="/customer/Home" element={< CustomerHome/>} />
                  <Route path="/customer/resume" element={<Resume />} />
                  <Route path="/customer/profile" element={<CustomerProfile />} />
                  <Route path="/profile/addprofile" element={<Applycustomerprofile />} />
                  <Route path="/customer/displine-ent" element={<DisEnt />} />
                  <Route path="/customer/mentor" element={<CustomerMentor />} />
                  <Route path="/customer/startup" element={<CustomerStartup />} />
                  <Route path="/customer/contacts" element={<CustomerContacts />} />
                  <Route path="/customer/jobs" element={<Jobs />} />
                  <Route path="/customer/resources" element={<Resources />} />
                 

             </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
