import React from 'react';
import AlbumFormContainer from './album_create_form_container';


class AlbumModal extends React.Component {

    render() {

        return (
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                <div className='album-modal-create-goal-title'><h1>Add an Album</h1></div>
                <div className='album-create-goal-container'>
                    <AlbumFormContainer />
                </div>


            </div>

        );
    };
};

export default AlbumModal;