import logo from "./logo.svg";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
// import Dashboard from "../src/components/Dashboard";
import Dashboard from "../src/components/Drawer";
import Worksheet from "../src/components/Worksheet";

import Cards from "../src/components/Cards";
import Organize from "./components/pages/Organize";
import Addentry from "./components/pages/Addentry";
import Editentry from "./components/pages/Editentry";
import Fullcalender from "./components/pages/Fullcalender";
import Calenderdate from "./components/pages/Calenderdate";
import "react-dropzone-uploader/dist/styles.css";

import ManagementDerective from "./components/pages-2/ManagementDerective";
import Directive from "./components/pages-2/Directive";
import Transactions from "./components/pages-2/Transactions";
import DenseTable from "./components/pages-2/DenceTable";
import Voilations from "./components/pages-2/Voilations";
import Directivemgnt from "./components/pages-2/Directivemgnt";
import Directivemgnt1 from "./components/pages-2/Directivemgnt1";
import User3 from "./components/pages-2/User3";
import User2 from "./components/pages-2/User2";
import User1 from "./components/pages-2/User1";
import Directivemgnt2 from "./components/pages-2/Directivemgnt2";
import Rules1 from "./components/pages-2/Rules1";
import Rules2 from "./components/pages-2/Rules2";
import Rules3 from "./components/pages-2/Rules3";
import Settings from "./components/pages-2/Settings";
import Settingsamit from "./components/pages-2/Settingsamit";
import Notifications from "./components/pages-2/Notifications";

function App() {
  return (
    <>
      <Router>
        {/* <ManagementDerective /> */}
        {/* <Directive/> */}
        {/* <Transactions/> */}
        {/* <DenseTable /> */}
        {/* <Voilations/> */}
        {/* <Directivemgnt /> */}
        {/* <Directivemgnt1/> */}
        {/* <Directivemgnt2/> not usefull */}
        {/* <User3/> */}
        {/* <User2 /> */}
        {/* <User1/> */}
        {/* <Rules1/> */}
        {/* <Rules2/> */}
        {/* <Rules3 /> */}
        {/* <Settings/> */}
        {/* <Settingsamit/> */}
        {/* <Notifications /> */}

        <Dashboard />
        {/* <Cards/> */}
        {/* <Navbar /> */}
        {/* <Routes> */}
        {/* <Editentry/> */}
        {/* <Fullcalender/> */}
        {/* <Calenderdate/> */}
        {/* <Dashboard/> */}
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
