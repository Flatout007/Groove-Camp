// home page component that conatins links to artist show

import React from 'react';
import ArtistIndexItem from './artist_index_item';
import {withRouter} from 'react-router-dom';


class ArtistWeekly extends React.Component {
    componentDidMount() {
       this.props.requestAllUsers();

    }


    constructor(props) {
        super(props);
        this.state = { playing: false };
        this.artistList = this.artistList.bind(this);

        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleUserSong = this.handleUserSong.bind(this);
    }


    // handlePlayPause() {
    //     let audio = document.querySelector('.audio');
    //     let source = audio.querySelector('source');
        

    //     if (document.readyState === 'complete') {
    //         const action = audio.paused ? 'play' : 'pause';
    //         this.setState({ playing: audio.paused ? true : false });
    //         audio[action]();
    //     } else {
    //         return 'please wait';
    //     }


    //     source.src = this.props.song.audioUrl;
    //     Promise.resolve(audio.load()).then(audio.play());
    // }




    
    artistList() {
           return this.props.users.map((ele) => {
              if(ele.username === 'LiSA' || ele.username === 'Nico Touches the Walls' || ele.username === 'ONE OK ROCK') {
                return  <ArtistIndexItem
                 artist={ele}
                 key={ele.id}
                 artist={ele}
                 songs={this.props.songs}
                 fetchSong={this.props.requestSong}
                 fetchUser={this.props.requestUser}

                />
              }
            });
    }


    handleSongLoad() {
        let audio = document.querySelector('.audio');
        let source = audio.querySelector('source');

        source.src = this.handleUserSong()[0].audioUrl;

        return audio.load();
    }

    handlePlayPause() {
       
        let audio = document.querySelector('.audio');
        let source = audio.querySelector('source');
        const action = audio.paused ? 'play' : 'pause';
        this.setState({ playing: audio.paused ? true : false });


        if(document.readyState === 'complete' && source.src) { 
           
            
           
           
           
           audio[action]();
            //    audio[action]();
        }
    }


    handleUserSong() {
        return this.props.songs.filter(ele => ele.artist_id === this.handleUserId());
    }


    handleUserId() {
        let id;

        this.props.users.forEach((ele) => {
            if (ele.username === 'ONE OK ROCK') id = ele.id;
        });

        return id;
    }


    handleArtistOfTheWeek() {
        return this.props.users.map((ele, idx) => {
            if(idx === 1) return;
            if (ele.username === 'ONE OK ROCK') {
                
                return (<div key={ele.id} className='artist-weekly-main'>
                    {/* <button onClick={() => this.props.history.push(`/artist/${ele.id}`)}>go</button> */}
                
                    
                </div>)
            }
        });
    }


    render() {
        if(!this.props.users) return null;
        if (!this.handleUserSong()[0]) return null;

        console.log(this.handleUserSong())
       

       


        return(
            <div>
                        <div className='artist-weekly'>
                                    <div className='artist-weekly-container'>
                                                <audio preload='metadata' className="player__audio audio viewer">
                            <source src={this.handleUserSong()[0].audioUrl} type="audio/mpeg" data-trackid="0" />
                                                </audio>
                                        
                                                <div className='artist-weekly-outer'>
                                                <div className='artist-weekly-flex'>
                                                <div className='weekly-player-container'>
                                                <li className='weekly-player'>

                                                            { this.state.playing === false ? <span onClick={this.handlePlayPause} className='play-icon'></span> : <span onClick={this.handlePlayPause} className='pause-icon'></span> }

                                                            
                                                
                                                </li>
                                                            <div className='weekly-player-text'>
                                                                <h2>{/*song title*/}</h2>
                                                                <h5>{/*bio trim*/}</h5>
                                                                <p>{/*artist name*/}</p>
                                                            </div>
                                                </div>

                                                            { this.handleArtistOfTheWeek() }

                                                            <ol>

                                                                        { this.artistList() }

                                                            </ol>
                                                </div>
                                                </div>
                                    </div>
                        </div>
            </div>
        );
    }
};

export default withRouter(ArtistWeekly);