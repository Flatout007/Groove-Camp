
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { requestAlbum, requestAlbums } from '../../actions/album_actions';
import { deleteAlbum } from '../../actions/album_actions';
import { requestUser, requestAllUsers } from '../../actions/session_actions';

/*
Export a container component for `AlbumIndex` that maps an array of all
users from the store as an `users` prop. Additionally, it should map in
functions that will dispatch `requestAllUsers` and any other actions to the store as
props of the same name.
*/

const mapStoreToProps = (store, props) => {
    return {
        album: store.entities.albums[props.match.params.id],
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

export default connect(mapStoreToProps, mapActionsToProps)(AlbumShow);