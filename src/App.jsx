import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donner from "./components/About/blood/Donner";
import AboutUs from "./components/Aboutpage/AboutUs";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Contact from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import DonateNow from "./components/DonateNow/DonateNow";
import Gallery from "./components/Gallery/Gallery";

import Ourprogram from "./components/Ourprogram/Ourprogram";
import Adnotification from "./components/Admin/Adnotification";
import Adupcomingevents from "./components/Admin/Adupcomingevents";
import Adgallery from "./components/Admin/Adgallery";
import Admincontact from "./components/Admin/Admincontact";
import Adminvol from "./components/Admin/Adminvol";
import Admindonner from "./components/Admin/Admindonner";
import AdminARP from "./components/Admin/AdminARP";

function App() {
  return (
    <>
      {/* <AboutUs /> */}
      {/* <Contact /> */}
      {/* <Ourprogram /> */}
    
      {/* <Gallery /> */}
      {/* <Donate /> */}
      {/* <DonateNow /> */}
      <AdminDashboard/>
     

     
    </>
  );
}

export default App;
