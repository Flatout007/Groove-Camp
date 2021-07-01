import React from 'react';
import {withRouter, Link} from 'react-router-dom'


class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.song;
        this.state = { title: '', artist_id: this.props.currentUserID, album_id: null, audioUrl: null}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAlbumDropdown = this.handleAlbumDropdown.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

   componentDidMount() {
        this.props.requestAlbums()
    }

    handleChange(type) {
        return e => {
            return this.setState({ [type]: e.currentTarget.value });
        }
    }

    handleAlbumDropdown() {
        return this.props.albums.map(ele => {
                if (ele.artist_id === this.props.currentUserID) {
                    return  <option key={ele.id * 10} value={ele.id}>{ele.title}</option>
                }
        })
  
    }


    handleFile(e) {
        this.setState({audioUrl: e.currentTarget.files[0]})
        console.log(e.currentTarget.files)
    }


    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData;
        formData.append('song[title]', this.state.title);
        formData.append('song[artist_id]', this.state.artist_id);
        formData.append('song[album_id]', this.state.album_id);
        formData.append('song[audio]', this.state.audioUrl);
        this.props.submitSong(formData).then(() => window.location.reload());
    }


    handleSelect(e) {
        this.setState({album_id: parseFloat(e.target.value)});
    }


    render() {
        return (
            <div>
                        {/* <h1>{this.props.formType}</h1> */}
                        <form className='song-form' onSubmit={this.handleSubmit}>
                                    <label style={{position: 'absolute', left:'232px', top: '36px', fontWeight: '700'}}>Title</label>
                                    <input onChange={this.handleChange('title')} type="text" value={this.state.title} />
                                    <label style={{ position: 'absolute', left: '198px', top: '125px', fontWeight: '700' }}> Choose Album</label>
                                    <select onClick={this.handleSelect}>

                                                {this.handleAlbumDropdown()}

                                    </select>   
                                    <input style={{ position: 'absolute', left: '125px', top: '248px' }} onChange={this.handleFile} type="file"/>
                                    <button style={{ position: 'absolute', top: '300px', left: '153px' }} className='session-submit-button'>Submit</button>
                        </form>
            </div>
        )
    }
}

export default withRouter(SongForm);