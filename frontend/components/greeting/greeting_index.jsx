import React from 'react';

class GreetingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.greetUser = this.greetUser.bind(this);
        this.signoutUser = this.signoutUser.bind(this);
    }

    signoutUser() {
      console.log('user has signed out');
      return this.props.signout();
    }

    greetUser() {
        if(this.props.currentUser) {
           return(<div>
               <h1>Welcome {this.props.currentUser.username}</h1>
   
               <button onClick={this.signoutUser}>Log Out</button>
            </div>)
        } else {
            // <div> 
            //    <Link to={ }></Link>
            //    <Link to={ }></Link>
            // </div>
        }
    }

    render() {
       return (<div>
           {this.greetUser()}
       </div>)
    }
}

export default GreetingIndex;