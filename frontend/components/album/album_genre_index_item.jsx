import React from 'react';


class AlbumGenreIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsers = this.handleUsers.bind(this);
    }


    handleUsers() {
        let users = [];


        this.props.users.forEach((ele) => {
            if (ele.id === this.props.album.artist_id) {
                users.push(ele);
            }
        });


        return users[0];
    }


    render() {
        if(!this.props.album) return null;
        if(!this.handleUsers()) return null;

        return(
            
            <li style={{background: `url(${this.props.album.photo}) 100% center / cover no-repeat`}}>
                        <div className='genre-index-stats'>
                                    {/* album name */}
                                    <h3>{this.props.album.title}</h3>
                                    <h5>{this.handleUsers().username}</h5>
                                    <p>{this.handleUsers().bio.split('.')[0]}</p>
                                    <span>Feature</span>
                        </div>
            </li>
           
        )

    }
}



export default AlbumGenreIndexItem;