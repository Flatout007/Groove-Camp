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
import ArtistWeekly from './components/artist/artist_index_container';
import SignupContainer from './components/session_form/signup_container';
import ArtistIndexContainer from './components/artist/artist_index_container';
import ArtistShow from './components/artist/artist_show_container';
import LoginContainer from './components/session_form/login_container';
import SessionForm from './components/session_form/session_form';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return(
    <React.Fragment>
                 <Modal/>
                
           
                 <Switch>
                  <Route exact path="/signup" component={SignupContainer}></Route>
                  <Route exact path="/" component={GreetingIndex}></Route>
                  <Route exact path="/" component={ArtistWeekly}></Route>
                    <Route exact path='/artist/:id' component={ArtistShow}></Route>
                  
                  {/* <Route exact path='/login' component={LoginContainer}></Route>  */}
                  {/* {<Route exact path="/" component={GreetingIndex}></Route>} */}
                </Switch>
    </React.Fragment >)
        
    }
}





export default App;