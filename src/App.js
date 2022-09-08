import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
// import Dashboard from "../src/components/Dashboard";
import Dashboard from "../src/components/Drawer";
import Worksheet from "../src/components/Worksheet";

import Cards from "../src/components/Cards";
import Organize from './components/pages/Organize';
import Addentry from './components/pages/Addentry';
import Editentry from './components/pages/Editentry';
import Fullcalender from './components/pages/Fullcalender';
import Calenderdate from './components/pages/Calenderdate';
import 'react-dropzone-uploader/dist/styles.css'




function App() {
  return (
    <>


     <Router>
      {/* <Dashboard /> */}
      {/* <Cards/> */}
       {/* <Navbar /> */}
      {/* <Routes> */}
      {/* <Editentry/> */}
      {/* <Fullcalender/> */}
      {/* <Calenderdate/> */}
         <Dashboard/>
         {/* <Addentry/> */}
         {/* <Organize/> */}
       {/* <Route path="master" element={<Worksheet/>} />
        <Route  path="master" element={<Worksheet/>}/>
        
        <Route path="card" element={<Cards/>} /> */}
        {/* <Route path="violations" element={<Navbarcard/>} />   */}
  
      {/* </Routes> */}

      {/* <Worksheet/> */}
      {/* <Dashboard/> */}
      {/* <Chart/> */}

      </Router>
      </> 
  );
}

export default App;
