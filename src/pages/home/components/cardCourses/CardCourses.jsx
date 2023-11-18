import styles from './CardCourses.module.css'

import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function CardCourses({ img, title, price, course }) {
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
      <Link to={`/cursos/${course.id}`}>Ver mais</Link>
    </div>
  )
}
