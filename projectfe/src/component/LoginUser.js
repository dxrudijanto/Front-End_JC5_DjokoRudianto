import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class LoginUser extends Component {

  render() {

    return (

    <div>
 
 <div id="loginpage">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Login</strong>
                  <figure className="pull-right">
                    <a href="indexH0.html">
                      <img src="img/(logo)linkedin.png" height={25} width={25} className=" img-circle" style={{margin: 0}} />
                    </a>
                  </figure>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label htmlFor="inputEmail3" className="col-sm-3 control-label">
                        Email</label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword3" className="col-sm-3 control-label">
                        Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-3 col-sm-9">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" />
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group last">
                      <div className="col-sm-offset-1 col-sm-11 text-center">
                        <button type="submit" className="btn btn-success btn-sm">
                          Sign in</button> 
                        <button type="reset" className="btn btn-default btn-sm">
                          Reset</button>
                        <button type="forgot" className="btn btn-warning btn-sm">
                          Forgot My Password</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="panel-footer">
                  Not Registered? <a href="#">Register here</a> <a href="Home"><i className="fas fa-lock-open pull-right" /></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default LoginUser
