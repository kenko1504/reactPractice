function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg"/>
      <Nav />
    </header>
  )
}
