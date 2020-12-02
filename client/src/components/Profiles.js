import React from "react";
import "./profile.css"
import { useHistory } from 'react-router-dom';

// find the html code i used in https://bootsnipp.com/snippets/5Moza
export default function Profile(props) {
  const {user} = props;
  let history = useHistory(); 
  return (
    <div id="profile_container">
      <div className="container bootstrap snippet" id="container_profile">
        <div className="container" id="name_profile">
          {user.full_name && <div className="col-sm-10"><h1>{user.full_name}</h1></div>}
        </div>
        </div>
        <div className="container" id="profile_element">
          <div className="col-sm-3">{/*left col*/}
            <div className="text-center">
            {user.img && <img src= {user.img}  id="image"alt="image" />}
              {!user.img && <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"  id="image"alt="image" />}
                            
            </div><br />
          </div>{/*/col-3*/}
          <div className="col-sm-9" style={{padding: "50px"}} id="profile_data">
                <hr />
                  <div className="form-group profile_data" id="profile_email" >
                      <label><h4>Email:</h4></label>
                      {user.email && <label><h4>{user.email}</h4></label>}
                  </div>
                  <div className="form-group" id="profile_location">
                      <label><h4>Location:</h4></label>
                      {user.location && <label><h4>{user.location}</h4></label>}                  </div>
                  <div className="form-group" id="profile_gender">
                    <label><h4>language:</h4></label>
                    {user.language &&<label><h4>{user.language}</h4></label>}
                  </div>
                  <div className="form-group" id="profile_class">
                      <label><h4>You are a:</h4></label>
                      {user.student && <label><h4>student</h4></label>}
                      {user.mentor && <label><h4>mentor</h4></label>}
                      {user.silent_buddy && <label><h4>silent buddy</h4></label>}
                      
                  </div>
                  <div className="form-group" id="profile_subjects">
                      <label><h4>preferred Subjects:</h4></label>
                      <label><h4>{user.subject}</h4></label>
                  </div>
                  <div className="form-group" id="profile_description">
                      <label><h4>Description:</h4></label>
                      <label><h4>{user.description}</h4></label>
                  </div>
                  <div className="form-group">
                      <br />
                      <button type="submit" className="btn btn-primary edit_btn" id="btn_profile" onClick={() => history.push(`/user/{user.id}/edit`)}>Edit Profile</button>
                  </div>
                <hr />
           </div>   
        </div>{/*/col-9*/}
      </div>
    
  );
}
