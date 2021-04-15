// 1. `fetchAlbums`
// 2. `fetchAlbum(AlbumId)`
// 3. `createAlbum(Album)`
// 4. `updateAlbum(Album)`
// 5. `deleteAlbum(AlbumId)`


export const fetchAlbums = () => {
    return $.ajax({
        url: '/api/albums'
    });
};

 export const fetchAlbum = (albumId) => {
    return $.ajax({
        url: `/api/albums/${albumId}`,
        data: { albumId }
    });
};

export const createAlbum = (album) => {
    return $.ajax({
        url: '/api/albums',
        method: 'POST',
        data: { album }
    });
};


export const updateAlbum = (album) => {
   return $.ajax({
       url: `/api/albums/${album.id}`,
       method: 'PATCH',
       data: {album}
   });
};

export const deleteAlbum = (albumId) => {
    return $.ajax({
        url: `/api/albums/${albumId}`,
        method: 'DELETE', 
    });
};
 
