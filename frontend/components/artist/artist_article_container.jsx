import {connect} from 'react-redux';
import {requestUser, requestAllUsers} from  '../../actions/session_actions';
import {requestAlbums} from '../../actions/album_actions';
import ArtistArticle from './artist_article';
import { requestSongs } from '../../actions/song_actions';



/*
Export a container component for the `ArtistShow` that maps in the appropriate
artist from the store as an `artist` prop. Additionally, it should map in
a function that will dispatch `requestArtist` to the store as a prop of the same
name.
*/

const mapStoreToProps = (store, props) => {
   
    return {
       //store: store,
       artist: store.entities.users[props.match.params.id],
       albums: Object.values(store.entities.albums),
       songs: Object.values(store.entities.songs)
    };
};


const mapActionsToProps = (dispatch, props) => {
    return {
        requestUser: (id) => dispatch(requestUser(id)),
        requestAllUsers: () => dispatch(requestAllUsers()),
        requestAlbums: () => dispatch(requestAlbums()),
        requestSongs: () => dispatch(requestSongs())
    };
};


export default connect(mapStoreToProps, mapActionsToProps)(ArtistArticle);