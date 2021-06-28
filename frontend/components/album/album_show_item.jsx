import React from 'react';
import { Link } from 'react-router-dom';


class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props); 
    }


    // componentDidMount() {
    //     this.props.fetchUser(this.props.album.artist_id).then((res) => {
    //             if(document.readyState === 'complete') {
    //                 let li = document.querySelector('.album-header-img');
    //                 li.style.background = `url(${res['user'].photo}) center / cover no-repeat`;
    //             }     
    //     }); 
    // }


    render() {
        
       return( <React.Fragment>
                            <li style={{position: 'relative',background: `url(${this.props.album.photo}) center / cover no-repeat`}}>
                            <Link style={{ position: 'absolute', position: 'absolute', width: '232px', height: '232px' }} to={`/album/songs/${this.props.album.id}`}></Link>

                            </li>
                </React.Fragment>)
    }

}

export default AlbumShowItem;