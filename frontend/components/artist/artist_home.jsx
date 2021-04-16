// home page component that conatins links to artist show

import React from 'react';
import ArtistHomeIndex from './artist_home_index_item';


class ArtistHome extends React.Component {
    componentDidMount() {
        return this.props.requestAllUsers();
    }

    constructor(props) {
        super(props);
        this.artistList = this.artistList.bind(this);
    }


    artistList() {
        return this.props.users.map((ele) => {
            if (ele.username === 'LiSA' || ele.username === 'Nico Touches the Walls') {
                return <ArtistHomeIndex
                    artist={ele}
                    key={ele.id}
                    artist={ele}
                />
            }
        });
    }


    render() {

        return (

            <div className='artist-outer-artist'>


                {this.artistList()}

            </div>
                
        )
    }
};

export default ArtistHome;