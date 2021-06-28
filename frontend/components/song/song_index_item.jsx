import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (!this.props.song) return <p>Loading</p>;

       
        return (        
            <li>
                        <div className='songs-play-container'>
                                    { this.props.playing ? <div onClick={this.props.handlePlay} className='songs-pause-icon'></div> : <div onClick={this.props.handlePlay} className='songs-play-icon'></div> }
                        </div> 
                        <p>{this.props.song.title}</p>
                        {/* <p className='name'></p>
                        <p className='title'>0:30</p> */}
            </li>
        )
    }

}

export default SongIndexItem;

