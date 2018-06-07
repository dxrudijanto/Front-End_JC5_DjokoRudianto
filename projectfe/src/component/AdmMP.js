import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class AdmMP extends Component {

  render() {

    return (

    <div>
 
    {/* Header 1 */}
    <div id="admH">
      <nav className="navbar navbar-custom navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand  TLogo1" href="/">  <img width={35} src="img/(logo)linkedin.png" /> </a>
              <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
                <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="ddlist">
              <ul className="nav navbar-nav navT">
                <li className="nav2"><a href="Admh">Home</a></li>
                <li className="nav2"><a href="Adminvlist">Invoices List</a></li>
                <li className="nav2"><a href="AdmMC">Maintain Category</a></li>
                <li className="nav2 active"><a href="#">Maintain Product</a></li>
              </ul>
              <a href="myprofile.html">
                <figure className="navbar-right">
                  <img width={25} height={25} className=" img-circle" style={{margin: '14 10 0 0'}} src="img/(logo)youtube.png" />
                </figure>
              </a>
              <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Admin </b>
              <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                Notifications <span className="badge">3</span>
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
        {/* Maintain Category     */}
        <div className="container" style={{margin: '10 0'}}>
          <h2>&nbsp;</h2> <br />
          <ul className="nav nav-tabs" style={{marginBottom: 0}}>
            <li className="active"><a href="#homeb" data-toggle="tab">Index</a></li>
            <li><a href="#menu1b" data-toggle="tab">Add</a></li>
            <li><a href="#menu2b" data-toggle="tab">Modify</a></li>
            <li><a href="#menu3b" data-toggle="tab">Remove</a></li>
            <li><a href="#menu4b" data-toggle="tab">Display</a></li>
          </ul>
          <div className="tab-content" style={{borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'rgb(190, 190, 190)'}}> 
            <div className="tab-pane fade in active" id="homeb" style={{padding: 10}}>
              <h3>FUNCTIONS</h3>
              <p>Create, Change, Delete and Display Product</p>
            </div>
            <div className="tab-pane fade" id="menu1b" style={{padding: 10}}>
              <h3>Create Product</h3>
              <p>Add Product below</p> <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label htmlFor="inputyear">OS Year</label>
                    <input disabled className="form-control" id="inputyear" type="text" defaultValue="OS-2018-" />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputcatcode">Category Code</label>
                    <input className="form-control" required placeholder="select one" list="category" />
                    <datalist id="category">
                      <option value="01|Apparel">
                      </option><option value="02|Parts">
                      </option><option value="04|Medtool">
                      </option><option value="08|Stationery">
                      </option><option value="11|Toys">
                      </option><option value="13|Tool">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputsno">Serial No</label>
                    <input className="form-control" id="inputsno" required type="text" maxLength={4} placeholder="numbers: 0001 - 9999" />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputmerchant">Merchant</label>
                    <input className="form-control" required placeholder="select one" list="merchant" />
                    <datalist id="merchant">
                      <option value="Caterpillar">
                      </option><option value="FlowServe">
                      </option><option value="John Crane">
                      </option><option value="MontBlanc">
                      </option><option value="NPN">
                      </option><option value="Solar Rolls-Royce">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputmpn">Merchant Part No</label>
                    <input className="form-control" id="inputmpn" required type="text" maxLength={20} placeholder="part number" />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputuom">Unit Of Measure</label>
                    <input className="form-control" id="inputuom" required type="text" maxLength={5} placeholder="e.g. EA" list="UOM" />
                    <datalist id="UOM">
                      <option value="BOX">
                      </option><option value="EA">
                      </option><option value="PACK">
                      </option><option value="PAIR">
                      </option><option value="SET">
                      </option><option value="UNIT">
                      </option></datalist>
                  </div>
                </div> <br /> <br /><br /><br /><br />
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputstext">Short Descriptions</label>
                    <input className="form-control" id="inputstext" required type="text" maxLength={40} placeholder="40 chars Descriptions" />
                  </div>
                  <div className="form-group col-md-8">
                    <label htmlFor="inputltext"> Long Descriptions</label>
                    <textarea className="form-control" style={{borderRadius: 10, border: '1px solid #ddd'}} maxLength={255} rows={4} cols={110} defaultValue={"   \n                              \"Complete Product Descriptions [max 255 chars]\" "} />
                  </div> 
                </div>  
                <p> &nbsp; </p>
                <div className="form-group col-md-12">
                  <label htmlFor="inputpic">Add A Picture</label>
                  <input className="form-control" id="inputpic" type="text" placeholder="URL/Folder address" />
                </div>          
                <div className="form-group pull-right">
                  <button className="btn btn-primary" style={{margin: '0 15'}} type="submit">Add</button>
                </div>
                <p> &nbsp; </p>
              </form> {/*end of Form*/}
            </div> {/*End of Menu 1b*/}
            <div className="tab-pane fade" id="menu2b" style={{padding: 10}}>
              <h3>Change Product</h3>
              <p>Modify Product below</p> <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label style={{color: 'goldenrod'}} htmlFor="inputyear">OneSupplies Product No.</label>
                    <input className="form-control" required placeholder="select a product to change" list="product" />
                    <datalist id="product">
                      <option value="OS-2018-01-0056">
                      </option><option value="OS-2018-07-0109">
                      </option><option value="OS-2017-11-0231">
                      </option><option value="OS-2017-13-0401">
                      </option><option value="OS-2016-13-0125">
                      </option><option value="OS-2015-02-0056">
                      </option></datalist>
                  </div> <hr />
                  <div className="form-group col-md-3">
                    <label htmlFor="inputcatcode">Edit Category Code</label>
                    <input className="form-control" required placeholder="select one" list="category" />
                    <datalist id="category">
                      <option value="01|Apparel">
                      </option><option value="02|Parts">
                      </option><option value="04|Medtool">
                      </option><option value="08|Stationery">
                      </option><option value="11|Toys">
                      </option><option value="13|Tool">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputmerchant">Edit Merchant</label>
                    <input className="form-control" required placeholder="select one" list="merchant" />
                    <datalist id="merchant">
                      <option value="Caterpillar">
                      </option><option value="FlowServe">
                      </option><option value="John Crane">
                      </option><option value="MontBlanc">
                      </option><option value="NPN">
                      </option><option value="Solar Rolls-Royce">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputmpn">Edit Merchant Part No</label>
                    <input className="form-control" id="inputmpn" required type="text" maxLength={20} placeholder="part number" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputuom">Edit Unit Of Measure</label>
                    <input className="form-control" id="inputuom" required type="text" maxLength={5} placeholder="e.g. EA" list="UOM" />
                    <datalist id="UOM">
                      <option value="BOX">
                      </option><option value="EA">
                      </option><option value="PACK">
                      </option><option value="PAIR">
                      </option><option value="SET">
                      </option><option value="UNIT">
                      </option></datalist>
                  </div>
                </div> <br /> <br /><br /><br /><br />
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputstext">Edit Short Descriptions</label>
                    <input className="form-control" id="inputstext" required type="text" maxLength={40} placeholder="40 chars Descriptions" />
                  </div>
                  <div className="form-group col-md-8">
                    <label htmlFor="inputltext">Edit Long Descriptions</label>
                    <textarea className="form-control" style={{borderRadius: 10, border: '1px solid #ddd'}} maxLength={255} rows={4} cols={110} defaultValue={"   \n                        "} />
                  </div> 
                </div>  
                <p> &nbsp; </p>
                <div className="form-group col-md-12">
                  <label htmlFor="inputpic">Edit Picture</label>
                  <input className="form-control" id="inputpic" type="text" placeholder="URL/Folder address" />
                </div>          
                <div className="form-group pull-right">
                  <button className="btn btn-warning" style={{margin: '0 15'}} type="submit">Change</button>
                </div>
                <p> &nbsp; </p>
              </form> {/*end of Form*/}
            </div> {/*End of Menu 2b*/}
            <div className="tab-pane fade" id="menu3b" style={{padding: 10}}>
              <h3>Delete Product</h3>
              <p>Remove Product below</p> 
              <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label style={{color: 'lightcoral'}} htmlFor="inputyear">OneSupplies Product No.</label>
                    <input className="form-control" required placeholder="select a product to delete" list="product" />
                    <datalist id="product">
                      <option value="OS-2018-01-0056">
                      </option><option value="OS-2018-07-0109">
                      </option><option value="OS-2017-11-0231">
                      </option><option value="OS-2017-13-0401">
                      </option><option value="OS-2016-13-0125">
                      </option><option value="OS-2015-02-0056">
                      </option></datalist>
                  </div> <hr />
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputstext">Short Descriptions</label>
                      <input disabled className="form-control" id="inputstext" type="text" maxLength={40} placeholder="display only" />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputltext"> Long Descriptions </label>
                      <textarea disabled className="form-control" style={{borderRadius: 10, border: '1px solid #ddd'}} maxLength={255} rows={4} cols={110} defaultValue={"   \n                                "} />
                    </div> 
                  </div>  
                  <p> &nbsp; </p>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputcatcode">Category Code</label>
                    <input disabled className="form-control" placeholder="display only" list="category" />
                    <datalist id="category">
                      <option value="01|Apparel">
                      </option><option value="02|Parts">
                      </option><option value="04|Medtool">
                      </option><option value="08|Stationery">
                      </option><option value="11|Toys">
                      </option><option value="13|Tool">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputmerchant">Merchant</label>
                    <input disabled className="form-control" placeholder="display only" list="merchant" />
                    <datalist id="merchant">
                      <option value="Caterpillar">
                      </option><option value="FlowServe">
                      </option><option value="John Crane">
                      </option><option value="MontBlanc">
                      </option><option value="NPN">
                      </option><option value="Solar Rolls-Royce">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputmpn">Merchant Part No</label>
                    <input disabled className="form-control" id="inputmpn" type="text" maxLength={20} placeholder="display only" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputuom">Unit Of Measure</label>
                    <input disabled className="form-control" id="inputuom" type="text" maxLength={5} placeholder="display only" list="UOM" />
                    <datalist id="UOM">
                      <option value="BOX">
                      </option><option value="EA">
                      </option><option value="PACK">
                      </option><option value="PAIR">
                      </option><option value="SET">
                      </option><option value="UNIT">
                      </option></datalist>
                  </div>
                </div> <br /> <br /><br /><br /><br />
                <div className="form-group col-md-12">
                  <img width="70%" className="img-responsive" style={{margin: '0 auto'}} alt="Product" src="img/p.antoldwatch.jpg" />
                  <p> &nbsp; </p>
                </div>          
                <div className="form-group text-center">
                  <button className="btn btn-danger" style={{margin: '0 15'}} type="submit">Remove</button>
                </div>
              </form> {/*end of Form*/}
            </div> {/*End of Menu 3b*/}
            <div className="tab-pane fade" id="menu4b" style={{padding: 10}}>
              <h3>Display Product</h3>
              <p>Observe Product Details Below</p> 
              <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label style={{color: 'rgb(86, 182, 247)'}} htmlFor="inputyear">OneSupplies Product No.</label>
                    <input className="form-control" placeholder="select a product to delete" list="product" />
                    <datalist id="product">
                      <option value="OS-2018-01-0056">
                      </option><option value="OS-2018-07-0109">
                      </option><option value="OS-2017-11-0231">
                      </option><option value="OS-2017-13-0401">
                      </option><option value="OS-2016-13-0125">
                      </option><option value="OS-2015-02-0056">
                      </option></datalist>
                  </div> <hr />
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputstext">Short Descriptions</label>
                      <input disabled className="form-control" id="inputstext" type="text" maxLength={40} placeholder="display only" />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputltext"> Long Descriptions </label>
                      <textarea disabled className="form-control" style={{borderRadius: 10, border: '1px solid #ddd'}} maxLength={255} rows={4} cols={110} defaultValue={"   \n                              "} />
                    </div> 
                  </div>  
                  <p> &nbsp; </p>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputcatcode">Category Code</label>
                    <input disabled className="form-control" placeholder="display only" list="category" />
                    <datalist id="category">
                      <option value="01|Apparel">
                      </option><option value="02|Parts">
                      </option><option value="04|Medtool">
                      </option><option value="08|Stationery">
                      </option><option value="11|Toys">
                      </option><option value="13|Tool">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputmerchant">Merchant</label>
                    <input disabled className="form-control" placeholder="display only" list="merchant" />
                    <datalist id="merchant">
                      <option value="Caterpillar">
                      </option><option value="FlowServe">
                      </option><option value="John Crane">
                      </option><option value="MontBlanc">
                      </option><option value="NPN">
                      </option><option value="Solar Rolls-Royce">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputmpn">Merchant Part No</label>
                    <input disabled className="form-control" id="inputmpn" type="text" maxLength={20} placeholder="display only" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputuom">Unit Of Measure</label>
                    <input disabled className="form-control" id="inputuom" type="text" maxLength={5} placeholder="display only" list="UOM" />
                    <datalist id="UOM">
                      <option value="BOX">
                      </option><option value="EA">
                      </option><option value="PACK">
                      </option><option value="PAIR">
                      </option><option value="SET">
                      </option><option value="UNIT">
                      </option></datalist>
                  </div>
                </div> <br /> <br /><br /><br /><br />
                <div className="form-group col-md-12">
                  <img width="70%" className="img-responsive" style={{margin: '0 auto'}} alt="Product" src="img/p.antoldwatch.jpg" />
                  <p> &nbsp; </p>
                </div>          
                <div className="form-group text-center">
                  <a href="AdmMP"><button className="btn btn-info" style={{margin: '0 15'}} type="submit">Index</button></a>
                </div>
              </form> {/*end of Form*/}
            </div> {/*End of Menu 4b*/}
          </div> {/*End of tab-content*/}
        </div> {/*End Of Maintain Category*/}  
        </div> {/*End Of picture background div*/}   

    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default AdmMP
