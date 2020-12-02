import React from "react";
import { useHistory } from 'react-router-dom';
import"./userProfile.css"

  //import users from "../../../express_backend/routes/users";
// find the html code i used in https://bootsnipp.com/snippets/5Moza
export default function UserProfile(props) {
  const user = props.buddyUser;
  let history = useHistory(); 

  return (
    <div id="profile_container">
      <div className="container bootstrap snippet" id="container_profile">
        <div className="container" id="name_profile">
          <div id='namep'><h1>{user.full_name}</h1></div>
         
        </div>
        </div>
        <div className="container" id="profile_element">
          <div className="col-sm-3">{/*left col*/}
            <div className="text-center">
              {user.img && <img src= {user.img}  id="image"alt="image" />}
              {!user.img && <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"  id="image"alt="image" />}
              
            </div><br />
          </div>{/*/col-3*/}
          <div  style={{padding: "50px"}} id="profile_data-us">
                <hr />
                  <div className="form-group profile_data" id="profile_email" >
                      <label><h4>Language:</h4></label>
                      <label><h4>{user.language}</h4></label>
                  </div>
                  <div className="form-group" id="profile_location">
                      <label><h4>Location:</h4></label>
                      <label><h4>{user.location}</h4></label>
                  </div>
                  <div className="form-group" id="profile_gender">
                    <label><h4>Gender:</h4></label>
                    <label><h4>{user.gender}</h4></label>
                  </div>
                  <div className="form-group" id="profile_class">
                      <label><h4>You are a:</h4></label>
                      {user.student === true && <label><h4>Student</h4></label>}
                      {user.mentor === true && <label><h4>mentor</h4></label>}
                      {user.silent_buddy === true && <label><h4>silent buddy</h4></label>}
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
                      <button onClick={() => { 
                            console.log("main search button clicked",user)
                            props.setChatUser(user)
                            history.push(`/messages`)
                          } 
                        } 
                        type="submit" className="btn btn-primary edit_btn" id="btn_profile"
                      >
                        Send a message!
                      </button>
                  </div>
                <hr />
           </div>   
        </div>{/*/col-9*/}
      </div>
  );
}
