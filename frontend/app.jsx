import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


import Modal from './components/modal/modal';


import GreetingIndex from './components/greeting/greeting_container';
import SignupContainer from './components/session_form/signup_container';
import LoginContainer from './components/session_form/login_container';
import SessionForm from './components/session_form/session_form'

class App extends React.Component {
    constructor(props) {
        super(props);
       
    }
    

    render() {
        

        return <div>
                <Modal />
           
             <GreetingIndex />
            
            


                
                
                
           
            
                {/* <Route exact path="/signup" component={SignupContainer}></Route>
                <Route exact path='/login' component={LoginContainer}></Route> */}
                {/* {<Route exact path="/" component={GreetingIndex}></Route>} */}
        </div>
    }
}





export default App;