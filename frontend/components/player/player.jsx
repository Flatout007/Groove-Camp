import React from 'react';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playing: false, trackSwitch: false};
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    componentDidMount() {
        // let audio = document.querySelector('.audio');
        // console.log(audio.src);
    }

    handlePlayPause() {
        // Play / pause the audio
        let audio = document.querySelector('.audio');
        const action = audio.paused ? 'play' : 'pause';
        this.setState({playing: audio.paused ? true : false});
        audio[action]();
        console.log('hello')
    };

    render() {
        return(
        <div className="player">
                <audio src="https://www.bensound.com/bensound-music/bensound-ukulele.mp3" type="audio/mpeg" data-trackid="1" className="player__audio audio viewer">
                    
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
                    {/* <div className="spinner">
                        <div className="spinner__disc" style="background-image: url(https://www.bensound.com/bensound-img/ukulele.jpg)">
                            <div className="center__disc"></div>
                        </div>
                    </div> */}
                    <button className="backward"><i className="fas fa-backward fa-2x"></i></button>
                    <li onClick={this.handlePlayPause} className="play">
                        {/* <i className="fas fa-play fa-3x"></i>
                        <span className="pause left"></span>
                        <span className="pause right"></span> */}
                    </li>
                    <button className='pause'></button>
                    <button className="forward"><i className="fas fa-forward fa-2x"></i></button>
                </div>
</div>)
    }
}

export default Player;