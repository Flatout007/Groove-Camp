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
        this.state = { username: '', password: '', artist_check: this.props.artist_check, photo: null}
          
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleErrors = this.handleErrors.bind(this);
        this.handleFile = this.handleFile.bind(this);
        
    }


    handleSubmit(e) {
        e.preventDefault();
        let obj = {username: this.state.username, password: this.state.password, artist_check: this.props.artist_check}
        
        const formData = new FormData();
        formData.append('user[username]', this.state.username);
        formData.append('user[password]', this.state.password);
        formData.append('user[artist_check]', this.props.artist_check);

        if (this.state.photo) {
            formData.append('user[photo]', this.state.photo);
        }

        if(this.props.formType === 'signup' ) {
            return $.ajax({
                url: '/api/users',
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false
            }).then(() => window.location.reload());
        } else {
            return this.props.action(obj).then(this.props.closeModal);
        }
            
    }

    
    handleErrors(e) {
        return this.props.errors.map((ele) => {
            return <div key={`ele-${Math.random(100 * 10)}`}>{ele}</div>
        });
    }

    handleFile(e) {
       
        // this.setState({photo: e.currentTarget.files[0]})

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photo: reader.result, photo: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photo: "", photo: null });
        }
    }
    

    handleChange(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    
    sessionForm() {
        if(this.props.currentUser) { 
         return null
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
                      <input onChange={this.handleChange('username')} type="text" value={this.state.username}/>
                    </label>

                    <br/>

                    <input onChange={this.handleFile} type="file"/>

                    <br/>

                    <label>Password
                      <input onChange={this.handleChange('password')} type="password" value={this.state.password}/>
                    </label> 
                     
                    <button onClick={this.handleSubmit} type="submit" className='session-submit-button'>Submit</button>     
                </form>

            </div>)
        }

    }

    render() {
        
        return(
            
            <div>   
                {this.sessionForm()}  
            </div>
            
        
            
        )
    }
}

export default SessionForm;