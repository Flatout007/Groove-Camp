import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.requestAlbums();
        
    }

    constructor(props) {
        super(props);
        this.albumList = this.albumList.bind(this);
    }


    albumList() {
        return this.props.albums.map((ele) => {
           return <AlbumIndexItem
             key={ele.id}
             album={ele}
             deleteAlbum={this.props.deleteAlbum}

           />
        });
    }


    render() {
       
      return (
        <React.Fragment>
         <div className="how-many-selling">
          <div className='how-many-title-flex'>
                <h4 className='how-many-title'>Fans have paid artists 
                  <span className='how-many-span-1'>
                       <strong>&nbsp;$718 million&nbsp;</strong>
                       using Groovecamp
                  </span>
                  , and
                  <span className='how-many-span-2'>
                  <strong>&nbsp;$20.4 million&nbsp;</strong>
                         in the last 30 days alone.
                  </span>
              </h4>
          </div>
         </div>
            <div>
                {/* <div className='album-flex'> */}
                <div className='selling-now'><h5>Selling Now</h5></div>
                  {/* <div className='flex-grid'> */}
                    <ul className='album-list-flex'>{this.albumList()}</ul>
                  {/* </div> */}
                {/* </div> */}
            </div>
        </React.Fragment >);
    }
}


export default AlbumIndex
