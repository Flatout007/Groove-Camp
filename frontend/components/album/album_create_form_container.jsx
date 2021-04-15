import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
import AlbumForm from './album_form';

/*
Export a container component for the `AlbumForm` that will be used to create a
new Album. Map in an Album object with empty strings for each field as an
`album` prop along with a `formType` prop set to the string 'Create Album'.
Additionally, map in a function that will dispatch the appropriate action to
the store on form submission as `submitAlbum`.
*/

const mapStoreToProps = (store, props) => {

    return {
        album: { title: '', artist_id: 10},
        formType: 'Create Album'
    };
};


const mapActionsToProps = (dispatch, props) => {
    return {
        submitAlbum: (album) => dispatch(createAlbum(album))
    };
};


export default connect(mapStoreToProps, mapActionsToProps)(AlbumForm);