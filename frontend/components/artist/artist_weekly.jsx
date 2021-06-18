// home page component that conatins links to artist show

import React from 'react';
import ArtistIndexItem from './artist_index_item';
import {Switch, withRouter} from 'react-router-dom';


class ArtistWeekly extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false };

        this.artistList = this.artistList.bind(this);
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleUserSong = this.handleUserSong.bind(this);
        this.handleUserId = this.handleUserId.bind(this);
    }
   

    componentDidMount() {
       this.props.requestAllUsers();

        
    }

    componentDidUpdate() {
       
    }

    
    artistList() {
           return this.props.users.sort().map((ele) => {
               if (ele.username === 'Monkey Majik' || ele.username === 'Uverworld' || ele.username === 'Mirei Toyama') {
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
            if (ele.username === 'SILENT SIREN') id = ele.id;
        });

        return id;
    }


    handleArtistOfTheWeek() {
        return this.props.users.map((ele, idx) => {
            if(idx === 1) return;
            if (ele.username === 'SILENT SIREN') {
                return (<div key={ele.id} className='artist-weekly-main'>
                    {/* <button onClick={() => this.props.history.push(`/artist/${ele.id}`)}>go</button> */}
                
                    
                </div>)
            }
        });
    }


    render() {
        if(!this.props.users) return null;
        if (!this.handleUserSong()[0]) return null;
        if (!this.handleUserId()) return null;

                
        return(
            <div>
                        <div className='artist-weekly'>
                                    <div className='artist-weekly-container'>
                                                <audio   
                                                            onLoadedMetadata={() => {
                                                                document.querySelector('.weekly-player-text h2').innerHTML = this.handleUserSong()[0].title;
                                                                let name = document.querySelector('.weekly-player-text p:nth-of-type(2)');
                                                                
                                                                this.props.requestUser(this.handleUserId()).then((res) => name.innerHTML = `by ${res.user.username}`);
                                                            }} 
                                                            preload='metadata' 
                                                            className="player__audio audio viewer">
                                                            <source src={this.handleUserSong()[0].audioUrl} type="audio/mpeg" data-trackid="0" />
                                                </audio>
                                                <div className='artist-weekly-outer'>
                                                            <div className='artist-weekly-flex'>
                                                                        <div className='artist-weekly-overlay'></div>
                                                                        <div className='weekly-player-container'>
                                                                                    <li onClick={this.handlePlayPause} className='weekly-player'>

                                                                                                { this.state.playing === false ? <span className='play-icon'></span> : <span className='pause-icon'></span> }

                                                                                    </li>
                                                                                    <div className='weekly-player-text'>
                                                                                                <h2>{/*song title*/}</h2>
                                                                                                <p>{/*bio trim*/}ispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumis</p>
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