import React from 'react';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false, trackSwitch: false, percent: 0, mousedown: false, duration: null, current: '0:00' };
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.audio = null;
        this.handleAudioSelection = this.handleAudioSelection.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSeekBar = this.handleSeekBar.bind(this);
        this.handleSrcubbing = this.handleSrcubbing.bind(this);
        this.handleArrowsOnFirstSong = this.handleArrowsOnFirstSong.bind(this);
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
    }

    handleBack() {
        this.audio = this.handleAudioSelection();
        let audioSource = this.audio.querySelector('source');
        const currentTrackId = parseInt(audioSource.dataset.trackid);
        const prevTrackId = currentTrackId <= 0 ? (0).toString() : (currentTrackId - 1).toString();
        const prevTrack = this.props.songs[prevTrackId];
        console.log(prevTrackId);
        this.handleTrackChange(prevTrack);
    }

    handleNext() {
        this.audio = this.handleAudioSelection();
        let audioSource = this.audio.querySelector('source');
        const currentTrackId = parseInt(audioSource.dataset.trackid);
        const nextTrackId = currentTrackId === this.props.songs.length - 1 || this.props.songs.length === 1 ? '0' : (currentTrackId + 1).toString();
        const nextTrack = this.props.songs[nextTrackId];
        this.handleTrackChange(nextTrack);
    }

    handleTrackChange(track) {
        if(this.state.playing) this.setState({trackSwitch: true});
        this.audio = this.handleAudioSelection();
        let audioSource = this.audio.querySelector('source');
        audioSource.setAttribute('src', track.audioUrl);
        audioSource.dataset.trackid = this.props.songs.indexOf(track);
        this.audio.load();
        
        if(this.state.playing) this.audio.play();
    }

    handleDurationConversion(seconds) {
        let sec = Math.floor(seconds);
        let min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;
        return min + ':' + sec;
    }

    handleSrcubbing(e) {
        // e.preventDefault();
        // e.stopPropagation()
        this.audio = this.handleAudioSelection();
        let progress = document.querySelector('.progress');
        const scrubTime = (e.nativeEvent.offsetX / progress.offsetWidth) * this.audio.duration;
        this.audio.currentTime = scrubTime;
    }


    handleSeekBar(e) {
        e.preventDefault();
        e.stopPropagation()
        this.progressBar = document.querySelector('.progress__filled');
        let audio = this.handleAudioSelection();
        this.setState({percent: (audio.currentTime / audio.duration) * 100});
        this.progressBar.style.flexBasis = `${this.state.percent}%`;
        this.setState({ current: this.handleDurationConversion(audio.currentTime)});
       
        
        if( audio.currentTime === audio.duration && this.props.songs.length > 1) {
            // this.setState({playing: false});
            // this.progressBar.style.flexBasis = `0%`
            this.setState({trackSwitch: true});
            this.handleNext();
        } else if (audio.currentTime === audio.duration && this.props.songs.length <= 1) {
            Promise.resolve(this.setState({ current: `0:00` })).then(this.setState({ playing: false })).then(this.setState({ percent: 0 }));
            this.progressBar.style.flexBasis = `0%`;
            
        }
    }


    handleArrowsOnFirstSong() {
      
    }


    render() {
        if(!this.props.songs[0]) return null;
       
        return(
            <div className="player">
                        <audio onTimeUpdate={this.handleSeekBar} className="player__audio audio viewer">
                                    {/* <source src="https://www.bensound.com/bensound-music/bensound-ukulele.mp3" type="audio/mpeg" data-trackid="1"/> */}
                                    <source src={this.props.songs[0].audioUrl} type="audio/mpeg" data-trackid="0"/>
                        </audio>

                        {this.state.playing === false && this.state.percent === 0 ? <p className='current'>0:00</p> : <p className='current'>{this.state.current}</p>}

                        <div className="song-info">
                                    <div  className="song-info__title">{this.props.songs[0].title}</div>
                        </div>
                        <div onMouseDown={() => this.setState({ mousedown: true })} onMouseUp={() => this.setState({ mousedown: false })}  onClick={this.handleSrcubbing} onMouseMove={(e) => this.state.mousedown && this.handleSrcubbing(e)} className="progress">
                                    <div  className="progress__filled">
                                    </div>
                                    <a className='thumb'></a>
                        </div>
                        <div className="player-controls">
                                    <div onClick={this.handlePlayPause} className="play-container">

                                        {this.state.playing === true ? <li className="pause-button"></li> : <li className='play'></li>}

                                    </div>  
                                    {/* {this.handleArrowsOnFirstSong()} */}
                                    <div onClick={this.handleBack} className="forward"><p>&#9134;</p><p>◀</p><p>◀</p></div>
                                    <div onClick={this.handleNext} className="forward rotate-right"><p>&#9134;</p><p>◀</p><p>◀</p></div>
                            
                        </div>
            </div>)

    }
    
}

export default Player;



