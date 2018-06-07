import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class Adminvlist extends Component {

  render() {

    return (

    <div>
 
{/* Header 1 */}
        <nav className="navbar navbar-custom navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand  TLogo1" href="/">  <img width={35} src="img/(logo)linkedin.png" /> </a>
              <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
                {/* <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> */}
                <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="ddlist">
              <ul className="nav navbar-nav navT">
                <li className="nav2"><a href="Admh">Home</a></li>
                <li className="nav2 active"><a href="#">Invoice List</a></li>
                <li className="nav2"><a href="AdmMC">Maintain Category</a></li>
                <li className="nav2"><a href="AdmMP">Maintain Product</a></li>
              </ul>
              <a href="myprofile.html">
                <figure className="navbar-right">
                  <img width={25} height={25} className=" img-circle" style={{margin: '14 10 0 0'}} src="img/(logo)skype.png" />
                </figure>
              </a>
              <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Admin </b>
              <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                Overdue Invoices <b className="label label-danger">1</b>
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
                <h2>Invoices List</h2> 
                <button className="btn btn-info btn-sm pull-right" style={{marginTop: 20}}><i className="fa fa-sync" /></button>
                <input className="pull-right" style={{margin: '20 5 0 0'}} type="date" /> 
                <label className="pull-right" style={{marginTop: 20}}> To &nbsp; </label> 
                <input className="pull-right" style={{margin: '20 5 0 0'}} type="date" /> 
                <label className="pull-right" style={{marginTop: 20}}> From &nbsp; </label>
              </div><hr />
              <div className="row text-right" style={{margin: '0 5 0 0'}}>
                <div className="search pull-left">
                  <i className="fa fa-search" />
                  <input type="text" placeholder="Search Invoices" />
                </div> 
                <button className="btn btn-warning" style={{width: 100}}>Pending</button>
                <button className="btn btn-danger" style={{width: 100}}>Overdue</button>
                <button className="btn btn-success" style={{width: 100}}>Paid</button>      
              </div> <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title"><strong>Invoices List</strong></h3>
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-condensed">
                      <thead>
                        <tr>
                          <td><strong>Status</strong></td>
                          <td className="text-center"><strong>Order</strong></td>
                          <td className="text-center"><strong>Date</strong></td>
                          <td className="text-center"><strong>Customer</strong></td>
                          <td className="text-right"><strong>Invoice Amount</strong></td>
                        </tr>
                      </thead>
                      <tbody>
                        {/* foreach ($order->lineItems as $line) or some such thing here */}
                        <tr>
                          <td className="success">Paid</td>
                          <td className="text-center"> <a href="#"> PO 12345 </a> </td>
                          <td className="text-center">05/29/2018</td>
                          <td className="text-center"> <a href="#">Djoko Rudijanto</a></td>
                          <td className="text-right">$594.70</td>
                        </tr>
                        <tr>
                          <td className="warning">Pending</td>
                          <td className="text-center"> <a href="#"> PO 12300 </a> </td>
                          <td className="text-center">04/18/2018</td>
                          <td className="text-center"><a href="#">Setya Novanto</a></td>
                          <td className="text-right">$1000.00</td>
                        </tr>
                        <tr>
                          <td className="danger">Overdue</td>
                          <td className="text-center"> <a href="#"> PO 11299 </a> </td>
                          <td className="text-center">03/31/2018</td>
                          <td className="text-center"><a href="#">Freidich Yuniarto</a></td>
                          <td className="text-right">$405.30</td>
                        </tr>
                        <tr>
                          <td className="thick-line" />
                          <td className="thick-line" />
                          <td className="thick-line" />
                          <td className="thick-line text-center"><strong>Subtotal Paid</strong></td>
                          <td className="thick-line text-right">$594.70</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Subtotal Pending</strong></td>
                          <td className="no-line text-right">$1000.00</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Subtotal Overdue</strong></td>
                          <td className="no-line text-right">$405.30</td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center"><strong>Total Invoice Value</strong></td>
                          <td className="no-line text-right"><b>$2000.00</b></td>
                        </tr>
                        <tr>
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line" />
                          <td className="no-line text-center" />
                          <td className="no-line text-right"> <button className="btn btn-info"> Print List </button> </td>
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

    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default Adminvlist
