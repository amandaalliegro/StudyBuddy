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
        <div  id="name_profile">
          {user.full_name && <div id='namep' ><h1>{user.full_name}</h1></div>}
        </div>
        </div>
        <div className="container" id="profile_element">
          <div id='name'>{/*left col*/}
            <div className="text-center">
            {user.img && <img src= {user.img}  id="image"alt="image" />}
              {!user.img && <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"  id="image"alt="image" />}
                            
            </div><br />
          </div>{/*/col-3*/}
          <div style={{padding: "50px"}} id="profile_data1">
                <hr />
                  <div className="form-group profile_data" id="profile_email" >
                      <label><h4>Email:</h4></label>
                      <p></p>
                      {user.email && <label><p>{user.email}</p></label>}
                  </div>
                  <div className="form-group" id="profile_location">
                      <label><h4>Location:</h4></label>
                      <p></p>
                      {user.location && <label><p>{user.location}</p></label>}                  </div>
                  <div className="form-group" id="profile_gender">
                    <label><h4>language:</h4></label>
                    {user.language &&<label><p>{user.language}</p></label>}
                  </div>
                  <div className="form-group" id="profile_class">
                      <label><h4>You are a:</h4></label>
                      {user.student && <label><p>student</p></label>}
                      {user.mentor && <label><p>mentor</p></label>}
                      {user.silent_buddy && <label><p>silent buddy</p></label>}
                      
                  </div>
                  <div className="form-group" id="profile_subjects">
                      <label><h4>preferred Subjects:</h4></label>
                      <label><p>{user.subject}</p></label>
                  </div>
                  <div className="form-group" id="profile_description">
                      <label><h4>Description:</h4></label>
                      <p></p>
                      <label><p>{user.description}</p></label>
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
