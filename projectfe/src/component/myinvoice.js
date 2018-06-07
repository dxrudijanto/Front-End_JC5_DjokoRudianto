import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class myinvpdg extends Component {

  render() {

    return (

    <div>
 
      <div>
              {/* Header 1 */}
              <nav className="navbar navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand  TLogo1" href="Home">  <img width={35} src="img/(logo)linkedin.png" /> </a>
                    <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
                      {/* <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span> */}
                      <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="ddlist">
                    <ul className="nav navbar-nav navT">
                      <li className="nav2"><a href="myprofile">My Profile</a></li>
                      <li className="nav2"><a href="mycart">My Cart</a></li>
                      <li className="nav2 active"><a href="myinvoice">My Invoice</a></li>
                    </ul>
                    <a href="myprofile.html">
                      <figure className="navbar-right">
                        <img width={25} height={25} className=" img-circle" style={{margin: '14 10 0 0'}} src="img/(logo)youtube.png" />
                      </figure>
                    </a>
                    <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Rudy </b>
                    <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                      Invoice Items <span className="badge">3</span>
                    </button>
                    <form className="navbar-form navbar-right" style={{paddingTop: 2}}>
                      <div className="input-group">
                        <input className="form-control" type="Search" placeholder="Search..." />
                        <div className="input-group-btn">
                          <button className="btn btn-md btn-info" style={{height: 34}}>
                            <i className="fa fa-search" style={{color: 'wheat'}} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </nav>
              {/* Start of My Invoice */}
              <div className="container" style={{marginTop: 70}}>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="invoice-title">
                      <h2>Invoice</h2><h3 className="pull-right">Purchase Order # 12345</h3>
                    </div>
                    <hr style={{borderColor: 'maroon'}} />
                    <div className="row">
                      <div className="col-xs-8">
                        <address>
                          <strong>Billed To:</strong><br />
                          Djoko Rudijanto<br />
                          Cipulir Permai<br />
                          H-#. Y12<br />
                          Jakarta, PC 12220
                        </address>
                      </div>
                      <div className="col-xs-4 text-right">
                        <address>
                          <strong>Shipped To:</strong><br />
                          {/* Khasfy Tristan Wijatmoko<br>
                                      1234 Main<br>
                                      Apt. 4B<br>
                                      Orchard Rd, ST 54321, Singapore */}
                          <form>
                            <textarea name="shipTo" disabled className="form-control" placeholder="Describe shipping to address here (required)" rows={6} cols={50} defaultValue={"Attn: Djoko Rudijanto\nCipulir Permai\nH-#. Y12\nJakarta, PC 12220\nPh: 021-7395896\nemail: dxrudijanto@gmail.com                                \n                                "} />
                          </form>
                        </address>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <address>
                          <strong>Payment Method:</strong><br />
                          Visa ending **** 4242<br />
                          dxrudijanto@gmail.com
                        </address>
                      </div>
                      <div className="col-xs-6 text-right">
                        <address>
                          <strong>Order Date:</strong><br />
                          May 29, 2018<br /><br />
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h3 className="panel-title"><strong>Order summary</strong></h3>
                      </div>
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-condensed">
                            <thead>
                              <tr>
                                <td><strong>Item</strong></td>
                                <td className="text-center"><strong>Price</strong></td>
                                <td className="text-center"><strong>Quantity</strong></td>
                                <td className="text-right"><strong>Totals</strong></td>
                              </tr>
                            </thead>
                            <tbody>
                              {/* foreach ($order->lineItems as $line) or some such thing here */}
                              <tr>
                                <td> <a href="pd1.html"> OS-2018-<em>01</em>-0056 </a> </td>
                                <td className="text-center">$85.50</td>
                                <td className="text-center">2</td>
                                <td className="text-right">$171.00</td>
                              </tr>
                              <tr>
                                <td> <a href="pd5.html"> OS-2016-<em>13</em>-0125 </a> </td>
                                <td className="text-center">$21.00</td>
                                <td className="text-center">5</td>
                                <td className="text-right">$105.00</td>
                              </tr>
                              <tr>
                                <td> <a href="pd7.html"> OS-2017-<em>01</em>-1007 </a> </td>
                                <td className="text-center">$125.50</td>
                                <td className="text-center">2</td>
                                <td className="text-right">$251.00</td>
                              </tr>
                              <tr>
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                <td className="thick-line text-right">$527.00</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Value Added Tax (VAT) 10%</strong></td>
                                <td className="no-line text-right">$52.70</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                <td className="no-line text-right">$15</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Total</strong></td>
                                <td className="no-line text-right">$594.70</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center" />
                                <td className="no-line text-right"> <button className="btn btn-danger"> Pay Invoice </button> </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid"> </div>
            </div>

      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default myinvpdg
