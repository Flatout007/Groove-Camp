
import { connect } from 'react-redux';
import ArtistProfileShow from './artist_profile_show';
import { deleteAlbum, requestAlbums } from '../../actions/album_actions';







const mapStoreToProps = (store, props) => {
    return {
        songs: Object.values(store.entities.songs),
        albums: Object.values(store.entities.albums),
        user: store.entities.users[store.session.id]
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        fetchAlbums: () => dispatch(requestAlbums()),
        deleteAlbum: (id) => dispatch(deleteAlbum(id))
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistProfileShow);