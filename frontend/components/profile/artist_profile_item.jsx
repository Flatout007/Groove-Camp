import React from 'react';
import {Link, withRouter} from  'react-router-dom'
import ArtistProfileShow from '../profile/artist_profile_show';


class ArtistProfileItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDelete: false, render: true };

        this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete() {
        this.props.deleteAlbum(this.props.album.id).then(() => window.location.reload())
    }


    handleHover(action) {
        return action === 'enter' ? this.setState({ showDelete: true }) : this.setState({ showDelete: false });
    }


    render() {
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
                        style={{background: `url(${this.props.album.photo}) center / cover no-repeat`}}>
                        {deleteIcon}  
                        <Link style={{ position: 'absolute', position: 'absolute', width: '232px', height: '232px' }} to={`/album/songs/${this.props.album.id}`}></Link>
            </li>
        </React.Fragment>
        )
    }

}

export default withRouter(ArtistProfileItem);

