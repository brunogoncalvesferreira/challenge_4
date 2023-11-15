import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

import teenageWoman from '../../assets/teenage-woman.svg'
import { CardCourses } from './components/CardCourses/CardCourses'

import { DATABASE } from '../../database/DATABASE'

export function Home() {
  return (
    <div className={styles.home}>
      <main>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.container}>
            <div className={styles.wrapperText}>
              <span>Successful coaches are visionaries</span>
              <h1>
                Good <strong>coaching</strong> is good teaching & nothing else.
              </h1>

              <div className={styles.wrapper}>
                <NavLink>View Courses</NavLink>
                <strong>Get Free Consultation</strong>
              </div>
            </div>

            <div className={styles.wrapperImg}>
              <img
                src={teenageWoman}
                alt="Adolescente mulher segurando um notebook"
              />
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className={styles.courses}>
          <h2>
            <span>Cursos</span> em destaque
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>

          <div className={styles.wrapperCourses}>
            {DATABASE.map((course) => {
              return (
                <CardCourses
                  key={course.id}
                  img={course.img}
                  title={course.title}
                  price={course.price}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
