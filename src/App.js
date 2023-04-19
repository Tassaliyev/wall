import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Preloader from "../src/components/Preloader"
import MainPageContainer from './containers/MainPageContainer';
import NavContainer from './containers/NavContainer';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import About from './components/About';
import Contacts from './components/Contacts';



const App = () => {

  
   

  return (
    <div>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>
          {/* <Preloader/> */}
        <NavContainer/>
        <MainPageContainer location="main"/>

        
    
            </div>} />
          <Route path="favorites" element={<div>
            <NavContainer/>
          <MainPageContainer location="favorites"/>
          </div>}
          />
          <Route path="about" element={<About/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Routes>
      </BrowserRouter>
      <NotificationContainer/>
    </div>

      

  )
}

export default App