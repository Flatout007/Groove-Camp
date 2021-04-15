import * as AlbumApi from "../util/album_api_util";

/*
Export the following action constants:

1. `RECEIVE_ALBUMS` (corresponding action should have a `Albums` payload)
2. `RECEIVE_ALBUM` (corresponding action should have a `Album` payload)
3. `REMOVE_ALBUM` (corresponding action should have a `AlbumId` payload)

Export the following thunk action creators with the specified parameters:


*/


export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';


export const receiveAlbums = (payload) => {
    return {
        type: RECEIVE_ALBUMS,
        albums: payload
    };
};

export const receiveAlbum = (payload) => {
    return {
        type: RECEIVE_ALBUM,
        album: payload
    };
};

export const removeAlbum = (payload) => {
    return {
        type: REMOVE_ALBUM,
        albumId: payload
    };
};

// 1. `requestAlbums`
// 2. `requestAlbum(AlbumId)`
// 3. `createAlbum(Album)`
// 4. `updateAlbum(Album)`
// 5. `deleteAlbum(AlbumId)`

export const requestAlbums = () => {
    return dispatch => {
        return AlbumApi.fetchAlbums().then((res) => {
             return dispatch(receiveAlbums(res));
        }, err => {
            return err.responseJSON;
        });
    };
};

export const requestAlbum = (albumId) => {
    return dispatch => {
        return AlbumApi.fetchAlbum(albumId).then((res) => {
            return dispatch(receiveAlbum(res));
        });
    };
};

export const createAlbum = (album) => {
    return dispatch => {
        return AlbumApi.createAlbum(album).then((res) => {
            return dispatch(receiveAlbum(res));
        }, err => {
            return err.responseJSON;
        });
    };
};

export const updateAlbum = (album) => {
     return dispatch => {
         return AlbumApi.updateAlbum(album).then((res) => {
             return dispatch(receiveAlbum(res));
         });
     };
};


export const deleteAlbum = (albumId) => {
    return dispatch => {
        return AlbumApi.deleteAlbum(albumId).then(() => {
            return dispatch(removeAlbum(albumId));
        });
    };
};