// home page component that conatins links to artist show

import React from 'react';
import ArtistIndexItem from './artist_index_item';


class ArtistWeekly extends React.Component {
    componentDidMount() {
        return this.props.requestAllUsers();
    }


    constructor(props) {
        super(props);
        this.artistList = this.artistList.bind(this);
    }

    
    artistList() {
           return this.props.users.map((ele) => {
              if(ele.username === 'LiSA' || ele.username === 'Nico Touches the Walls') {
                return  <ArtistIndexItem
                 artist={ele}
                 key={ele.id}
                 artist={ele}
                />
              }
            });
    }


    render() {
        return(
          <React.Fragment>
            <div className='artist-weekly'>
              <div className='artist-weekly-container'>
                <div className='artist-weekly-outer'>
                    <div className='artist-weekly-flex'>
                        <div className='artist-weekly-main'>
                            {/* <div className='artist-overlay'></div>
                            <div className='artist-overlay-hover'></div> */}
                            <a className='artist-link'></a>
                                {/* <a>
                                    <div className='artist-link-row'>
                                        <div>
                                            <div>
                                                <h3></h3>
                                                <p></p>
                                                <div>
                                                    <button>read more</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a> */}
                        </div>
                        <ol>
                            {this.artistList()}
                        </ol>
                    </div>
                </div>
             </div>
           </div>
         </React.Fragment>
        );
    }
};

export default ArtistWeekly;