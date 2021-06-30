import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class AlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', artist_id: this.props.currentUserID, photo: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value });
        }
    }


    handleFile(e) {
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


    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        if (this.state.photo) {
            formData.append('album[photo]', this.state.photo);
        }

        
        formData.append('album[title]', this.state.title);
        formData.append('album[artist_id]', this.state.artist_id);
        

        return $.ajax({
            url: '/api/albums',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(() => window.location.reload());
    }


    render() {
        return (
            <div>
                        {/* <h1>{this.props.formType}</h1> */}
                        <form onSubmit={this.handleSubmit}>
                                    <label style={{ position: 'absolute', left: '208px', top: '36px', fontWeight: '700' }}>Album Title</label>
                                    <input onChange={this.handleChange('title')} type="text" value={this.state.title} />
                                    <label style={{ position: 'absolute', left: '190px', top: '125px', fontWeight: '700' }}>Add Album Cover</label>
                                    <input style={{ position: 'absolute', left: '132px', top: '170px' }} onChange={this.handleFile} type="file"/>
                                    <button style={{ position: 'absolute', top: '300px', left: '153px' }} className='session-submit-button' >Submit</button>
                        </form>
            </div>
        )
    }
}

export default withRouter(AlbumForm);