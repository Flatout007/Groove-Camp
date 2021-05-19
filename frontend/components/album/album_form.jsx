import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class AlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', artist_id: this.props.currentUserID}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value });
            console.log(this.state);
        }


    }

    handleSubmit(e) {
        e.preventDefault();

       this.props.submitAlbum(this.state);
        
        
    }


    render() {
      
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Description
                        <input onChange={this.handleChange('title')} type="text" value={this.state.title} />
                    </label>

                    

                    <button>Submit</button>
                </form>

                <button onClick={() => this.props.history.push('/songs/new')}>song</button>
                {/* <Link to='/songs/new'>song</Link> */}
            </div>
        )
    }
}

export default withRouter(AlbumForm);