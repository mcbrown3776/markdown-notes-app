export default function Login() {
  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient">MARKDOWN NOTES</h1>
        <h2>Organized note taking made easy</h2>
        <p>
          Build your very own archive of easily navigated and indexed
          information and notes.
        </p>
        <div className="full-line"></div>
        <h6>Sign in</h6>
        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="*****************" />
        </div>
        <button className="submit-btn">
          <h6>Submit</h6>
        </button>
        <div className="secondary-btns-container">
          <button className="card-button-secondary">
            <small>Create an accout</small>
          </button>
          <button className="card-button-secondary">
            <small>Forgot password?</small>
          </button>
        </div>
        <div className="full-line"></div>
        <footer>
          <a
            href="https://github.com/mcbrown3776/markdown-notes-app"
            target="_blank"
          >
            <img
              src="https://avatars.githubusercontent.com/u/23202662?v=4"
              alt="profile picture"
            />
            <h6>@mcbrown3776</h6>
            <i className="fa-brands fa-github"></i>
          </a>
        </footer>
      </div>
    </>
  )
}
