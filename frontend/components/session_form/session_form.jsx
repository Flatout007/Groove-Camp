import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', artist_check: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sessionForm = this.sessionForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        return this.props.action(this.state);
    }

    handleChange(type) {
       return e => {
         this.setState({[type]: e.target.value});
       }
    }

    sessionForm() {
        if(this.props.currentUser) { 
          
        }
        else {
           return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                      <input onChange={this.handleChange('username')} type="text" value={this.state.username} />
                    </label>

                    <label>Password
                      <input onChange={this.handleChange('password')} type="password" value={this.state.password} />
                    </label> 
                     
                    <button>Submit</button>

                </form>

            </div>)
        }
        
    }

   
    render() {
        console.log(this.props)
        return(
            <div>
                {this.sessionForm()}
            </div>
        )
    }
}

export default SessionForm;