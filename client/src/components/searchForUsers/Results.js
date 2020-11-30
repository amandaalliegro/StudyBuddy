import React from "react";

export default function Results(props) {

  return (

    <article>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      {/*---- Include the above in your HEAD tag --------*/}
      <title>Bootstrap Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <header>
        <div>
          <style dangerouslySetInnerHTML={{ __html: "\n  #avatar {\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n     border-radius: 50%;\n    }\n" }} />

          <img src="./avatar5.png" alt="Avatar" id="avatar" />
          <div className="row">
            <div className="col-sm-10"><h5>User Profile</h5></div>
            <h5>Rating 8.6</h5>
          </div>          </div>
        <div className="account-name">
        </div>
      </header>
      <h5>
        user Subjects
      </h5>
      <h5>
        user description
      </h5>
      <footer>
        <div>
          <i className="far fa-heart" />
          <i className="fas fa-retweet" />
          <i className="far fa-flag" />
        </div>
      </footer>
    </article>
  );
}