import React from 'react';



class GenreColorChanger extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleDefaultColorChange = this.handleDefaultColorChange.bind(this);
        this.handleElectronicColorChange = this.handleElectronicColorChange.bind(this);
    }


    handleElectronicColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');

        genre.style.backgroundColor = 'red';
        selling.style.backgroundColor = 'red';
        disc.style.backgroundColor = 'red';

    }

    handleDefaultColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(66, 160, 189)';
        selling.style.backgroundColor = 'rgb(67, 144, 168)';
        disc.style.backgroundColor = 'rgb(65, 114, 129)';
        
    }

    render() {
        return (
            <React.Fragment>
                        <div className='discover'><h2>Discover</h2></div>
                        <div className='genre-color-changer'>
                                    <div className='genre-grid'>
                                        <ol>
                                                <li onClick={this.handleDefaultColorChange}><p>all</p></li>
                                                <li onClick={this.handleElectronicColorChange}><p>electronic</p></li>

                                        </ol>

                                    </div>
                                    <div className='selling-grid'></div>
                                    <div className='disc-grid'></div>
                        </div>
            </React.Fragment>
           
        )

    }


}


export default GenreColorChanger;