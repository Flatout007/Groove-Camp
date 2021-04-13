import React from 'react';

/* 
// html model 
<li className='artist-weekly-img-1'>
    <div className='artist-overlay'></div>
    <div className='artist-overlay-hover'>image1</div>
    <a>
        <div>
            <h3></h3>
            <h4></h4>
        </div>
    </a>
</li> 

Export an `ArtistIndexItem` presentational component that takes in an `artist`
 The component should render an `li` containing the following:

1. A link to the artist's show page with text of the artist name or any other details needed.
*/

class ArtistIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li>
                <div className='artist-overlay'></div>
                <div className='artist-overlay-hover'></div>
               {/* <Link to={`artists/${this.props.artist.id}`}> */}
               <a onClick={() => console.log('hello')}>
                    <div className='img-link-div'>
                        <h3></h3>
                        <h4></h4>
                    </div>
                  {/* </Link> */}
                </a>
            </li>
        )
    }

}

export default ArtistIndexItem;

