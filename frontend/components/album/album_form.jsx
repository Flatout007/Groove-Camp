import React from 'react';


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

                    {/* <label>Your ID
                        <input onChange={this.handleChange('artist')} type="text" value={this.state.artist} />
                    </label> */}

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AlbumForm;