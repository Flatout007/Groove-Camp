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
            console.log(this.state);
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

        console.log(file)
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

        // this.props.submitAlbum(this.state);

        // let formData = new FormData;
        // formData.append('album[title]', this.state.title);
        // formData.append('album[artist_id]', this.state.artist_id);
        // formData.append('album[photo]', this.state.photo);
        // this.props.submitAlbum(formData);
        
        
    }


    render() {

       

       
      
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Description
                        <input onChange={this.handleChange('title')} type="text" value={this.state.title} />
                    </label>

                    <input onChange={this.handleFile} type="file" />

                    

                    <button>Submit</button>
                </form>

                <button onClick={() => this.props.history.push('/songs/new')}>song</button>
                {/* <Link to='/songs/new'>song</Link> */}
            </div>
        )
    }
}

export default withRouter(AlbumForm);