import Link from 'next/link'
import { logout } from '../utils/auth'

const Header = props => (
  <header>
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/login">
            <a className="navbar-item">Login</a>
          </Link>
          <Link href="/profile">
            <a className="navbar-item">Profile</a>
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-danger" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
