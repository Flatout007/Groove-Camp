import { connect } from 'react-redux';
import { createSong, requestSongs } from '../../actions/song_actions';
import { requestAlbums } from '../../actions/album_actions';
import SongForm from './song_form';

/*
Export a container component for the `AlbumForm` that will be used to create a
new Album. Map in an Album object with empty strings for each field as an
`album` prop along with a `formType` prop set to the string 'Create Album'.
Additionally, map in a function that will dispatch the appropriate action to
the store on form submission as `submitAlbum`.
*/

const mapStoreToProps = (store, props) => {

    return {
        errors: store.errors.songs,
        // song: { title: '', artist_id: 10, album_id: null, audioUrl: null },
        albums: Object.values(store.entities.albums),
        formType: 'Create Song',
        currentUserID: store.session.id,
    };
};


const mapActionsToProps = (dispatch, props) => {
    return {
        submitSong: (song) => dispatch(createSong(song)),
        requestAlbums: () => dispatch(requestAlbums()),
        requestSongs: () => dispatch(requestSongs())
    };
};


export default  connect(mapStoreToProps, mapActionsToProps)(SongForm);