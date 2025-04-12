import React from 'react'

export default function SignIn(props) {
  let msgColorClass = ["fs-6","fw-normal", "text-center", "mb-4"];

    // if the type is 0 - means danger
    if (props.type === 0) {
        msgColorClass.push("text-danger");
    } else{
        msgColorClass.push("text-success");
    }
  return (
    <div>
<section className="bg-light py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div className="card border border-light-subtle rounded-3 shadow-sm">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="text-center mb-3">
              <h2>
                Log In
              </h2>
            </div>
            <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
            <h2 className={msgColorClass.join(" ")}>{props.msg}</h2>
            <form onSubmit={props.login}>
              <div className="row gy-2 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required/>
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" id="password"  placeholder="Password" required/>
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                  <div>
                    <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                  </div>
                <div className="col-12">
                  <div className="d-grid my-3">
                    <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                  </div>
                </div>
                <div className="col-12">
                  <p className="m-0 text-secondary text-center">Don't have an account? <a href="#!" className="link-primary text-decoration-none" onClick={props.switch}>Sign up</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  );
};
