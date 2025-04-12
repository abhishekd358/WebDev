import React, { Component } from 'react'


// importing Details Component
import Details from './Details'
import Question from './Question'

// importing the uuid
import { v4 as uuidv4 } from 'uuid';

// import fierbase   below method is not working onward v9
// import firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import { getDatabase, ref, serverTimestamp, set} from 'firebase/database';


// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvSHeAxvuC17ImlgYb3haK0d6U-DhtSJ0",
  authDomain: "my-survey-2f485.firebaseapp.com",
  databaseURL: "https://my-survey-2f485-default-rtdb.firebaseio.com",
  projectId: "my-survey-2f485",
  storageBucket: "my-survey-2f485.firebasestorage.app",
  messagingSenderId: "134386460093",
  appId: "1:134386460093:web:12ebac442918b514391ed4"
};
// initailization of firebase
const app = initializeApp(firebaseConfig);


// creating a reference to the database
const database = getDatabase(app);

class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: uuidv4(),
         name : null,
         email: null,
         questions: {
          q1:null,
          q2:null,
          q3:null,
         },
         isSubmitted : false

      };
    }

    submitFormHandler = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      this.setState({name, email});
      console.log(this.state)

    };

    questionSubmitHandler = (event) => {
      event.preventDefault();
      const questions = {};

      // store questions in state
      questions.q1 = event.target.q1.value;
      questions.q2 = event.target.q2.value;
      questions.q3 = event.target.q3.value;
      questions.other = event.target.other.value;
      const isSubmitted = true;
      this.setState({ questions, isSubmitted}, ()=>{
        const {id, name, email} = this.state;
        
        // writing data to the firebase datatbase
        const surveyDataRef = ref(database,'Survey/' + this.state.id); 
      
        set(surveyDataRef, {
          id,
          name,
          email,
          questions: this.state.questions,
          timestamp: serverTimestamp()
      });

      
      });
     
    };


  render() {
    return (
      <>
      <div className="container-fluid">
        <div className='container card mt-2'>
            <h1 className='text-center text-primary'>Survey Project Based on React</h1>
        </div>
      </div>

      {/* if user submits the form, then show the details and question  */}

      {/* ternary operator to check the condition and render component */}

      {this.state.isSubmitted ? 
      <div className="card">
        <h1>Your Response Send To Firebase. Thank You!</h1>
      </div>
      : this.state.name === null && this.state.email === null && this.state.isSubmitted === false ? (<Details submit={this.submitFormHandler} />) : (<Question question={this.questionSubmitHandler}/>) }
      
      
      </>
    )
  }
}

export default Container