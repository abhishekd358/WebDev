import './App.css';
import UseEffectTopic from "./Topics/UseEffectTopic.jsx";

import ApiHandling from "./Topics/ApiHandling.jsx";
import FormHandling from './Topics/FormHandling.jsx';
import MultipleInputHandling from './Topics/MultipleInputHandling.jsx';
// importing pages for routing
import About from './Topics/Routing/About.jsx';
import Contact from './Topics/Routing/Contact.jsx';
import Home from './Topics/Routing/Home.jsx';
import CourseDetails from './Topics/Routing/CourseDetails.jsx';
// importing the react-router-dom

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDynamic from './Topics/Routing/CourseDynamic.jsx';

// importing for mealproject
import MealPr from './MealProject/MealPr.jsx';

// importing for understanding the createContext and useContext
import IndianGov from './Topics/Context/IndianGov.jsx';


function App() {
 
  return (
    <>
      {/* <UseEffectTopic />
      <ApiHandling />
      <FormHandling/>
      <MultipleInputHandling />  */}

      {/* <MealPr /> */}


      <IndianGov />

    {/* Routing understanding : to understand routing comment the above UseEffectTopic,ApiHandling,FormHandling,MultipleInputHandling this all be commented so you learn about routing    */}
    {/* <Router>
      <Routes>
        <Route path='/about' element= {<About/> }/>
        <Route path='/contact' element= {<Contact/> }/>
        <Route path='/' element= {<Home/> }/> */}

        {/* this below for dynamic routing understanding */}
        {/* <Route path='/course' element= {<CourseDynamic/> }/>
        <Route path='/course/:id' element= {<CourseDetails/> }/>

      </Routes>
    </Router>  */}

    </>
  );
}

export default App;
