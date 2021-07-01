
import { connect } from 'react-redux';
import ArtistProfileShow from './artist_profile_show';
import { deleteAlbum, requestAlbums, requestAlbum } from '../../actions/album_actions';
import { requestUser, requestAllUsers } from '../../actions/session_actions';



const mapStoreToProps = (store, props) => {
    return {
        currentUser: store.entities.users[store.session.id],
        user: store.entities.users[props.match.params.id],
        albums: Object.values(store.entities.albums),
        users: Object.values(store.entities.users)
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAlbum: (id) => dispatch(requestAlbum(id)),
        deleteAlbum: (id) => dispatch(deleteAlbum(id)),
        requestUser: (id) => dispatch(requestUser(id)),
        requestAlbums: () => dispatch(requestAlbums()),
        requestAllUsers: () => dispatch(requestAllUsers())

    };
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistProfileShow);