import React from 'react'

export default function SignUp(props) {
    let msgColorClass = ["fs-6","fw-normal", "text-center", "mb-4"];

    // if the type is 0 - means danger
    if (props.type === 0) {
        msgColorClass.push("text-danger");
    } else{
        msgColorClass.push("text-success");
    }


  return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div className="card border border-light-subtle rounded-3 shadow-sm">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="text-center mb-3">
              <h2>Create Account</h2>
            </div>
            <h2 className="fs-6 fw-normal text-center text-secondary">Enter your details to register</h2>
            <h2 className={msgColorClass.join(" ")}>{props.msg}</h2>
            <form onSubmit={props.signup}>
              <div className="row gy-2 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" required/>
                    <label htmlFor="Name" className="form-label">Name</label>
                  </div>
                </div>
                </div>

                {/* email text box */}
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required/>
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>

                {/* password input */}
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" required/>
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>

                {/* confirm password */}
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"  placeholder="Confirm Password" required/>
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                  </div>
                </div>


                {/* <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="iAgree" id="iAgree" required/>
                    <label className="form-check-label text-secondary" htmlFor="iAgree">
                      I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                    </label>
                  </div>
                </div> */}

                <div className="col-12">
                  <div className="d-grid my-3">
                    <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                  </div>
                </div>
                <div className="col-12">
                  <p className="m-0 text-secondary text-center">Already have an account? <a href="#!"  onClick={props.switch} className="link-primary text-decoration-none">Sign in</a></p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
