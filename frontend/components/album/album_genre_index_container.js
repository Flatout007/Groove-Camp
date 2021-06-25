import { connect } from 'react-redux';
import { requestAlbums } from '../../actions/album_actions';
import { requestUser } from '../../actions/session_actions';
import  AlbumGenreIndex  from '../../components/album/album_genre_index';

const mapStoreToProps = (store, props) => {
    return {
        albums: Object.values(store.entities.albums),
        users: Object.values(store.entities.users)
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAlbums: () => dispatch(requestAlbums()),
        requestUser: (artistId) => dispatch(requestUser(artistId))
    }
};

export default connect(mapStoreToProps, mapActionsToProps)(AlbumGenreIndex);