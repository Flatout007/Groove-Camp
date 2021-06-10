import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSongsPlayPause = this.handleSongsPlayPause.bind(this);
       
      
    }


    componentDidMount() {
        this.props.requestUser(this.props.song.artist_id).then((res) => {
            if (document.readyState === 'complete') {
                let name = document.querySelector('.name');
                name.innerHTML = res['user'].username;
                let li = document.querySelector('.album-header-img');
                li.style.background = `url(${res['user'].photo}) no-repeat 50%`;
                li.backgroundSize = 'contain';
            }

        });
        
    }



    handleSongsPlayPause() {
        let audio = document.querySelector('.audio');
        let src = audio.querySelector('source').src.split('/')[document.querySelector('source').src.split('/').length - 1];
        let mysrc = this.props.song.audioUrl.split('/')[this.props.song.audioUrl.split('/').length - 1];
        let source = audio.querySelector('source');


        source.src = this.props.song.audioUrl;
        Promise.resolve(audio.load()).then(audio.play());
        
    }


    render() {
        if (!this.props.song) return <p>Loading</p>;

       
        return (        
            <li>
                        <div onClick={this.handleSongsPlayPause} className='play'></div>
                        <p>{this.props.song.title}</p>
                        <p className={'name'}></p>
            </li>
        )
    }

}

export default SongIndexItem;

