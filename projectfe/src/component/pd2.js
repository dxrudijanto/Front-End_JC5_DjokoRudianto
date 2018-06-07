import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class pd2 extends Component {

  render() {

    return (

    <div>
 

    <Navbar />

      {/* Gambar Tengah */}
      <div className="container">
        <div className="col-lg-12 gp">
          <img width="50%" height="50%" className="img-responsive img-rounded center-block" alt="New Product1" src="img/p.globe.jpg" />
          <h3>Globe, Columbus</h3> <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
          In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
          <div className="navH">
            <ul style={{marginRight: 35}}>
              <li className="gpt"> &nbsp;&nbsp;&nbsp; OS-2018-07-0109 &nbsp;&nbsp;&nbsp;</li>
              <li className="gpt"> &nbsp;&nbsp;&nbsp; USD 30.15 &nbsp;&nbsp;&nbsp;</li>
              <li className="gpt"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              <a href="#"> <button className="btn btn-danger">AddToCart</button> </a>
            </ul>    
          </div>
        </div>
      </div>

    <Footer/>



    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default pd2
