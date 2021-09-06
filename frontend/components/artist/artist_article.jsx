import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import {
    withRouter,
    Link
} from 'react-router-dom';

class ArtistArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false};

        this.handleFilterSongs = this.handleFilterSongs.bind(this);
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleTimeUpdates = this.handleTimeUpdates.bind(this);
        this.handleAlbum = this.handleAlbum.bind(this);
    }


    componentDidMount() {
        window.scrollTo(0, 110);
        this.props.requestUser(this.props.match.params.id);
        this.props.requestAlbums();
        this.props.requestSongs();
    }

    handleAlbum() {
        let users = [];


        this.props.albums.forEach((ele) => {
            if (ele.artist_id === this.props.artist.id) {
                users.push(ele);
            }
        });


        return users[0];
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
        if (!this.props.artist.id) return null;

       
        return(
        <React.Fragment>
         <div>
                        <GreetingNav />
                        <nav className='daily-bar'>
                                    <div className='daily-wrapper'>         
                                                <a> 
                                                    <strong onClick={() => this.props.history.push('/')}>Groovecamp Daily</strong>
                                                </a>
                                                <button style={{cursor: 'pointer'}} onClick={() => this.props.history.push('/')} className="daily-button">Home</button>
                                    </div>
                        </nav>
                        <div  className='artist-article-heading'>
                                    <h5>FEATURES</h5>
                                    <h5>{this.handleFilterSongs()[0].title}</h5>
                                    <h5>By <Link style={{textDecoration: 'none', color: 'inherit', zIndex: 100}} to={`/profile/${this.props.artist.id}`}><span>{this.props.artist.username}</span></Link></h5>
                        </div>
                        <audio onTimeUpdate={this.handleTimeUpdates} className='audio'>
                                    <source src={this.handleFilterSongs()[0].audioUrl}></source>
                        </audio>
                        <article className='artist-article'>
                                    {this.state.playing === false ? <div onClick={this.handlePlayPause} className='play-circle'><span className='play-circle-icon'></span></div> : <div onClick={this.handlePlayPause}className='play-circle'><span className='pause-circle-icon'></span></div> }
                                    <img className='artist-article-img' src={this.props.artist.photo} alt=""></img>
                                    <p>{this.props.artist.bio}</p>
                        </article>
                                
        </div>
        <div className='article-footer'>
                    <ul>
                                <a target="_blank" href="https://www.linkedin.com/in/reginald-dunlap-591612202/"></a>
                                <a target="_blank" href="https://github.com/Flatout007"></a>
                                <a target="_blank" href="https://angel.co/u/reggie-dunn"></a>
                    </ul>
        </div>
        </React.Fragment>
        );
    }
}

export default  withRouter(ArtistArticle);