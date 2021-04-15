import React from 'react';
import GreetingNav from '../greeting/greeting_container';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


/*
Write an `Artist Show` presentational component that renders an artist
information. This component should receive the artist
from the store as props via its container and fetch it once it has successfully
mounted to the DOM. Additionally, this component should contain a link back to
the Home `/` page.
*/

class ArtistArticle extends React.Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount() {
        
    //   this.props.requestAllUsers().then(() => {this.props.store.entities.users[this.props.match.params.id]})
        this.props.requestUser(this.props.match.params.id)
        this.props.requestAlbums()
        //return this.props.requestUser(this.props.artist.id)

    }

    albumList() {
        return this.props.albums.map((ele) => {      
            if (parseInt(this.props.match.params.id) === ele.artist_id) {
         return <li>
                <p>{ele.title}</p>
            </li>
            }
        });
        
    }

    render() {
       console.log(this.albumList())
        
       
       
      
        if (!this.props.artist) return <p>Loading</p>;
        if (!this.props.albums) return <p>Loading</p>;
   
        return(
        <React.Fragment>
            <GreetingNav />
            <nav className='daily-bar'>
                    <div className='daily-wrapper'>
                        
                        <a> 
                            <strong>Groovecamp Daily</strong>
                        </a>

                        <span className="flex-links">
                            <span className="flex-link-1">
                                <a href="">Link</a></span>
                            <span>
                                ·<a href="">Link</a></span>
                            <span>
                                ·<a href="">Link</a></span>
                            <span>
                                ·<a href="">Link</a></span>
                        </span>

                        <button className="daily-button">Home</button>
                    </div>
            </nav>
           
            {/* <p>{this.props.artist.username}</p> */}
            <article className='artist-article'>
                 <img className='artist-article-img' src={this.props.artist.photoUrl} alt=""/>
            </article>

            {this.albumList()}
            
            

            {/* <Link to={'/'}>Home</Link> */}
        </React.Fragment>
          )

       
        
    }
}

export default  ArtistArticle;