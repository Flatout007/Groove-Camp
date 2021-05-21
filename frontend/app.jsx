import React from 'react';
import { useState, useRef } from 'react';
import Player from './components/player/player';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';


import Modal from './components/modal/modal';


import GreetingIndex from './components/greeting/greeting_container';
import ArtistWeekly from './components/artist/artist_index_container';
import SignupContainer from './components/session_form/signup_container';
import ArtistIndexContainer from './components/artist/artist_index_container';
import ArtistArticle from './components/artist/artist_article_container';
import AlbumForm from './components/album/album_create_form_container';
import LoginContainer from './components/session_form/login_container';
import SessionForm from './components/session_form/session_form';
import AlbumIndex from './components/album/album_index_container';
import AlbumShow from './components/album/album_show_container';
import SongIndex from './components/song/song_index_container';
import SongForm from './components/song/song_create_form_container';
import ArtistHome from './components/artist/artist_home_container';
import ArtistProfileIndexContainer from './components/profile/artist_profile_index_container';

import AlbumSongContainer from './components/album/album_song_container';

const App = () => {
     
        return(
   
               <div> 
                 <Modal/>
                
                
             
                
                      
                        <Route exact path='/artist/:id' component={ArtistArticle}></Route>
                        <Route exact path='/album/:id' component={AlbumShow}></Route>
                        <Route path='/albums/new' component={AlbumForm}></Route>
                        <Route path='/songs/new' component={SongForm}></Route>
                        <Route exact path="/signup" component={SignupContainer}></Route>   
                        <Route exact path="/" component={GreetingIndex}></Route>
                        <Route exact path="/" component={ArtistWeekly}></Route>
                        <Route exact path="/" component={AlbumIndex}></Route>
                        <Route exact path="/" component={SongIndex}></Route>
                        <Route exact path="/" component={ArtistProfileIndexContainer}></Route>
                        <Route exact path='/album/songs/:id' component={AlbumSongContainer}></Route> 
                        <Route exact path="/" component={ArtistHome}></Route>
                      
                
                   
                
                   
                   
                   
                   
                  
                  {/* <Route exact path='/login' component={LoginContainer}></Route>  */}
                  {/* {<Route exact path="/" component={GreetingIndex}></Route>} */}
              
            </div>)
        
    
}





export default App;