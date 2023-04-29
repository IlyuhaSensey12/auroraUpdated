import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import News from './pages/News';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Volunteering from './pages/Volunteering';
import Registration from "./pages/Registration";
import Organization from './pages/Organization';

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/main" element={<Main/>}/>
          <Route path="/news" element={<News/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/*" element={<DefaultLayout />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/volunteering" element={<Volunteering/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/organizations" element={<Organization/>}/>
        </Routes>
      </div>
    </Router>

  );
}

function DefaultLayout() {
  return (
    <>
      <div className="Content">
        <Routes>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div className="App">
      <h1 class="pt-5 pb-5">404 pages NotFound</h1>
    </div>    
  );
}
export default App;
