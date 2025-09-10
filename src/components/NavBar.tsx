import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Library</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/members">Members</NavLink>
      <NavLink to="/loans">Loans</NavLink>
    </nav>
  )
}

export default NavBar
