import React from 'react';


class ArtistProfileIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false, showPlayer: false };


        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleSongToPlay = this.handleSongToPlay.bind(this);
        this.handleUsers = this.handleUsers.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    // onMouseEnter = {() => this.handleHover('enter')} onMouseLeave = {() => this.handleHover('leave')}

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
        // let li = document.querySelectorAll('.artist-profile-index-grid li');
  
        
        // li.forEach((ele) => {
        //     ele.style.backgroundSize = '';
        // });
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

    handleUsers() {
        let users = [];


        this.props.users.forEach((ele) => {
            if (ele.id === this.props.album.artist_id) {
                users.push(ele);
            }
        });


        return users[0];
    }


    handleSongToPlay() {
        let songs = [];


        this.props.songs.forEach((ele) => {
            if(ele.album_id === this.props.album.id) {
                songs.push(ele);
            }
        });


        return songs[0];
    }

    handleHover(action) {
       return action === 'enter' ? this.setState({ showPlayer: true }) : this.setState({ showPlayer: false });
    }


    render() {
        if(!this.props.users[0]) return null;
        if(!this.handleUsers()) return null;
        if(!this.handleSongToPlay()) return null;


        let player = this.state.showPlayer ? <div onClick={this.handlePlayPause} className="artist-play-container">
            {this.state.playing === true ? <div className="artist-pause-icon"></div> : <div className='artist-play-icon'></div>}
        </div> : 
        <div></div>


        return(
            <div>    
                     <li onMouseEnter = {() => this.handleHover('enter')} onMouseLeave = {() => this.handleHover('leave')} className='artist-index-list-item'>
                                    { player }
                                    <img src={this.handleUsers().photo} width='206' height='119' alt=""/>
                                    <div className='artist-stats'>
                                               
                        
                                                <h5>
                                                    <p>{this.handleSongToPlay().title}</p>
                                                    <div>{this.handleUsers().username}</div>
                                                    <div>{this.handleUsers().bio.split('.')[0]}</div>



                                                            {/* {this.handleUsers().username} */}
                                        
                                        
                                                            

                                                </h5>
                                        
                                    </div>
                        </li>
            </div>
        )
    }
}

export default ArtistProfileIndexItem;