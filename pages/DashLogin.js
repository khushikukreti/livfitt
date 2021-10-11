import React from "react";

function DashLogin() {
  return (
    <section class="signup-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="signup-sec1">
              <div class="row">
                <form
                  name="loginfrm"
                  class="loginfrm"
                  method="post"
                  onsubmit="return loginFormValidate()"
                >
                  <input
                    type="hidden"
                    name="redirecturl"
                    value="https://cosmetikaa.com/"
                  />
                  <div class="col-md-12">
                    <div class="signup-sec-logo">
                      <img src="/logo3.png" style={{width: "150px"}} />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-sec-heading">Log In</div>
                  </div>

                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        name="lg_user_name"
                        readonly=""
                        onfocus="this.removeAttribute('readonly');"
                        onblur="checkMobile();"
                        id="lg_user_name"
                        autocomplete="off"
                        value=""
                        title="Mobile No."
                        class="form-control checkout_form margin-bottom"
                        maxlength="10"
                      />
                      <small
                        class="required--field"
                        style={{display: "none", color: "red"}}
                        id="fn"
                      >
                        * This field is required
                      </small>
                      <small
                        class="required--field"
                        style={{display: "none", color: "red"}}
                        id="notreg"
                      >
                        Mobile Number not registered with us
                      </small>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <input
                        type="password"
                        placeholder="Password"
                        name="lg_password"
                        value=""
                        readonly=""
                        onfocus="this.removeAttribute('readonly');"
                        id="lg_password"
                        title="Password"
                        style={{display:"block"}}
                      />
                      <input
                        type="text"
                        onkeyup="verifyOtp_login(this);"
                        name="inp_otp"
                        readonly=""
                        onfocus="this.removeAttribute('readonly');"
                        id="inp_otp"
                        class="form-control checkout_form"
                        value=""
                        placeholder="OTP"
                        style={{display:"none", width: "100%"}}
                      />
                      <span id="metch_otp" style={{display:"none"}}>
                        OTP Matched
                      </span>
                      <span id="otp_error" style={{display:"none"}}>
                        Invalid OTP Entered
                      </span>
                      <span id="sent_succ" style={{display:"none"}}>
                        OTP sent successfully{" "}
                      </span>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <label>OR</label>

                      <button
                        name="req_otp"
                        id="req_otp"
                        onclick="return verify_login_detail()"
                        class="form-control btn-lgn-sign btn-lgn"
                      >
                        REQUEST OTP
                      </button>
                      <button
                        name="req_otp"
                        type="button"
                        id="sendreq_otp"
                        style={{display:"none"}}
                        onclick="return resend_otp_login()"
                        class="form-control btn-lgn-sign btn-lgn"
                      >
                        RESEND OTP
                      </button>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <button class="btn btn-info btn-block" name="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="signup-form-field">
                      <p>
                        Don't Have an Account?{" "}
                        <a href="signup.php" style={{color: "#16abb4"}}>
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashLogin;
