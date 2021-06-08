// import { update } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editUserPhoto, requestUser } from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
// import EventForm from './event_form';


class EditPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photo: null };

        this.handleLocationId = this.handleLocationId.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        

        const formData = new FormData();
    
        if (this.state.photo) {
            formData.append('user[photo]', this.state.photo);
        }

        if (this.props.formType === 'Edit Photo') {
            return $.ajax({
                url: `/api/users/${this.handleLocationId()}`,
                method: 'PATCH',
                data: formData,
                contentType: false,
                processData: false
            }).then(() => window.location.reload());
        } else {
            return this.props.action(obj).then(this.props.closeModal);
        }

    }

    handleLocationId() {
        return this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1];
    }

    componentDidMount() {
        this.props.requestUser(this.handleLocationId());
    }

    handlePhotoFile(e) {
        // this.setState({photo: e.currentTarget.files[0]})

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photo: reader.result, photo: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photo: "", photo: null });
        }
    }

    render() {
       
        // DO NOT MODIFY THIS FUNCTION
        // const { event, formType, submitEvent } = this.props;

        // Hint: The event will not exist on the first render - what do we need to do
        // to get it?
        // if (!event) return null;
        return (
            <React.Fragment>
                    
                <form className='signup-form'>
                            <input onChange={this.handlePhotoFile} type="file" />
                            <button onClick={this.handleSubmit} type="submit" className='session-submit-button'>Submit</button>
                </form>
            </React.Fragment>
             
           
        );
    }
}

const mapStoreToProps = (store, props) => {
    return {
        // event: store.users[props.match.params.userId],
        formType: 'Edit Photo',
        // user: store.entities.users[props.match.params.id]
    };
};


const mapActionsToProps = (dispatch, props) => {
    return {
        action: (userId) => dispatch(editUserPhoto(userId)),
        requestUser: (userId) => dispatch(requestUser(userId)),
        closeModal: () => dispatch(closeModal()),
        openModal: (edit) => dispatch(openModal(edit))
    };
};


export default withRouter(connect(mapStoreToProps, mapActionsToProps)(EditPhotoForm));
