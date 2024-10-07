import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import Guest from './components/Guest';
import Registration from './components/Registration';
import Dologin from './components/Dologin';

import Advanced from './components/Advanced';
import Custsessions from './components/CustSessions';
import Autosug from './components/AutoSug'

import HowtoMedit from './components/HowtoMedit';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
  <>
    
   <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/Registration' element={<Registration/>}/>
       <Route path='/login' element={<Dologin/>}/>
       <Route path='/Guest' element={<Guest/>}/>
       <Route path='/advanced' element={<Advanced/>}/>
       <Route path='/loggedin/meditation' element={<HowtoMedit/>}/>
       <Route path='/loggedin/addfav' element={<Custsessions/>}/>
       <Route path='/About' element={<AboutUs/>}/>
       <Route path='/loggedin/Autosug' element={<Autosug/>}/>
       </Routes>
      </BrowserRouter>  

  </>
  
  )
}

export default App;