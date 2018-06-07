import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class pd5 extends Component {

  render() {

    return (

    <div>
 

    <Navbar />

      {/* Gambar Tengah */}
      <div className="container">
        <div className="col-lg-12 gp">
          <img width="50%" height="50%" className="img-responsive img-rounded center-block" alt="New Product1" src="img/p.socket wrench3.jpg" />
          <h3>Wrench, socket head, red, set of 3 sizes </h3> <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
          <div className="container">
            <div className="navH">
              <ul style={{marginRight: 85}}>
                <li className="gpt"> &nbsp;&nbsp;&nbsp; OS-2016-13-0125 &nbsp;&nbsp;&nbsp;</li>
                <li className="gpt"> &nbsp;&nbsp;&nbsp; USD 21.00 &nbsp;&nbsp;&nbsp;</li>
                <li className="gpt"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SET &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <a href="#"> <button className="btn btn-danger">AddToCart</button> </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

    <Footer/>



    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default pd5
