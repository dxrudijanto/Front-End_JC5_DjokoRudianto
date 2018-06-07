import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class mycart extends Component {

  render() {

    return (

    <div>
 

    <Navbar />

      {/* Start of My Cart */}
            <div className="container" style={{marginTop: 70}}>
              <table className="table table-hover table-condensed" id="cart">
                <thead>
                  <tr>
                    <th style={{width: '50%'}}>Product</th>
                    <th style={{width: '10%'}}>Price</th>
                    <th style={{width: '8%'}}>Quantity</th>
                    <th className="text-center" style={{width: '22%'}}>Subtotal</th>
                    <th style={{width: '10%'}} />
                  </tr>
                </thead>
                <tbody>
                  {/* row-1 */}
                  <tr>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs"><img className="img-responsive" alt="..." src="img/p.antoldwatch.jpg" /></div>
                        <div className="col-sm-10">
                          <h4 className="nomargin">OS-2018-<em>01</em>-0056 <u>Gold Watch, Balenciaga Style</u> </h4>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$85.50</td>
                    <td data-th="Quantity">
                      <input className="form-control text-center" type="number" defaultValue={1} />
                    </td>
                    <td className="text-center" data-th="Subtotal"> 85.50</td>
                    <td className="actions" data-th>
                      <button className="btn btn-info btn-sm"><i className="fa fa-sync" /></button>
                      <button className="btn btn-danger btn-sm"><i className="fa fa-trash-alt" /></button>
                    </td>
                  </tr>
                  {/* row-2 */}
                  <tr>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs"><img className="img-responsive" alt="..." src="img/p.socket wrench3.jpg" /></div>
                        <div className="col-sm-10">
                          <h4 className="nomargin">OS-2016-<em>13</em>-0125 <u>Wrench, socket head, red, set of 3 sizes</u></h4>
                          <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$21.00</td>
                    <td data-th="Quantity">
                      <input className="form-control text-center" type="number" defaultValue={1} />
                    </td>
                    <td className="text-center" data-th="Subtotal">21.00</td>
                    <td className="actions" data-th>
                      <button className="btn btn-info btn-sm"><i className="fa fa-sync" /></button>
                      <button className="btn btn-danger btn-sm"><i className="fa fa-trash-alt" /></button>
                    </td>
                  </tr>
                  {/* row-3 */}
                  <tr>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs"><img className="img-responsive" alt="..." src="img/p.mbwood.jpg" /></div>
                        <div className="col-sm-10">
                          <h4 className="nomargin">OS-2018-<em>08</em>-0099 <u>Pen, ink series, oakwood cured body, nos. 2231</u></h4>
                          <p>Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$185.50</td>
                    <td data-th="Quantity">
                      <input className="form-control text-center" type="number" defaultValue={1} />
                    </td>
                    <td className="text-center" data-th="Subtotal">185.50</td>
                    <td className="actions" data-th>
                      <button className="btn btn-info btn-sm"><i className="fa fa-sync" /></button>
                      <button className="btn btn-danger btn-sm"><i className="fa fa-trash-alt" /></button>
                    </td>
                  </tr>
                  {/* row-4 */}
                  <tr>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs"><img className="img-responsive" alt="..." src="img/p.binocularhead.jpg" /></div>
                        <div className="col-sm-10">
                          <h4 className="nomargin">OS-2017-<em>01</em>-1007 <u>Binocular, type zoom lens, 12-85mm, 22x</u></h4>
                          <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$125.50</td>
                    <td data-th="Quantity">
                      <input className="form-control text-center" type="number" defaultValue={1} />
                    </td>
                    <td className="text-center" data-th="Subtotal">125.50</td>
                    <td className="actions" data-th>
                      <button className="btn btn-info btn-sm"><i className="fa fa-sync" /></button>
                      <button className="btn btn-danger btn-sm"><i className="fa fa-trash-alt" /></button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="visible-xs">
                    <td className="text-center"><strong>Total 417.50</strong></td>
                  </tr>
                  <tr>
                    <td><a className="btn btn-warning" href="Itemlist"><i className="fa fa-angle-left" /> Continue Shopping</a></td>
                    <td className="hidden-xs" colSpan={2} />
                    <td className="hidden-xs text-center"><strong>Total $417.50</strong></td>
                    <td><a className="btn btn-success btn-block" href="myinvpdg">Checkout <i className="fa fa-angle-right" /></a></td>
                  </tr>
                </tfoot>
              </table>
            </div>

      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default mycart
