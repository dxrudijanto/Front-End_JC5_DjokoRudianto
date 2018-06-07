import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class myprofile extends Component {

  render() {

    return (

    <div>
 

    <Navbar />

      {/* Area My Profile */}
      <div className="container" style={{marginBottom: 70}}>
          <div className=".col-xs-4 .col-md-offset-2">
            <div className="panel panel-default panel-info Profile">
              <div className="panel-heading"> My Profile </div>
              <div className="panel-body">
                <div className="form-horizontal">
                  <form>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Salutation</label>
                      <div className="col-sm-4">
                        <input name="salutation" className="form-control" type="text" placeholder="Mr./Ms./Mrs." ng-model="me.salutation" defaultValue="Mr." />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label className="col-sm-2 control-label">First Name</label>
                      <div className="col-sm-4">
                        <input name="firstName" className="form-control" type="text" placeholder="First Name" ng-model="me.firstName" defaultValue="Djoko" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Last Name</label>
                      <div className="col-sm-4">
                        <input name="lastName" className="form-control" type="text" placeholder="Last Name" ng-model="me.lastName" defaultValue="Rudijanto" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-4">
                        <input name="email" className="form-control" type="email" placeholder="Email" ng-model="me.email" defaultValue="dxrudijanto@gmail.com" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Hobby</label>
                      <div className="col-sm-4">
                        <input name="hobby" className="form-control" type="text" placeholder="ex. Fishing/Basketball/Mall-visiting " ng-model="me.hobby" defaultValue="fishing" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Birthday</label>
                      <div className="col-sm-4">
                        <input name="startDate" className="form-control" id="tanggal" type="date" placeholder="Start Date" ng-model="me.birthday" defaultValue="1971-05-20" />
                      </div>
                    </div>            
                    <div className="form-group">
                      <label className="col-sm-2 control-label">City of Living</label>
                      <div className="col-sm-4">
                        <input name="city" className="form-control" type="text" placeholder="i.e. South Jakarta" ng-model="me.city" defaultValue="South Jakarta" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Phone</label>
                      <div className="col-sm-4">
                        <input name="phone" className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.phone" defaultValue="021-7395896" />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Visa Card</label>
                      <div className="col-sm-4">
                        <input name="visa" className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.visa" defaultValue="1553-2220-2221-4242" />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Address</label>
                      <div className="col-sm-4">
                        <textarea name="address" className="form-control" placeholder="add complete address here" rows={3} cols={48} ng-model="me.address" defaultValue={"Cipulir Permai\nH-#. Y12\nJakarta, PC 12220\n                                                    "} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-primary" ng-click="updateMe()">Update</button>
                      </div>
                    </div>
                  </form>
                </div>  {/* end form-horizontal */}
              </div> {/* end panel-body */}
              <div className="alert alert-success">
                <a className="close" aria-label="close" href="#" data-dismiss="alert">×</a>
                <strong>Success!</strong> Profile successfully saved
              </div>
              <div className="alert alert-warning">
                <a className="close" aria-label="close" href="#" data-dismiss="alert">×</a>
                <strong>Oops!</strong> Profile not saved. Try later.
              </div>
            </div> {/* end panel */}
          </div> {/* end size */}
        </div> {/* end container */}
        <div style={{position: 'absolute', top: '25%', left: '60%'}}>
          <img className="img-responsive img-circle center-block" style={{height: 300, width: 300}} src="img/(logo)youtube.png" /> <br /> <a href="#"> <figcaption> <center>Change Avatar</center> </figcaption> </a>
        </div>
      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default myprofile
