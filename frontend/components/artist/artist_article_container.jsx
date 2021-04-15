import {connect} from 'react-redux';
import {requestUser, requestAllUsers} from  '../../actions/session_actions';
import ArtistArticle from './artist_article';



/*
Export a container component for the `ArtistShow` that maps in the appropriate
artist from the store as an `artist` prop. Additionally, it should map in
a function that will dispatch `requestArtist` to the store as a prop of the same
name.
*/

const mapStoreToProps = (store, props) => {
   
    return {
       //store: store,
       artist: store.entities.users[props.match.params.id]
    };
};


const mapActionsToProps = (dispatch, props) => {
    return {
        requestUser: (id) => dispatch(requestUser(id)),
        requestAllUsers: () => dispatch(requestAllUsers())
    };
};


export default connect(mapStoreToProps, mapActionsToProps)(ArtistArticle);