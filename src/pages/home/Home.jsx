import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

import teenageWoman from '../../assets/teenage-woman.svg'
export function Home() {
  return (
    <div className={styles.home}>
      <main>
        <div className={styles.banner}>
          
          <div className={styles.wrapper}>
            <div className={styles.wrapperText}>
              <span>Successful coaches are visionaries</span>
              <h1>Good <strong>coaching</strong> is good teaching & nothing else.</h1>

              <div className={styles.wrapperCourses}>
                <NavLink>View Courses</NavLink>
                <strong>Get Free Consultation</strong>
              </div>
            </div>

            <div className={styles.wrapperImg}>
              <img src={teenageWoman} alt="Adolescente mulher segurando um notebook" />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}