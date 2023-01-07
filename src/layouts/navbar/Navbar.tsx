import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/posts',
    label: 'Posts',
  },
]

export default function Navbar() {
  return (
    <nav className={styles['l-navbar']}>
      <ul className={styles['l-navbar__links']}>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
