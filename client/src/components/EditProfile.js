import React, { useState } from 'react'
import "./editProfile.css"
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';




export default function EditProfile(props) {
  console.log("i am id", props.user.id)
  // console.log("i am props",props.userList[0])
  let history = useHistory();
  const [error, setError] = useState(null);
  
  function handleSubmit(event) {
    console.log("i am event",event)
    event.preventDefault()
    const user = {
      full_name: event.target[0].value,
      img: event.target[1].value,
      location: event.target[2].value,
      language: event.target[3].value,
      email: event.target[4].value,
      student: event.target.querySelector('#student').checked,
      mentor: event.target.querySelector('#mentor').checked,
      silent_buddy: event.target.querySelector('#silent-student').checked,
      subject: event.target[8].value,
      description: event.target[9].value,
      password: event.target[10].value
    }
    if (user.full_name.length < 2) {
      setError('Enter at least 2 charachter')

    } else {
      // console.log('event from edit profile',user)
      setError(null)
      axios.put(`/api/users/${props.user.id}`, user).then((res) => {
        console.log("i am axios put in edit profile", res)
        if (res.status === 200) {
          localStorage.setItem("id", res.data.id)
          props.setUser(res.data) 
          history.push('/profile')
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
            {props.user.img && <img src= {props.user.img}  id="image"alt="image" />}
            {!props.user.img && <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"  id="image"alt="image" />}
          </div>
          <br/>

          <div className="col-sm-9" style={{ padding: "50px" }} id="profile_data">
          <Form className="form"   id="registrationForm" onSubmit={handleSubmit}>
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
                  <Form.Label><h4>Location</h4></Form.Label>
                  <Form.Control type="location" className="form-control" name="location" id="location" placeholder="your location here" title="enter your location." />
                  <Form.Text className='text-muted'>
                  </Form.Text>
                  </div>
                  </Form.Group>
                <Form.Group  className="form-group">
                  <div className="col-xs-6">
                  <Form.Label><h4>Language</h4></Form.Label>
                  <Form.Control type="language" className="form-control" name="language" id="language" placeholder="your language here" title="enter your language." />
                  <Form.Text className='text-muted'>
                  </Form.Text>
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
                <Form.Control type="checkbox" id="student" name="student" />
                  <Form.Label> Student</Form.Label><br />
                  <Form.Control type="checkbox" id="mentor" name="mentor"  />
                  <Form.Label> Mentor</Form.Label><br />
                  <Form.Check type="checkbox" id="silent-student" name="silent-student" />
                  <Form.Label> Silent</Form.Label><br />
                </div>
              </div>
              <Form.Group className="form-group">
              <div className="col-xs-6">
                <Form.Label><h4>Subject:</h4></Form.Label>
                  <Form.Control type="text" className="subject" name="subject" id="subject" placeholder="what's your preffered subject!" title="enter your subject." />
                  <Form.Text className='text-muted'>
                  </Form.Text>
                </div>
                <div className="col-xs-6">
                <Form.Label><h4>Description</h4></Form.Label>
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