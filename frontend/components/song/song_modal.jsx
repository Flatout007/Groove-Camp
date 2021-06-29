import React from 'react';
import SongFormContainer from  './song_create_form_container';


class SongModal extends React.Component {

    render() {

        return (
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                <div className='song-modal-create-goal-title'><h1>Add a Song</h1></div>
                <div className='song-create-goal-container'>
                    <SongFormContainer/>
                </div>


            </div>

        );
    };
};

export default SongModal;