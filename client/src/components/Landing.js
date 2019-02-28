import React from 'react';

const Landing = () => {
  return (
    <section className="jumbotron">
      <div className="container">
              <div className="row">
                  <div className="col s8 desc">
                      <h1>Survey Mailer</h1>
                      <h2>The best way to collect feedback from your customers and users.</h2>
                      <a href="/auth/google" className="btn-large waves-effect waves-light red">Login with Google</a>
                  </div>
                  <div className="col s3">
                      <img src="https://images.unsplash.com/photo-1531901783755-825e82c0d762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1062&q=80" className="img-desc responsive-img" alt="Mobile materializecss"></img>
                  </div>
              </div>
      </div>
    </section >
    
    
  );
};

export default Landing;
