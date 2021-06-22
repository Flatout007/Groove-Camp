import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    componentDidMount() {
      this.props.requestAlbums();   

      //     if (document.readyState === 'complete') {
      //           console.log(document.querySelectorAll('.album-list-flex li'))
      //     }
    }

    componentDidUpdate() {
            // let max = 1041;
            // let lis = document.querySelectorAll('.album-list-flex li');
            // let myacc;

            // if (document.readyState === 'complete') {
                  
            //       Array.from(lis).reduce((acc, ele, idx, arr) => {  
            //             myacc = acc;
            //             return myacc += ele.clientWidth
                  

            //             // console.log(acc)

      
            //       },0)

            //       if(myacc >= max) lis.forEach((ele, idx, arr) => .style.display = 'none');

                 
                
              
            // }
    }

    

    constructor(props) {
        super(props);
        this.albumList = this.albumList.bind(this);
    }

    handleLimit() {
      return this.props.albums.filter((ele, idx) => { return idx < 20 } );
    }


    albumList() {
        return this.handleLimit().map((ele) => {
           if(ele.title !== 'GO Way! EP') 
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
                    
              <div className="albums-display">
                    <div className='selling-now'>Selling Now</div>
                    <ul className='album-list-flex'>
                        {this.albumList()}
                    </ul>                
              </div>
        </React.Fragment >);
    }
}


export default AlbumIndex
