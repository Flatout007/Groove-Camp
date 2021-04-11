import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';




class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}
          
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleErrors = this.handleErrors.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        let obj = {username: this.state.username, password: this.state.password, artist_check: this.props.artist_check}
        
        this.props.action(obj)        
    }

    clearErrors() {

    }

    handleErrors(e) {
        return this.props.errors.map((ele) => {
            return <div key={`ele-${Math.random(100 * 10)}`}>{ele}</div>
        });

        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //            <li key={`error-${i}`}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // );

    }
    
    handleChange(type) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });

    }

    sessionForm() {
        //if (this.state.visible) return null;
        if(this.props.currentUser) { 
          return {};
        }
        else {
           return (
            <div>
                <div className='flex-login-header'>
                  <h1>{this.props.formType}</h1>
                </div>
                   
                {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                {this.handleErrors()}

                <form className='signup-form'>
                    <label>Username
                      <input onChange={this.handleChange('username')} type="text" value={this.state.username} />
                    </label>

                    <br/>

                    <label>Password
                      <input onChange={this.handleChange('password')} type="password" value={this.state.password} />
                    </label> 
                     
                    <button onClick={this.handleSubmit} type="submit" className='session-submit-button'> Submit </button>
                      
                </form>

            </div>)
        }

    }

    

    navDiv() {
    //   return  <div>

    //              <div className='flex-c'>
    //                 <div className="session--container">
    //                     <div className="logo-container">
    //                         <img className="logo" src="data:image/png;base64,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" alt="" />
    //                        <Link to={`/`}>groovecamp</Link>
    //                         <h2>Discover amazing new music and directly support the artists who make it.</h2>
    //                     </div>
    //                     <ul className="session-nav">

    //                          <li><Link to={'#'}>signup</Link></li> 
    //                          <li><Link to={'#'}>login</Link></li>
    //                     </ul>
    //                 </div>
    //                 </div>



    //             </div>
           
    }

    render() {
      
        return(
            
            <div>   
                {/* {this.navDiv()} */}
               
                {this.sessionForm()}  
            </div>
            
        
            
        )
    }
}

export default SessionForm;