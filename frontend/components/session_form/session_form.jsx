import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { errors } from '../../actions/song_actions';




class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bio: "", username: '', password: '', artist_check: this.props.artist_check, photo: null}
          
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleErrors = this.handleErrors.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleUserErrors = this.handleUserErrors.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let obj = {bio: this.state.bio, username: this.state.username, password: this.state.password, artist_check: this.props.artist_check};
        
        const formData = new FormData();
        formData.append('user[username]', this.state.username);
        formData.append('user[bio]', this.state.bio);
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
            }).then(() => window.location.reload(), (err) => this.handleUserErrors(err.responseJSON));
        } else {
            return this.props.action(obj).then(this.props.closeModal)
        }
            
    }

    handleUserErrors(err) {
        let error = document.querySelector('.errors');
        error.innerHTML  = err;
        
    }

    
    handleErrors(e) {
        return this.props.errors.map((ele) => {
            return <div className='errors' key={`ele-${Math.random(100 * 10)}`}>{ele}</div>
        });
    }

    handlePhotoFile(e) {
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
                        
                        {this.handleErrors()}
                        <div className='errors'></div>

                        <form className='signup-form'>         
                                    <label>Username</label>
                                    <input onChange={this.handleChange('username')} type="text" value={this.state.username}/>
                                    {this.props.formType !== 'login' ? <label style={{ position: 'absolute', left: '180px', top: '218px'}}>Add A Profile Photo</label> : <div></div> }
                                    
                                    {this.props.formType !== 'login' ? <input style={{ position: 'absolute', left: '125px', top: '248px'}} onChange={this.handlePhotoFile} type="file" /> : <React.Fragment></React.Fragment>}
                                    
                                    <label style={{ position: 'absolute', left: '210px', top: '122px'}}>Password</label>
                                    <input onChange={this.handleChange('password')} type="password" value={this.state.password}/>
                                    
                                    {this.props.formType !== 'login' ? <button onClick={this.handleSubmit} type="submit" className='session-submit-button'>Submit</button> :
                                    <button style={{position: 'absolute', top:'300px', left: '153px'}} onClick={this.handleSubmit} type="submit" className='session-submit-button'>Submit</button>}

                                    {this.props.formType === 'login' ? <button style={{ position: 'absolute', top: '350px', left: '153px' }} onClick={() => this.props.action({ username: "L'Arc-en-Ciel", password: '123456' }).then(this.props.closeModal)} type="submit" className='session-submit-button'>DEMO</button> : <div></div> }

                                    {this.props.formType !== 'login' ? <textarea onChange={this.handleChange('bio')} name="" id="" cols="30" rows="10" value={this.state.bio} placeholder='add a bio'></textarea> 
                                    : <React.Fragment></React.Fragment>}
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