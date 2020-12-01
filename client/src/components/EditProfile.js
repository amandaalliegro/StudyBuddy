import React, { useState } from 'react'
import "./editProfile.css"
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';




export default function EditProfile(props) {
  console.log("i am id", props.id)
  // console.log("i am props",props.userList[0])
  let history = useHistory();
  const [error, setError] = useState(null);
  function handleSubmit(event) {
    console.log("i am event",event)

    event.preventDefault()
    const user = {
      full_name: event.target[0].value,
      img: event.target[1].value,
      email: event.target[2].value,
      student: event.target[3].value,
      mentor: event.target[4].value,
      silent_buddy: event.target[5].value,
      description: event.target[6].value,
      password: event.target[7].value
    }
    if (user.full_name.length < 2) {
      setError('Enter at least 2 charachter')
    } else {
      setError(null)
      axios.put(`/api/users/id`, user).then((res) => {
        console.log("i am axios put in edit profile", res)
        if (res.status === 200) {
          localStorage.setItem("id", res.data.id)
          props.setUser(res.data) 
        }
      }).catch((err) => {
        setError('You must have a valid email signed')
      })
    }
  }

  return (
    <Container>
    <div id="profile_container">
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-10" id="title_profile"><h1>Edit Profile</h1></div>
        </div>
        <div className="container" id="profile_element">
          <div className="text-center">
            {props.user.img && <img src= {props.user.img} className="avatar img-circle img-thumbnail" id="avatar"alt="avatar" />}
            {!props.user.img && <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" id="avatar"alt="avatar" />}
          </div>
          <br/>

          <div className="col-sm-9" style={{ padding: "50px" }} id="profile_data">
          <Form className="form" action="##" method="post" id="registrationForm" onSubmit={handleSubmit}>
            <Form.Group className="form-group">
                <div className="col-xs-6">
                <Form.Label><h4>Full Name:</h4></Form.Label>
                <Form.Control type="text" className="form-control" name="name" id="name" placeholder="Name" />
                </div>
                <div>
                <Form.Label><h4>Profile Image:</h4></Form.Label>
                <Form.Control type="text" className="form-control" name="name" id="name" placeholder="Add image URL" />
                <Form.Text className='text-muted'></Form.Text>
                </div>
                </Form.Group>
                <Form.Group  className="form-group">
                  <div className="col-xs-6">
                  <Form.Label><h4>Email</h4></Form.Label>
                  <Form.Control type="email" className="form-control" name="email" id="email" placeholder="your email here" title="enter your email." />
                  <Form.Text className='text-muted'>
                  </Form.Text>
                  </div>
                  </Form.Group> 
              <div id="profile_location">
                <h4>you are a:</h4>
                <div>
                <Form.Control type="checkbox" id="student" name="student" defaultValue="student" />
                  <Form.Label> Student</Form.Label><br />
                  <Form.Control type="checkbox" id="mentor" name="mentor" defaultValue="mentor" />
                  <Form.Label> Mentor</Form.Label><br />
                  <Form.Control type="checkbox" id="silent-student" name="silent-student" defaultValue="silent-student" />
                  <Form.Label> Silent-Student</Form.Label><br />
                </div>
              </div>
              <Form.Group className="form-group">
                <div className="col-xs-6">
                <Form.Label><h4>description</h4></Form.Label>
                  <Form.Control type="text" className="description" name="description" id="description" placeholder="what's in your mind!" title="enter your password." />
                  <Form.Text className='text-muted'>
                  </Form.Text>
                </div>
                </Form.Group>
            <div id="profile_location">
            <Form.Group className="form-group">
                <div className="col-xs-6">
                <Form.Label><h4>Password</h4></Form.Label>
                  <Form.Control type="password" className="form-control" name="password" id="password" placeholder="new password" title="enter your password." />
                </div>
            </Form.Group>
            <Form.Group className="form-group">
                <div className="col-xs-6">
                <Form.Label><h4>Confirm your password</h4></Form.Label>
                  <Form.Control type="password" className="form-control" name="confirm-password" id="confirm-password" placeholder="confirm password" title="enter your password." />
                  <Form.Text className='text-muted'>
                  </Form.Text>
                </div>
            </Form.Group>
            </div>
            <div className="form-group">
              <div className="col-xs-12">
                <br />
                <Button className="btn btn-lg"  type='submit' >Save</Button>;
                <Button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Cancel</Button>
              </div>
            </div>
    
            </Form>
          
          </div>{/*/col-3*/}
        </div>
    </div>
    </div>
    </Container>
  );
}