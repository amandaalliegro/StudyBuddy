import React from "react";
import "./profile.css"

// find the html code i used in https://bootsnipp.com/snippets/5Moza
export default function Profile(props) {
  return (
    <div id="profile_container">
     
      <div className="container bootstrap snippet" id="container_profile">
        <div className="container" id="name_profile">
          <div className="col-sm-10"><h1>Affaf Rai</h1></div>
          <h3>Rating 8.6</h3>
        </div>
        </div>
        <div className="container" id="profile_element">
          <div className="col-sm-3">{/*left col*/}
            <div className="text-center">
              <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" id="avatar"alt="avatar" />
              
            </div><br />
          </div>{/*/col-3*/}
          <div className="col-sm-9" style={{padding: "50px"}} id="profile_data">
                <hr />
                  <div className="form-group profile_data" id="profile_email" >
                      <label><h4>Email:</h4></label>
                      <label><h4>Affaf-rai@hotmail.com</h4></label>
                  </div>
                  <div className="form-group" id="profile_location">
                      <label><h4>Location:</h4></label>
                      <label><h4>Toronto</h4></label>
                  </div>
                  <div className="form-group" id="profile_gender">
                    <label><h4>Gender:</h4></label>
                    <label><h4>female</h4></label>
                  </div>
                  <div className="form-group" id="profile_class">
                      <label><h4>You are a:</h4></label>
                      <label><h4>Student - Mentor</h4></label>
                  </div>
                  <div className="form-group" id="profile_occupation">
                      <label><h4>Ocupation:</h4></label>
                      <label><h4>Web Developer</h4></label>
                  </div>
                  <div className="form-group" id="profile_subjects">
                      <label><h4>preferred Subjects:</h4></label>
                      <label><h4>Web Development - App Development</h4></label>
                  </div>
                  <div className="form-group" id="profile_description">
                      <label><h4>Description:</h4></label>
                      <label><h4>jfhgfhg cgfhmg , ,g,jg, gufdtrdjytf uf ,g</h4></label>
                  </div>
                  <div className="form-group">
                      <br />
                      <button type="submit" className="btn btn-primary edit_btn" id="btn_profile">Edit Profile</button>
                  </div>
                <hr />
           </div>   
        </div>{/*/col-9*/}
      </div>
    
  );
}
