import React from 'react';

import { Link } from 'react-router-dom'



class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSongsPlayPause = this.handleSongsPlayPause.bind(this);
       
      
    }

   
    

    // handleAudioUrlSplit() {
    //     let audio = document.querySelector('.audio');
    //     let src = audio.querySelector('source').src.split('/')[document.querySelector('source').src.split('/').length - 1];


    //     return src;
    // }


    componentDidMount() {
        let audio = document.querySelector('.audio');
        let src = audio.querySelector('source').src.split('/')[document.querySelector('source').src.split('/').length - 1];
        let mysrc = this.props.song.audioUrl.split('/')[this.props.song.audioUrl.split('/').length - 1];
      

        




        // console.log(src === mysrc && this.props.playing);
       
    }

    handleSongsPlayPause() {
        let audio = document.querySelector('.audio');
        let src = audio.querySelector('source').src.split('/')[document.querySelector('source').src.split('/').length - 1];
        let mysrc = this.props.song.audioUrl.split('/')[this.props.song.audioUrl.split('/').length - 1];
        let source = audio.querySelector('source');

        // Promise.resolve(audio.load(this.props.song.audioUrl)).then(audio.play());

        
        Promise.resolve(audio.load()).then(audio.play());
        
        console.log(source.src)

    }




    render() {
     
    
        // let src = audio.querySelector('source').src.split('/')[document.querySelector('source').src.split('/').length - 1];

        
        if (!this.props.song) return <p>Loading</p>;
        
        
        

        return (        
            <li>
                <div onClick={this.handleSongsPlayPause} className='play'></div>
                {this.props.song.title}
                
                {/* <Link to={`/song/${this.props.song.id}`}>songs</Link> */}


                {/* <button onClick={this.deleteAlbum}>delete this album</button>  */}
            </li>
        )
    }

}

export default SongIndexItem;

