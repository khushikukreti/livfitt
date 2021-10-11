import React from "react";

function DashSingup() {
  return (
    <section class="signup-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form id="signupFrm" method="post" action="" name="signupFrm">
              <input
                type="hidden"
                name="action"
                value="CustomerRegisteration"
              />
              <div class="signup-sec1">
                <div class="row">
                  <div class="col-md-12">
                    <div class="signup-sec-logo">
                      <img src="/logo3.png" style={{width:"150px"}} />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-sec-heading">Sign Up</div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="text"
                        placeholder="Name"
                        name="full_name"
                        class="full_name"
                      />
                      <small
                        class="required--field"
                        style={{display:" none", color: "red"}}
                        id="fn"
                      >
                        * This field is required
                      </small>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="text"
                        placeholder="Email Address"
                        name="email_id"
                        class="email_id"
                        id="emailsignup"
                        onblur="return checkEmail(this);"
                      />
                      <small
                        class="required--field"
                        style={{display:" none", color: "red"}}
                        id="femail"
                      >
                        * This field is required
                      </small>
                      <small
                        class="required--field"
                        style={{display:" none", color: "red"}}
                        id="inemail"
                      >
                        * Please enter valid email address
                      </small>
                      <span
                         style={{display:" none", color: "red"}}
                        class="error checkemail1"
                      >
                        Email already registered with us{" "}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="text"
                        placeholder="Mobile"
                        autocomplete="off"
                        name="mobile_no"
                        class="mobile_no"
                        minlength="10"
                        maxlength="10"
                      />
                      <small
                        class="required--field"
                        style={{display:" none", color: "red"}}
                        id="fm"
                      >
                        * This field is required
                      </small>
                      <small
                        class="required--field"
                        style={{display: "none", color:" red", marginLeft:" 105px"}}
                        id="inmobile"
                      >
                        * Invalid Mobile Number
                      </small>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div
                      class="signup-form-field form-group div_otp"
                      id="div_otp"
                      style={{display:"none"}}
                    >
                      <label for="" style={{color:"#000l"}}>
                        OTP
                      </label>
                      <div class="input-icon-left">
                        <i class="fa fa-lock input-icon"></i>
                        <input
                          type="text"
                          class="form-control input-lg rounded inp_otp"
                          maxlength="4"
                          id="inp_otp"
                          placeholder="----"
                          name="inp_otp"
                          value=""
                        />
                      </div>
                      <span
                        id="metch_otp"
                        style={{display:"none",color: "#000",fontSize: "16px"}}
                      >
                        OTP Matched
                      </span>
                      <span
                        id="otp_error"
                        style={{display:"none",color: "#000",fontSize: "16px",textSlign: "center"}}
                      >
                        Invalid OTP Entered
                      </span>
                      <span
                        id="sent_succ"
                        style={{display:"none",color: "#000",fontSize: "16px",textSlign: "center"}}

                      >
                        OTP sent successfully{" "}
                      </span>
                      <span id="resent_otp" style={{display:"none"}}>
                        <a
                          onclick="resend_otp();"
                          style={{color:" #000",fontSize: "16px",display:" block",
									   textSlign: "center",marginTop: "10px",cursor: "pointer"}}
                        >
                          {" "}
                          Re-Send OTP{" "}
                        </a>
                      </span>
                      <br />
                      <small
                        class="required--field"
                        style={{display: "none", color: "red"}}
                        id="fotp"
                      >
                        * This field is required
                      </small>
                    </div>
                  </div>
                  {/* <!--<div class="col-md-12">
									<div class="signup-form-field">
										<div class="">OTP</div>
										<input type="password" placeholder="----" autocomplete="off"/>
										<span style="color:green;margin-top: 10px;display: inherit;">OTP sent successfully</span>
										<p><a href="" style="display:inline-block;background-color:#a3247b;border-radius:5px;color:#fff;padding:5px 11px;margin-top:10px;">Resend OTP</a></p>
									</div>
								</div>
								--> */}
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="password"
                        placeholder="Password"
                        name="user_password"
                        class="user_password"
                      />
                      <small
                        class="required--field"
                        style={{display: "none", color: "red"}}
                        id="fp"
                      >
                        * This field is required
                      </small>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        name="con_password"
                        class="con_password"
                      />
                      <small
                        class="required--field"
                        style={{display: "none", color: "red"}}
                        id="fcp"
                      >
                        * This field is required
                      </small>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="checkbox"
                        checked="checked"
                        for="equity"
                        style={{display:"inline",width: "5%"}}
                      />
                      <span>
                        By clicking Create an Account, you agree to the
                        Cosmetikaa.com User agreement,{" "}
                        <a href="">Privacy policy,</a> Cookies policy.
                      </span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <button
                        onclick="vaildatedLoginForm()"
                        type="button"
                        class="btn btn-block btn-uplyft circle btn2"
                        id="submitotp1"
                        name="btn_visit_next"
                      >
                        {" "}
                        REGISTER
                      </button>
                      <button
                        onclick="verifyOtp();"
                        type="button"
                        id="submitotp2"
                        style={{display: "none"}}
                        class="btn btn-block btn-uplyft circle btn2"
                        name="btn_visit_next1"
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <p>
                        Already Have an Account?{" "}
                        <a href="login.php" style={{color: "#16abb4"}}>
                          Log In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashSingup;
