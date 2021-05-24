import React from 'react';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false, trackSwitch: false};
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.audio = null;
        this.handleAudioSelection = this.handleAudioSelection.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount() {
        // let audio = document.querySelector('.audio');
        // audio.src = this.props.songs[0];
    }

    handleAudioSelection() {
       let audio = document.querySelector('.audio');
       return audio;
    }

    handlePlayPause() {
        this.audio = this.handleAudioSelection();
        const action = this.audio.paused ? 'play' : 'pause';
        this.setState({playing: this.audio.paused ? true : false});
        this.audio[action]();
        // const audioSource = this.audio.querySelector('source');
        // console.log(audioSource)
    }

    handleNext() {
        this.audio = this.handleAudioSelection();
        let audioSource = this.audio.querySelector('source');
        const currentTrackId = parseInt(audioSource.dataset.trackid);
        const nextTrackId = currentTrackId === this.props.songs.length - 1 ? '0' : (currentTrackId + 1).toString();
        const nextTrack = this.props.songs[nextTrackId];
        console.log(currentTrackId);
        this.handleChange(nextTrack);
    }

    handleChange(track) {
        // if (playing) trackSwitch = true;
        if(this.state.playing) this.setState({trackSwitch: true});

        this.audio = this.handleAudioSelection();
        let audioSource = this.audio.querySelector('source');
        audioSource.setAttribute('src', track.audioUrl);
        audioSource.dataset.trackid = this.props.songs.indexOf(track);
        this.audio.load();

        if(this.state.playing) this.audio.play();
    }

    render() {
        if(!this.props.songs[0]) return null;
        
        return(
        <div className="player">
                <audio className="player__audio audio viewer">
                    {/* <source src="https://www.bensound.com/bensound-music/bensound-ukulele.mp3" type="audio/mpeg" data-trackid="1"/> */}
                    <source src={this.props.songs[0].audioUrl} type="audio/mpeg" data-trackid="0" />
                </audio>
                <div className="song-panel">
                            <div className="song-info">
                                    <div className="song-info__title">Ukulele</div>
                                    <div className="song-info__artist">Bensound</div>
                                    <div className="progress">
                                            <div className="progress__filled"></div>
                                    </div>
                            </div>
                </div>
                <div className="player-controls">
                            <button className="backward"><i className="fas fa-backward fa-2x"></i></button>
                            <div onClick={this.handlePlayPause} className="play-container">
                                    <li className="play"></li>
                            </div>  
                            <button className='pause'></button>
                            <button className="forward" onClick={this.handleNext}>  next </button>
                </div>
</div>)
    }
}

export default Player;