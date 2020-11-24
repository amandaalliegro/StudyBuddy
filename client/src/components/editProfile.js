import React from "react";

// find the html code i used in https://bootsnipp.com/snippets/5Moza
export default function EditProfile(props) {
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script src="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.jquery.min.js"></script>
      <link href="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.min.css" rel="stylesheet" />
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      {/*---- Include the above in your HEAD tag --------*/}
      <title>Bootstrap Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <hr />
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-10"><h1>Edit Profile</h1></div>
        </div>
        <div className="col-sm-3">{/*left col*/}
          <div className="text-center">
            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
            <input type="file" className="text-center center-block file-upload" />
          </div>
          <br />
        </div>{/*/col-3*/}
        <div className="col-sm-9" style={{ padding: "50px" }}>
          <form className="form" action="##" method="post" id="registrationForm">
            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="Name"><h4>Name:</h4></label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="email"><h4>Email</h4></label>
                <input type="email" className="form-control" name="email" id="email" placeholder="your email here" title="enter your email." />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="location"><h4>Location</h4></label>
                <input type="text" className="form-control" id="location" placeholder="location" title="enter a location" />
              </div>
            </div>
            <h4>you are a:</h4>
            <div>
              <input type="checkbox" id="student" name="student" defaultValue="student" />
              <label htmlFor="student"> student</label><br />
              <input type="checkbox" id="mentor" name="mentor" defaultValue="mentor" />
              <label htmlFor="mentor"> Mentor</label><br />
              <input type="checkbox" id="silent-student" name="silent-student" defaultValue="silent-student" />
              <label htmlFor="silent-student">silent-student</label>
            </div>
            <div className="form-group">
              <h4>Gender</h4>
              <div className="col-xs-6">
                <input type="radio" id="male" name="gender" defaultValue="male" />
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <input type="radio" id="other" name="gender" defaultValue="other" />
                <label htmlFor="other">Other</label>
                <input type="radio" id="not-defined" name="gender" defaultValue="other" />
                <label htmlFor="not-defined">Prefer not to say</label>
              </div>
            </div>

            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="ocupation:"><h4>Location</h4></label>
                <input type="text" className="form-control" id="ocupation" placeholder="ocupation" title="enter an ocupation" />
              </div>
            </div>
            <div>
              <form action="http://httpbin.org/post" method="post">

                <select data-placeholder="Begin typing a name to filter..." multiple className="chosen-select" name="test">
                  <option value />
                  <option>American Black Bear</option>
                  <option>Asiatic Black Bear</option>
                  <option>Brown Bear</option>
                  <option>Giant Panda</option>
                  <option>Sloth Bear</option>
                  <option>Sun Bear</option>
                  <option>Polar Bear</option>
                  <option>Spectacled Bear</option>
                </select>
                <input type="submit" />
              </form>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="description"><h4>description</h4></label>
                <input type="text" className="description" name="description" id="description" placeholder="what's in your mind!" title="enter your password." />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="password"><h4>Password</h4></label>
                <input type="password" className="form-control" name="password" id="password" placeholder="new password" title="enter your password." />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label htmlFor="confirm-password"><h4>Confirm your password</h4></label>
                <input type="password" className="form-control" name="confirm-password" id="confirm-password" placeholder="confirm password" title="enter your password." />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12">
                <br />
                <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save </button>
                <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Cancel</button>
              </div>
            </div>
          </form>


        </div>
      </div>{/*/col-9*/}

    </div>
  );
}
