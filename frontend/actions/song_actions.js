import * as SongApi from "../util/song_api_util";


export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const ERRORS = 'ERRORS';


export const receiveSongs = (payload) => {
    return {
        type: RECEIVE_SONGS,
        songs: payload
    };
};

export const receiveSong = (payload) => {
    return {
        type: RECEIVE_SONG,
        song: payload
    };
};

export const removeSong = (payload) => {
    return {
        type: REMOVE_SONG,
        songId: payload
    };
};

export const errors = (payload) => {
    return {
        type: ERRORS,
        errors: payload
    };
};


// 1. `requestAlbums`
// 2. `requestAlbum(AlbumId)`
// 3. `createAlbum(Album)`
// 4. `updateAlbum(Album)`
// 5. `deleteAlbum(AlbumId)`

export const requestSongs = () => {
    return dispatch => {
        return SongApi.fetchSongs().then((res) => {
            return dispatch(receiveSongs(res));
        });
    };
};

export const requestSong = (songId) => {
    return dispatch => {
        return SongApi.fetchSong(songId).then((res) => {
            return dispatch(receiveSong(res));
        }, (err) => {
            return dispatch(errors(err.responseJSON))
        });
    };
};

export const createSong = (song) => {

    return dispatch => {
        return SongApi.createSong(song).then((res) => {
            return dispatch(receiveSong(res));
        }, (err) => {
            return dispatch(errors(err.responseJSON))
        });
    };
};

export const updateSong = (song) => {
    return dispatch => {
        return SongApi.updateSong(song).then((res) => {
            return dispatch(receiveSong(res));
        });
    };
};


export const deleteSong = (songId) => {
    return dispatch => {
        return SongApi.deleteSong(songId).then(() => {
            return dispatch(removeSong(songId));
        });
    };
};