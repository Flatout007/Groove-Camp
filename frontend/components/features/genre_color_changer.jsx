import React from 'react';


class GenreColorChanger extends React.Component {
    constructor(props) {
        super(props);


        this.handleDefaultColorChange = this.handleDefaultColorChange.bind(this);
        this.handleElectronicColorChange = this.handleElectronicColorChange.bind(this);
        this.handleRockColorChange = this.handleRockColorChange.bind(this);
        this.handleMetalColorChange = this.handleMetalColorChange.bind(this);
        this.handleAlternativeColorChange = this.handleAlternativeColorChange.bind(this);
        this.handleHipHopColorChange = this.handleHipHopColorChange.bind(this);
        this.handleExperimentalChange = this.handleExperimentalColorChange.bind(this);
        this.handlePunkColorChange = this.handlePunkColorChange.bind(this);
        this.handleFolkColorChange = this.handleFolkColorChange.bind(this);
        this.handlePopColorChange = this.handlePopColorChange.bind(this);
        this.handleAmbientColorChange = this.handleAmbientColorChange.bind(this);
        this.handleSoundTrackColorChange = this.handleSoundTrackColorChange.bind(this);
        this.handleWorldColorChange = this.handleWorldColorChange.bind(this);
        this.handleAcousticColorChange = this.handleAcousticColorChange.bind(this);
        this.handleJazzColorChange = this.handleJazzColorChange.bind(this);
    }

    
    handleAcousticColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(233, 73, 73)';
        selling.style.backgroundColor = 'rgb(216, 49, 49)';
        disc.style.backgroundColor = 'rgb(200, 45, 45)';
    }



    handleJazzColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(0, 184, 159)';
        selling.style.backgroundColor = 'rgb(7, 136, 119)';
        disc.style.backgroundColor = 'rgb(9, 113, 99)';
    }


    handleWorldColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(230, 25, 100)';
        selling.style.backgroundColor = 'rgb(182, 32, 87)';
        disc.style.backgroundColor = 'rgb(160, 34, 80)';
    }

    

    handleSoundTrackColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');

        genre.style.backgroundColor = 'rgb(94, 159, 201)';
        selling.style.backgroundColor = 'rgb(77, 138, 179)';
        disc.style.backgroundColor = 'rgb(76, 126, 158)';
    }


    handleAmbientColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');

        genre.style.backgroundColor = 'rgb(163, 194, 189)';
        selling.style.backgroundColor = 'rgb(148, 168, 165)';
        disc.style.backgroundColor = 'rgb(143, 153, 151)';
    }
    

    handlePopColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(242, 13, 147)';
        selling.style.backgroundColor = 'rgb(193, 21, 121)';
        disc.style.backgroundColor = 'rgb(170, 24, 109)';
    }

   
    handleFolkColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(152, 74, 181)';
        selling.style.backgroundColor = 'rgb(123, 73, 141)';
        disc.style.backgroundColor = 'rgb(109, 71, 123)';

    }


    handlePunkColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');

        genre.style.backgroundColor = 'rgb(242, 82, 2)';
        selling.style.backgroundColor = 'rgb(192, 72, 12)';
        disc.style.backgroundColor = 'rgb(168, 66, 16)';
    }



    handleExperimentalColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(93, 25, 230)';
        selling.style.backgroundColor = 'rgb(82, 32, 182)';
        disc.style.backgroundColor = 'rgb(76, 34, 160)';
    }


    handleHipHopColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(54, 100, 161)';
        selling.style.backgroundColor = 'rgb(52, 82, 121)';
        disc.style.backgroundColor = 'rgb(50, 73, 103)';
    }


    handleAlternativeColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(230, 87, 25)';
        selling.style.backgroundColor = 'rgb(182, 77, 32)';
        disc.style.backgroundColor = 'rgb(160, 72, 34)';
    }

    

    handleMetalColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');

        genre.style.backgroundColor = 'rgb(153, 0, 0)';
        selling.style.backgroundColor = 'rgb(107, 6, 6)';
        disc.style.backgroundColor = 'rgb(85, 7, 7)';
    }


    handleRockColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(213, 32, 38)';
        selling.style.backgroundColor = 'rgb(167, 37, 41)';
        disc.style.backgroundColor = 'rgb(146, 38, 41)';
    }



    handleElectronicColorChange() {
        let genre = document.querySelector('.genre-grid');
        let selling = document.querySelector('.selling-grid');
        let disc = document.querySelector('.disc-grid');


        genre.style.backgroundColor = 'rgb(49, 199, 35)';
        selling.style.backgroundColor = 'rgb(48, 155, 39)';
        disc.style.backgroundColor = 'rgb(47, 134, 39)';
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
            <div className='genre-container'>
                        <div className='discover'><h2>Discover</h2></div>
                        <div className='genre-color-changer'>
                                    <div className='genre-grid'>
                                                <ol>
                                                            <li onClick={this.handleDefaultColorChange}><p>all</p></li>
                                                            <li onClick={this.handleElectronicColorChange}><p>electronic</p></li>
                                                            <li onClick={this.handleRockColorChange}><p>rock</p></li>
                                                            <li onClick={this.handleMetalColorChange}><p>metal</p></li>
                                                            <li onClick={this.handleAlternativeColorChange}><p>alternative</p></li>
                                                            <li onClick={this.handleHipHopColorChange}><p>hip-hop/rap</p></li>
                                                            <li onClick={this.handleExperimentalColorChange}><p>experimental</p></li>
                                                            <li onClick={this.handlePunkColorChange}><p>punk</p></li>
                                                            <li onClick={this.handleFolkColorChange}><p>folk</p></li>
                                                            <li onClick={this.handlePopColorChange}><p>j-pop</p></li>
                                                            <li onClick={this.handleAmbientColorChange}><p>ambient</p></li>
                                                            <li onClick={this.handleSoundTrackColorChange}><p>soundtrack</p></li>
                                                            <li onClick={this.handleWorldColorChange}><p>world</p></li>
                                                            <li onClick={this.handleJazzColorChange}><p>jazz</p></li>
                                                            <li onClick={this.handleAcousticColorChange}><p>acoustic</p></li>

                                                </ol>
                                    </div>
                                    <div className='selling-grid'>
                                                <ol>
                                                            <li><p>any format</p></li>
                                                            <li><p>digital</p></li>
                                                            <li><p>artist-recommended</p></li>
                                                </ol>
                                    </div>
                                    <div className='disc-grid'>
                                                <ol>
                                                            <li><p>best-selling</p></li>
                                                            <li><p>new arrivals</p></li>
                                                            <li><p>viynl</p></li>
                                                            <li><p>compact disc</p></li>
                                                            <li><p>cassette</p></li>
                                                    
                                                </ol>
                                    </div>
                        
                        </div>
            </div>
           
        )

    }


}


export default GenreColorChanger;