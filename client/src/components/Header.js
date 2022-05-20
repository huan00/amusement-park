import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link className="headLink" to="/">
          Home
        </Link>
        <Link className="headLink" to="/About">
          About Us
        </Link>
        <Link className="headLink" to="/createride">
          Add Ride
        </Link>
        <Link className="headLink" to="/createpark">
          Add Park
        </Link>
      </nav>
    </header>
  )
}
export default Header
