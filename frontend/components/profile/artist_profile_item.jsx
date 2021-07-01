import React from 'react';
import {Link, withRouter} from  'react-router-dom'
import ArtistProfileShow from '../profile/artist_profile_show';


class ArtistProfileItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDelete: false, render: true };


        this.handleAlbum = this.handleAlbum.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
       

        // this.props.fetchUser(this.props.match.params.id);
      
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

    handleDelete() {
        this.props.deleteAlbum(this.props.album.id).then(() => window.location.reload())
    }


    handleHover(action) {
        return action === 'enter' ? this.setState({ showDelete: true }) : this.setState({ showDelete: false });
    }


    render() {

        // console.log(this.props.currentUser.id, this.props.album.artist_id);
        if(!this.handleAlbum()) return null;

        let deleteIcon;

        if(!this.props.currentUser) {
            deleteIcon = null;
        } else {
            deleteIcon = this.state.showDelete && this.props.currentUser.id === this.props.album.artist_id
            ? <button className='delete-button' onClick={this.handleDelete}>🗑️</button> : <div></div>
        }

        return (
        <React.Fragment>
            <li
                        
                        onMouseEnter={() => this.handleHover('enter')} onMouseLeave={() => this.handleHover('leave')}
                        style={{background: `url(${this.handleAlbum().photo}) center / cover no-repeat`}}>
                        {deleteIcon}  
                        <Link style={{ position: 'absolute', position: 'absolute', width: '232px', height: '232px' }} to={`/album/songs/${this.handleAlbum().id}`}></Link>
            </li>
        </React.Fragment>
        )
    }

}

export default withRouter(ArtistProfileItem);

