import React from 'react';



class Footer extends React.Component {
    constructor(props) {
       super(props);
   }


   render() {
       return(
           <React.Fragment>
           <div className='footer'>
                        <ul>
                                    <a target="_blank" href="https://www.linkedin.com/in/reginald-dunlap-591612202/"></a>
                                    <a target="_blank" href="https://github.com/Flatout007"></a>
                                    <a target="_blank" href="https://angel.co/u/reggie-dunn"></a>
                        </ul>
           </div>
               </React.Fragment>
       )
   }
}


export default Footer