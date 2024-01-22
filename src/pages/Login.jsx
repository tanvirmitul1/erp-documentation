import style from "./Login.module.css";

function Login() {
  // useEffect(() => {
  //   new WOW().init();
  //   $(".js-tilt").tilt({
  //     scale: 1.2,
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.limiter}>
      <div className={style.containerLogin100}>
        <div className={style.wrapLogin100}>
          <div className={style.login100Pic}>
            <img
              className="animate__animated animate__zoomIn"
              src="https://erp.seopage1.net/custom/img/login.png"
              alt="IMG"
            />
          </div>
          <form id="login-form" className="ajax-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_token"
              value="iLzf2ELdE6n1Z62EALhItk439DucTjo7gA2JONaM"
            />

            <span className={style.login100FormTitle}>
              {/* Sign In */}
              <img src="https://erp.seopage1.net/custom/img/logo2.png" alt="" />
            </span>

            <div
              className={style.wrapInput100}
              data-validate="Valid User Name* is required: ex@ john doe"
            >
              <input
                className={style.input100}
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
              />

              <span className={style.focusInput100}></span>
              <span className={style.symbolInput100}>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input type="hidden" id="g_recaptcha" name="g_recaptcha" />
            </div>

            <div id="password-section">
              <div
                className={style.wrapInput100}
                data-validate="Password is required"
              >
                <input
                  className={style.input100}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password*"
                />
                <span className={style.focusInput100}></span>
                <span className={style.symbolInput100}>
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
            </div>

            <div className={style.containerLogin100FormBtn}>
              <button
                className={style.login100FormBtn}
                id="submit-login"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
