import React from 'react';
import { connect } from 'react-redux';
import { requestSongs } from '../../actions/song_actions';
import { useState, useRef, useEffect } from 'react';





const SongReceiver = (props) => {
   
    
    
    

     useEffect(() => {
        props.requestSongs().then((res) => {
            setSongs(res.songs)
        })
    },[])

    // console.log(songs)


    
    


    
    // const [isPlaylistRepeat, setIsPlaylistRepeat] = useState(false);
    // const [songState, setSongState] = useState({
    //     currentTime: 0,
    //     duration: 0,
    //     seekbarPercentage: 0,
    // });
    // const [buttonStatus, setButtonStatus] = useState({
    //     next: true,
    //     previous: false,
    // });
    
  
    
    // switch () {
    //     case '':
    //         //code here
    //         break;
       
    //     default:
    //         return null;
    // }


    return (
        <div></div>
    )

  
}

const mapStateToProps = store => {
    return {
        songs: Object.values(store.entities.songs)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestSongs: () => dispatch(requestSongs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongReceiver);
// export default SongReceiver;
