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
    //  this.props.requestSongs();
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

    albumDropDown() {
        
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
        this.props.submitSong(formData);
    }


    handleSelect(e) {
        this.setState({album_id: parseFloat(e.target.value)})
        console.log(this.state)
    }


    render() {
        

      
        

       
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input onChange={this.handleChange('title')} type="text" value={this.state.title} />
                    </label>

                    <select onClick={this.handleSelect}>
                           {this.handleAlbumDropdown()}
                    </select>

                    <input onChange={this.handleFile} type="file"/>
                    
                
                    <button>Submit</button>
                </form>

                {/* <Link to='/albums/new'>Home</Link> */}
                <button onClick={() => this.props.history.push('/albums/new')}>album</button>
            </div>
        )
      
    }
}

export default withRouter(SongForm);