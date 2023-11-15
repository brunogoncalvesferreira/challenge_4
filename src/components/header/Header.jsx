import styles from './Header.module.css'

import logo from '../../assets/codi-logo.png'
import { NavLink } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo da Codi Academy" />
      </div>

      <nav>
        <ul>
          <li><NavLink href="#">Home</NavLink></li>
          <li><NavLink href="#">Blog</NavLink></li>
          <li><NavLink href="#">Shop</NavLink></li>
        </ul>
      </nav>

      <div className={styles.iconShop}>
        <ShoppingCartSimple size={32} />
        <span>3</span>
      </div>

      <div className={styles.registerOrLogin}>
        <NavLink className={styles.login} href="#">Login</NavLink>
        <NavLink className={styles.register} href="#">Cadastrar</NavLink>
      </div>
    </header>
  )
}