import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/session_actions';
import ArtistProfileIndex from './artist_profile_index';


const mapStoreToProps = (store, props) => {
    return {
        users: Object.values(store.entities.users)
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAllUsers: () => dispatch(requestAllUsers())
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistProfileIndex);