import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class Admlogin extends Component {

  render() {

    return (

    <div>
 <div id="admloginpage">
      <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="panel panel-danger">
                    <div className="panel-heading">
                      <strong>Admin Login</strong>
                      <figure className="pull-right">
                        <a href="Admh0">
                          <img width={25} height={25} className=" img-circle" style={{margin: 0}} src="img/(logo)linkedin.png" />
                        </a>
                      </figure>
                    </div>
                    <div className="panel-body">
                      <form className="form-horizontal" role="form">
                        <div className="form-group">
                          <label className="col-sm-3 control-label" htmlFor="inputEmail3">
                            Email</label>
                          <div className="col-sm-9">
                            <input className="form-control" id="inputEmail3" required type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label" htmlFor="inputPassword3">
                            Password</label>
                          <div className="col-sm-9">
                            <input className="form-control" id="inputPassword3" required type="password" placeholder="Password" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-3 col-sm-9">
                            <div className="checkbox">
                              {/* <label>
                                              <input type="checkbox">
                                              Remember me
                                          </label> */}
                            </div>
                          </div>
                        </div>
                        <div className="form-group last">
                          <div className="col-sm-offset-1 col-sm-11 text-center">
                            <button className="btn btn-danger btn-sm" type="submit">
                              Sign in</button>
                            <button className="btn btn-default btn-sm" type="reset">
                              Reset</button>
                            <button className="btn btn-warning btn-sm" type="forgot">
                              Forgot My Password</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="panel-footer text-center">
                      Welcome Admin
                      {/* Not Registered? <a href="#">Register here</a></div> */}
                      <a href="Admh"><i className="fas fa-lock-open pull-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
            </div>   

    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default Admlogin
