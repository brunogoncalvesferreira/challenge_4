import styles from './CardCourses.module.css'

import { ShoppingCart } from 'phosphor-react'

export function CardCourses({ img, title, price }) {
  return (
    <div className={styles.cardCourses}>
      <img src={img} alt={title} />
      <h3>{title}</h3>

      <div className={styles.price}>
        <span>R$ {price}</span>
        <button className={styles.buttonAdd}>
          <ShoppingCart size={32} />
          Comprar
        </button>
      </div>
    </div>
  )
}
