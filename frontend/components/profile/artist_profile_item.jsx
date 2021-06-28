import React from 'react';
import {Link, withRouter} from  'react-router-dom'


class ArtistProfileItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDelete: false };

        this.handleAlbum = this.handleAlbum.bind(this);
      
    }

    handleAlbum() {
        let arr = [];


        this.props.albums.forEach((ele) => {
            if (ele.artist_id === this.props.user.id) {
                arr.push(ele);
            }
        })


        return arr[0];
    }


    handleHover(action) {
        return action === 'enter' ? this.setState({ showDelete: true }) : this.setState({ showDelete: false });
    }


    render() {
       if(!this.handleAlbum()) return null; 

        let deleteIcon = this.state.showDelete ? <button className='delete-button' onClick={() => this.props.deleteAlbum(this.props.album.id)}>🗑️</button> : <div></div>
       

        return (
        <React.Fragment>
            <li
                        
                        onMouseEnter={() => this.handleHover('enter')} onMouseLeave={() => this.handleHover('leave')}
                        style={{background: `url(${this.handleAlbum().photo}) center / cover no-repeat`}}>
                        { deleteIcon }
                        <Link style={{ position: 'absolute', position: 'absolute', width: '232px', height: '232px' }} to={`/album/songs/${this.handleAlbum().id}`}></Link>
            </li>
        </React.Fragment>
        )
    }

}

export default withRouter(ArtistProfileItem);

