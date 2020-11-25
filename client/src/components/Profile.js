import React from "react";
// find the html code i used in https://bootsnipp.com/snippets/5Moza

import "./profile.css"

export default function Profile(props) {
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
          <div className="col-sm-10"><h1>Affaf Rai</h1></div>
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
                      <label><h4>Affaf-rai@hotmail.com</h4></label>
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
                      <label><h4>Student - Mentor</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>Ocupation:</h4></label>
                      <label><h4>Web Developer</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>preferred Subjects:</h4></label>
                      <label><h4>Web Development - App Development</h4></label>
                  </div>
                  <div className="form-group">
                      <label><h4>Description:</h4></label>
                      <label><h4>jfhgfhg cgfhmg , ,g,jg, gufdtrdjytf uf ,g</h4></label>
                  </div>
                  <div className="form-group">
                      <br />
                      <button type="submit" class="btn btn-primary" id="#edit_btn">Edit Profile</button>
                  </div>
                <hr />
           </div>   
        </div>{/*/col-9*/}
      </div>{/*/row*/}
    </div>
  );
}
