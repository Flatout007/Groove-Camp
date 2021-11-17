import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = {playing: false};
    }

    componentDidUpdate() {
      
    }

    handleLoad() {
        let audio = document.querySelector('.audio');
        let source = audio.querySelector('source');
        source.src = this.props.song.audioUrl;
        audio.load();
    }

   
   handleTitle() {
       let title = document.querySelector('.song-info__title');
       title.innerHTML = this.props.song.title;
   }


    render() {
        if (!this.props.song) return <p>Loading</p>;

       
        return (        
            <li>
                        <div className='songs-play-container'>
                        {this.state.playing ? 
                                    <div onClick={() => Promise.resolve(this.props.handlePlay())
                                        .then(() => this.handleTitle())
                                        .then(() => this.setState({ playing: false }))
                                        } 
                                        className='songs-pause-icon'></div> : 
                                    <div onClick={() => Promise.resolve(this.handleLoad())
                                        .then(() => this.props.handlePlay())
                                        .then(() => this.handleTitle())
                                        .then(() => this.setState({ playing: true }))} 
                                        className='songs-play-icon'>
                                    <a href={this.props.song.audioUrl} className="download-button" download={this.props.song.title}>Download</a>        
                        </div>}
                        </div> 
                        <p>{this.props.song.title}</p>
                        {/* <p className='name'></p>
                        <p className='title'>0:30</p> */}
            </li>
        )
    }

}


export default SongIndexItem;

