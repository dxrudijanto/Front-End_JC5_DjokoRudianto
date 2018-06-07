import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class AdmMC extends Component {

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
                <li className="nav2 active"><a href="#">Maintain Category</a></li>
                <li className="nav2"><a href="AdmMP">Maintain Product</a></li>
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
            <li className="active"><a href="#home" data-toggle="tab">Index</a></li>
            <li><a href="#menu1" data-toggle="tab">Add</a></li>
            <li><a href="#menu2" data-toggle="tab">Modify</a></li>
            <li><a href="#menu3" data-toggle="tab">Remove</a></li>
          </ul>
          <div className="tab-content" style={{borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'rgb(190, 190, 190)'}}> 
            <div className="tab-pane fade in active" id="home" style={{padding: 10}}>
              <h3>FUNCTIONS</h3>
              <p>Create, Change and Delete Categories</p>
            </div>
            <div className="tab-pane fade" id="menu1" style={{padding: 10}}>
              <h3>Create Category</h3>
              <p>Add category below</p> <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label htmlFor="inputcatcode">Category Code</label>
                    <input className="form-control" id="inputcatcode" required type="text" maxLength={2} placeholder="numbers: 01 - 99" />
                  </div>
                  <div className="form-group col-md-8">
                    <label htmlFor="inputcatdesc">Category Description</label>
                    <input className="form-control" id="inputcatdesc" required type="text" maxLength={20} placeholder="Descriptions max 20 chars" />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="submit"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>    
                    <button className="btn btn-primary" type="submit">Add</button>
                  </div>
                </div>
              </form> <br /><br /><br /><br /> 
            </div>
            <div className="tab-pane fade" id="menu2" style={{padding: 10}}>
              <h3>Change Category</h3>
              <p>Modify Category below</p> <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label htmlFor="inputcategory">Category</label>
                    <input className="form-control" required list="category" />
                    <datalist id="category">
                      <option value="01|Apparel">
                      </option><option value="02|Parts">
                      </option><option value="04|Medtool">
                      </option><option value="08|Stationery">
                      </option><option value="11|Toys">
                      </option><option value="13|Tool">
                      </option></datalist>
                  </div>
                  <div className="form-group col-md-8">
                    <label htmlFor="inputcatdesc">New Descriptions</label>
                    <input className="form-control" id="inputcatdesc" required type="text" maxLength={20} placeholder="Descriptions max 20 chars" />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="submit"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>    
                    <button className="btn btn-warning" type="submit">Change</button>
                  </div>
                </div>
              </form> <br /><br /><br /><br /> 
            </div>
            <div className="tab-pane fade" id="menu3" style={{padding: 10}}>
              <h3>Delete Category</h3>
              <p>Remove Category below</p> <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-10">
                    <label htmlFor="inputcategory">Category</label>
                    <input className="form-control" required list="category" />
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
                    <label htmlFor="submit"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>    
                    <button className="btn btn-danger" type="submit">Remove</button>
                  </div>
                </div>
              </form> <br /><br /><br /><br /> 
            </div>
          </div> {/*End of tab-content*/}
        </div> {/*End Of Maintain Category*/}
        </div> {/*End Of picture background div*/}

    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default AdmMC
