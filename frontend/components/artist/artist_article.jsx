import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import {
    withRouter
} from 'react-router-dom';

class ArtistArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false};

        this.handleFilterSongs = this.handleFilterSongs.bind(this);
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleTimeUpdates = this.handleTimeUpdates.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.match.params.id);
        this.props.requestAlbums();
        this.props.requestSongs();
    }

    handleTimeUpdates() {
        let audio = document.querySelector('.audio');

        if(audio.currentTime === audio.duration) this.setState({playing: false});
    }

    handlePlayPause() {
        let audio = document.querySelector('.audio');

        audio.load();

        if(document.readyState === 'complete') {
            const action = audio.paused ? 'play' : 'pause';
            this.setState({ playing: audio.paused ? true : false });
            audio[action]();
        }
    }

    handleFilterSongs() {
        return this.props.songs.filter((ele) => {return ele.artist_id === parseFloat(this.props.match.params.id)});
    }


    render() {
        if (!this.props.artist) return null;
        if (!this.props.albums) return null;
        if (!this.handleFilterSongs()[0]) return null;

        console.log(this.handleFilterSongs()[0]);
        
   
        return(
         <div>
                        <GreetingNav />
                        
                        <nav className='daily-bar'>
                                    <div className='daily-wrapper'> 
                                                <a> 
                                                    <strong>Groovecamp Daily</strong>
                                                </a>
                                                <span className="flex-links">
                                                    <span className="flex-link-1">
                                                        <a href="">Link</a></span>
                                                    <span>
                                                        ·<a href="">Link</a></span>
                                                    <span>
                                                        ·<a href="">Link</a></span>
                                                    <span>
                                                        ·<a href="">Link</a></span>
                                                </span>

                                                <button className="daily-button">Home</button>
                                    </div>
                        </nav>
                        <p>{this.props.artist.username}</p>
                        <audio onTimeUpdate={this.handleTimeUpdates} className='audio'>
                                    <source src={this.handleFilterSongs()[0].audioUrl}></source>
                        </audio>
                        <article className='artist-article'>
                    {this.state.playing === false ? <div onClick={this.handlePlayPause} className='play-circle'><span className='play-circle-icon'></span></div> : <div onClick={this.handlePlayPause}className='play-circle'><span className='pause-circle-icon'></span></div> }
                                    <img className='artist-article-img' src={this.props.artist.photo} alt=""></img>
                        </article>

                        <button onClick={() => this.props.history.push('/')}>Home</button>
        </div>
        );
    }
}

export default  withRouter(ArtistArticle);