import React from 'react';


class ArtistProfileIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false };


        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleSongToPlay = this.handleSongToPlay.bind(this);
    }


    handleAudioSelection() {
        let audio = document.querySelector('.audio');
        return audio;
    }


    handlePlayPause() {
        let audio = document.querySelector('.audio');
        let source = audio.querySelector('source');
        
        
        if (document.readyState === "complete") {
            source.src = this.handleSongToPlay().audioUrl;
            const action = audio.paused ? 'play' : 'pause';
            this.setState({ playing: audio.paused ? true : false });
            Promise.resolve(audio.load()).then(audio[action]());
        }
    }


    componentDidMount() {
        let li = document.querySelectorAll('.artist-profile-index-grid li');
  
        
        li.forEach((ele) => {
            ele.style.backgroundSize = 'cover';
        });
    }


    handleArrayToObject(array, key) {
        const initialValue = {};


        return array.reduce((obj, item) => {
            return {
                ...obj,
                [item[key]]: item,
            };
        }, initialValue);
    }


    handleSongToPlay() {
        let songs = [];


        this.props.songs.forEach((ele) => {
            if(ele.artist_id === this.props.artist.id) {
                songs.push(ele);
            }
        });


        return songs[0];
    }


    render() {
        return(
            <div>    
                        <li style={{ background: `url(${this.props.artist.photo})  100% no-repeat`}}>
                                    <div onClick={this.handlePlayPause} className="play-container">

                                                {this.state.playing === true ? <div className="pause-button"></div> : <div className='play'></div>}

                                    </div>
                                    <div className='artist-stats'>
                                                <h5>



                                                            {this.props.artist.username}
                                        
                                        
                                                            

                                                </h5>
                                    </div>
                        </li>
            </div>
        )
    }
}

export default ArtistProfileIndexItem;