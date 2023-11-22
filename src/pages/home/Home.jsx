import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import { CardCourses } from './components/cardCourses/CardCourses'
import { Testimonials } from './components/testimonials/Testimonials'
import { api } from '../../lib/axios'
import { Link } from 'react-router-dom'
import { DATABASE } from '../../database/DATABASE'

import teenageWoman from '../../assets/teenage-woman.svg'
export function Home() {
  const [courses, setCourses] = useState([])

  async function getCourses() {
    const response = await api.get('/courses')
    setCourses(response.data)
  }

  useEffect(() => {
    getCourses()
  }, [courses])

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
                <Link to={'/cursos'}>View Courses</Link>
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
                  img={course.image}
                  title={course.title}
                  price={course.price}
                  course={course}
                />
              )
            })}
          </div>
        </div>

        <Testimonials />
      </main>
    </div>
  )
}
