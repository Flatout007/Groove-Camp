import React from 'react';
import AlbumGenreIndexItem from '../album/album_genre_index_item';

class AlbumGenreIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleAlbumProfileList1 = this.handleAlbumProfileList1.bind(this);
        this.handleAlbumProfileList2 = this.handleAlbumProfileList2.bind(this);
        this.handleRandomize = this.handleRandomize.bind(this);
        this.handleAlbums = this.handleAlbums.bind(this);
        this.handleUsers = this.handleUsers.bind(this);
    }


    handleUsers() {
        let users = [];


        this.props.users.forEach((ele) => {
            if (ele.username === 'SILENT SIREN') {
                users.push(ele);
            }
        });


        return users[0];
    }
    


    handleAlbumOfTheWeek() {
        let arr = [];

        for(let i=0; i<this.props.albums.length; i++) {
            if (this.props.albums[i].title === 'GO Way! EP' && i === 1);
                arr.push(
                <li className='album-of-the-week'>
                    <img src={this.props.albums[i].photo} alt=""/>
                    <div className='album-of-the-week-stats'>
                        {/* album name */}
                            <h3>{this.props.albums[i].title}</h3>
                        <h5>by {this.handleUsers().username}</h5>
                        <p> { this.handleUsers().bio.split('.')[0]}</p>
                        <span>Album Of the Day</span>
                    </div>
                    



                    </li>);
        }

        return arr[0];
    }

    handleRandomize(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }

        return result;
    }


    handleAlbums(n) {
        let set = new Set(this.props.albums);
        return this.handleRandomize(Array.from(set),n);
    }


    handleAlbumProfileList2() {
        return this.handleAlbums(5).map((ele, idx) => {
            return <AlbumGenreIndexItem
                key={idx}
                album={ele}
                users={this.props.users}
                songs={this.props.songs}
            />
        })
    }



    handleAlbumProfileList1() {
        return this.handleAlbums(2).map((ele, idx) => {    
            return <AlbumGenreIndexItem
                key={idx}
                album={ele}
                users={this.props.users}
                songs={this.props.songs}
            />
           

        })
    }

    
    render() {
        if(!this.props.albums[0]) return null;
        if(!this.handleAlbumProfileList1()[0]) return null;
        if (!this.handleAlbumProfileList2()[0]) return null;
        if(!this.handleUsers()) return null;
    
       
       
        return(
            <div className='artist-genre-index-container'>
                <ul className='artist-genre-index-grid'>
                    {/*album of the day*/}
                   
                    {this.handleAlbumOfTheWeek()}

                    {/*index items*/}
                   {this.handleAlbumProfileList1()}
                  
                </ul>

                <ul className='artist-genre-index-grid-rand'>
                    {this.handleAlbumProfileList2()}
                </ul>
            </div>
        )
    }

}



export default AlbumGenreIndex;