import React from 'react';
import { deleteAlbum } from '../../util/album_api_util';
import {Link, withRouter} from  'react-router-dom'


class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.deleteAlbum = this.deleteAlbum.bind(this);
    }

    componentWillUpdate() {
        let items = document.getElementsByClassName('album-li');

        Array.from(items).forEach((ele) => {
            ele.style.backgroundSize = 'cover'
        });

       
    }

    // componentDidMount() {
    //     if(document.readyState === 'complete') {
    //         console.log(document.querySelectorAll('.album-list-flex li'))
    //     }
    // }

    
    // deleteAlbum(e) {    
    //     this.props.deleteAlbum(this.props.album.id);
    // }


    render() {
        
        if (!this.props.album) return <p>Loading</p>;
        

        return (
        <React.Fragment>
               <li style={{background:`url(${this.props.album.photo}) 100% no-repeat`}} className='album-li' onClick={() => this.props.history.push(`/album/songs/${this.props.album.id}`)}>
               {/* <Link to={`/`}>albums</Link>  */}
               {/* <audio controls>
                    <source src="https://groovecamp-seed.s3.us-east-2.amazonaws.com/Rising+Hope.mp3" type="audio/mp3"/>
               </audio> */}
              {/* <button onClick={this.deleteAlbum}>delete this album</button>  */}
               <div className='album-stats'>
                {/* <h4>{this.props.album.title}</h4> */}
                <h5>
            
                The Cause Of It All
            
            
            
                <span>by {this.props.album.title}</span>
                </h5>
                {/* make a random number for this */}
                <span>sold for $20</span>
                <span>in USA</span>
                {/* use the date object for this timestamp */}
                <span className='timestamp'>22 seconds ago</span>
            </div>
           </li>
        </React.Fragment>
        )
    }

}

export default withRouter(AlbumIndexItem);

