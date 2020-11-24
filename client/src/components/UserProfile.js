import React from "react";

// find the html code i used in https://bootsnipp.com/snippets/5Moza
export default function UserProfile(props) {
  return (
    <div>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      {/*---- Include the above in your HEAD tag --------*/}
      <title>Bootstrap Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <hr />
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-10"><h1>User Profile</h1></div>
          <h3>Rating 8.6</h3>
        </div>
        <div className="row">
          <div className="col-sm-3">{/*left col*/}
            <div className="text-center">
              <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
              
            </div><br />
          </div>{/*/col-3*/}
          <div className="col-sm-9" style={{padding: "50px"}}>
                <hr />
                  <div className="form-group">
                      <label><h4>Email:</h4></label>
                      <label><h4>Amanda@hotmail.com</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>Location:</h4></label>
                      <label><h4>Toronto</h4></label>
                  </div>
                  <div className="form-group">
                    <label><h4>Gender:</h4></label>
                    <label><h4>female</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>You are a:</h4></label>
                      <label><h4>Mentor</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>Ocupation:</h4></label>
                      <label><h4>Web Designer</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>preferred Subjects:</h4></label>
                      <label><h4>Web Development - App Development</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>Description:</h4></label>
                      <label><h4>sdfghjklsdfghjklsdfghjk sdfghjk dfghjkl</h4></label>
                  </div>
                  <div className="form-group">
                      <br />
                      <button type="button" class="btn btn-primary">Send a message</button>
                  </div>
                <hr />
           </div>   
        </div>{/*/col-9*/}
      </div>{/*/row*/}
    </div>
  );
}