export const fetchSongs = () => {
    return $.ajax({
        url: '/api/songs'
    });
};

export const fetchSong = (songId) => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        data: { songId }
    });
};

export const createSong = (song) => {
    return $.ajax({
        url: '/api/songs',
        method: 'POST',
        data: { song }
    });
};


export const updateSong = (song) => {
    return $.ajax({
        url: `/api/songs/${song.id}`,
        method: 'PATCH',
        data: { song }
    });
};

export const deleteSong = (song) => {
    return $.ajax({
        url: `/api/songs/${song}`,
        method: 'DELETE',
    });
};