import React from 'react';
import GreetingIndex from './components/greeting/greeting_container';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
           <GreetingIndex />
        </div>
    }
}

export default App;