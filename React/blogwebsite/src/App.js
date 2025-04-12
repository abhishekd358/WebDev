import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import React, { Component } from 'react'

// calling axios
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flagLogin : false,
       posts: ""
    }; 
  }

  // componentdidmount
  componentDidMount(){
    // fetchig data from fake api 
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      console.log(response);

    })
    .catch((error)=>{
      console.log(error)})
  }
    
  
  render() {
    return (
      <Router>
    <Navbar loginOrNot={this.loginLogoutHandler} status={this.state.flagLogin}/>
        <Routes>
        
        
        <Route path="/about" element={
          <>
            <Header title="About Us" img="about-bg.jpg"/>
            <About />
          </>
        } />

        {/* ROute for Post */}
        <Route path='/post' element={
          this.state.flagLogin ? 
          <>
          <Header title ="Latest Post" img="post-bg.jpg"/>
          <Post/>
          </> 
          :
          (<Navigate to='*' />)
          }/>

        {/* ROute for Contact */}
        <Route path='/contact' element={
          <>
          <Header title ="Contact Us" img="contact-bg.jpg"/>
          <Contact/>
          </>
        }/>

    {/* Define routes for Header and page-specific content */}
  <Route path="/" element={
   <>
     <Header title="Blogging.com" img="home-bg.jpg"/>
     <Home />
   </>
  } />

    {/* handline 404 routes */}
    <Route path='*' element={
      <Header title="404 Page Not Found" img="home-bg.jpg"/>
    }/>

        </Routes>
    <Footer/>   
    </Router>
    )
  }
}

export default App;
