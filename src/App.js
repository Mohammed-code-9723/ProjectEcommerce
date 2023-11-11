import './App.css';
import Sidebar from './Components/SideBar';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Watches from './Components/Watches';
import SignIn from './Components/SignIn';
function App() {
  return (
    <>
    <div className='container'>
      <Sidebar/>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Watches" element={<Watches/>} />
          <Route path="/SignIn" element={<SignIn/>} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
