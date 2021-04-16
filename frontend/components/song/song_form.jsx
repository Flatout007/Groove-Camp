import React from 'react';


class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.song;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAlbumId = this.getAlbumId.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.requestAlbums();
        this.props.requestSongs();
    }

    handleChange(type) {
        return e => {
            return this.setState({ [type]: e.currentTarget.value });
        }
    }

    getAlbumId() {
        

        // return this.props.albums.map((ele) => {
        //      if(ele.artist_id === this.props.currentUser) {
        //         albumids.push(ele.id); 
        //      }
        //     albumids.push(ele.id)
            
            
           
        
        // });

        return this.props.albums.map(ele => {
                if (ele.artist_id === this.props.currentUser) {
                    return  <option  key={ele.id * 10} value={ele.id}>{ele.title}</option>
                }
        })
       

        
    }

    albumDropDown() {
        
    }

    handleFile(e) {
         this.setState({audioUrl: e.currentTarget.files[0]})
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.submitSong(this.state);
    }

    handleSelect(e) {
         return this.setState({album_id: e.target.value})
    }


    render() {
        
        if (!this.props.albums) return <p>Loading</p>;
        

       console.log(this.state)
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input onChange={this.handleChange('title')} type="text" value={this.state.title} />
                    </label>

                    <select onChange={this.handleSelect}>
                           {this.getAlbumId()}
                    </select>

                    <input onChange={this.handleFile} type="file"/>
                    
                    
                    {/* <label>Your ID
                        <input onChange={this.handleChange('artist')} type="text" value={this.state.artist} />
                    </label> */}

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SongForm;