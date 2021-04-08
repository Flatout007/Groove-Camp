import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingIndex from './components/greeting/greeting_container';
import SignupContainer from './components/session_form/signup_container';
import LoginContainer from './components/session_form/login_container';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <header>
             <GreetingIndex />
            </header>

            <Switch>
                <Route exact path="/signup" component={SignupContainer}></Route>
                <Route exact path="/login" component={LoginContainer}></Route>
            </Switch>

        </div>
    }
}

export default App;