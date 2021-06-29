import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {flag: true};

      this.handleAnimation = this.handleAnimation.bind(this);
      this.albumList = this.albumList.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
      this.props.requestAlbums();
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
               users={this.props.users}
           />
        });
    }


    handleAnimation() {
      let slider = document.getElementById('slider');
      let li = slider.getElementsByClassName('album-li')[0];


      if(this.state.flag === true) {
            li.style.paddingLeft = '-11.5px';
      } else {
            slider.appendChild(li).style.paddingLeft = '0px';
            li.style.paddingLeft = '0px';
            li.style.paddingLeft = '-11.5px';
      }

      this.setState({flag: false});

    }


    handleClick() {
      let button = document.querySelector('.selling-now');

      setInterval(() => {
            button.click();
      }, 3000);
    }




    render() {
      return (
        <React.Fragment>
              <div  className="how-many-selling">
                        {/* dummy audio tag only used for preloading data to page*/}
                        <audio onLoadedMetadata={this.handleClick} preload='metadata' src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                    
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
                        <div onClick={this.handleAnimation} className='selling-now'>Selling Now</div>

                    
                          <ul id='slider' className='album-list-flex'>
                        
                           {this.albumList()}
                        
                         </ul>     
                 
              </div>
        </React.Fragment >);
    }
}


export default AlbumIndex
