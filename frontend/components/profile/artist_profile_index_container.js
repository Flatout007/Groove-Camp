import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/session_actions';
import ArtistProfileIndex from './artist_profile_index';
import { requestSongs } from '../../actions/song_actions';


const mapStoreToProps = (store, props) => {
    return {
        users: Object.values(store.entities.users),
        albums: Object.values(store.entities.albums),
        songs: Object.values(store.entities.songs)
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAllUsers: () => dispatch(requestAllUsers()),
        requestSongs: () => dispatch(requestSongs())
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistProfileIndex);