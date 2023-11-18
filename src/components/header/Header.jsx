import styles from './Header.module.css'

import logo from '../../assets/codi-logo.png'
import { NavLink, Link } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo da Codi Academy" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={''}>Blog</Link>
          </li>
          <li>
            <Link to={''}>Shop</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.iconShop}>
        <ShoppingCartSimple size={32} />
        <span>3</span>
      </div>

      <div className={styles.registerOrLogin}>
        <NavLink className={styles.login} href="#">
          Login
        </NavLink>
        <NavLink className={styles.register} href="#">
          Cadastrar
        </NavLink>
      </div>
    </header>
  )
}
