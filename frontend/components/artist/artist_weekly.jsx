// home page component that conatins links to artist show

import React from 'react';
import ArtistIndexItem from './artist_index_item';
import {withRouter} from 'react-router-dom';


class ArtistWeekly extends React.Component {
    componentDidMount() {
       this.props.requestAllUsers();
    }


    constructor(props) {
        super(props);
        this.artistList = this.artistList.bind(this);
    }

    
    artistList() {
           return this.props.users.map((ele) => {
              if(ele.username === 'LiSA' || ele.username === 'Nico Touches the Walls' || ele.username === 'ONE OK ROCK') {
                return  <ArtistIndexItem
                 artist={ele}
                 key={ele.id}
                 artist={ele}
                />
              }
            });
    }

    handleArtistOfTheWeek() {
        return this.props.users.map((ele) => {
            if (ele.username === 'ONE OK ROCK') {
                return (<div key={ele.id} className='artist-weekly-main'>
                    {/* <button onClick={() => this.props.history.push(`/artist/${ele.id}`)}>go</button> */}
                    
                </div>)
            }
        });
    }

    handlePlayer() {

    }


    render() {
        console.log(this.props.history)
        if(!this.props.users) return null;
        return(
            <div>
                        <div className='artist-weekly'>
                                    <div className='artist-weekly-container'>
                                                <div className='artist-weekly-outer'>
                                                <div className='artist-weekly-flex'>

                                                <div className='weekly-player-container'>
                                                <li className='weekly-player'>▶</li>
                                                            <div className='weekly-player-text'></div>
                                                </div>

                                                            {this.handleArtistOfTheWeek()}

                                                            <ol>

                                                                        {this.artistList()}

                                                            </ol>
                                                </div>
                                                </div>
                                    </div>
                        </div>
            </div>
        );
    }
};

export default withRouter(ArtistWeekly);