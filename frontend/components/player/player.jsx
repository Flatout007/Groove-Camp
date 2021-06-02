import React from 'react';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false, trackSwitch: false, percent: 0, mousedown: null, current: '0:00' };
        this.audio = null;

        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleAudioSelection = this.handleAudioSelection.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSeekBar = this.handleSeekBar.bind(this);
        this.handleSrcubbing = this.handleSrcubbing.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
       
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
    
    handleDuration() {
        let d = document.querySelector('.audio');
        let p = document.querySelector('.duration');
        if(d.duration !== null) p.innerHTML = this.handleDurationConversion(d.duration);
       

        


    }


    handleBack() {
        this.audio = this.handleAudioSelection();
        let audioSource = this.audio.querySelector('source');
        const currentTrackId = parseInt(audioSource.dataset.trackid);
        const prevTrackId = currentTrackId <= 0 ? (0).toString() : (currentTrackId - 1).toString();
        const prevTrack = this.props.songs[prevTrackId];
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

        // refactor this logic here
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;
        return min + ':' + sec;
    }


    handleSrcubbing(e) {
        e.preventDefault();
        e.stopPropagation()
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
            this.setState({trackSwitch: true});
            this.handleNext();
        } else if (audio.currentTime === audio.duration && this.props.songs.length <= 1) {
            Promise.resolve(this.setState({ current: `0:00` })).then(this.setState({ playing: false })).then(this.setState({ percent: 0 }));
            this.progressBar.style.flexBasis = `0%`;
            
        }
    }


    // handleArrowsOnFirstSong() {
      
    // }


    render() {
        if(!this.props.songs[0]) return null;
       

        return(
            <div className="player">
                        <audio onLoadedMetadata={this.handleDuration} preload='metadata' onTimeUpdate={this.handleSeekBar} className="player__audio audio viewer">
                                    <source src={this.props.songs[0].audioUrl} type="audio/mpeg" data-trackid="0"/>
                        </audio>
            <div className='song-stats'>
                        <p className="song-info__title">{this.props.songs[0].title}</p> &nbsp;

                        {this.state.playing === false && this.state.percent === 0 ? <p className='current'>0:00</p> : <p className='current'>{this.state.current}</p>} &nbsp;
                        
                        <p className='slash'>/</p> &nbsp;
                        <p className="duration">0:30</p>
                        
                       
            </div>
                        <div        onMouseDown={() => this.setState({ mousedown: true })} 
                                    onMouseUp={() => this.setState({ mousedown: false })}
                                    onMouseLeave={() => this.setState({ mousedown: false})}
                                    onMouseMove={(e) => this.state.mousedown ? this.handleSrcubbing(e) : null}
                                    className="progress">
                                    <div className="progress__filled"></div>
                                    <a className='thumb'></a>
                        </div>
                        <div className="player-controls">
                                    <div onClick={this.handlePlayPause} className="play-container">

                                        {this.state.playing === true ? <li className="pause-button"></li> : <li className='play'></li>}

                                    </div>  
                                    {/* {this.handleArrowsOnFirstSong()} */}
                                    <li onClick={this.handleBack} className='backward rotate-right'></li>
                                    <li onClick={this.handleNext} className='forward'></li>
                                    {/* <div onClick={this.handleBack} className="backward"><p>╹</p><p>◀</p><p>◀</p></div>
                                    <div onClick={this.handleNext} className="forward rotate-right"><p>╹</p><p>◀</p><p>◀</p></div> */}
                            
                        </div>
            </div>)

    }
    
}

export default Player;



