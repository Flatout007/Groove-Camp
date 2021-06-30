import React from 'react';
import SongFormContainer from  './song_create_form_container';


class SongModal extends React.Component {

    render() {

        return (
            <div className='song-modal-child' onClick={e => e.stopPropagation()}>
                <div className='song-create-goal-container'>
                    <SongFormContainer/>
                </div>


            </div>

        );
    };
};

export default SongModal;