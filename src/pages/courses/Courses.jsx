import { useParams, Link } from 'react-router-dom'
import styles from './Courses.module.css'
import { useEffect, useState, Suspense } from 'react'
import { api } from '../../lib/axios'

export function Courses() {
  const { id } = useParams()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    async function getCourseById() {
      const response = await api.get(`/courses/${id}`)
      setCourses(response.data)
    }

    getCourseById()
  }, [id])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Cursos em destaque</h2>
        <Suspense fallback={<Loading />}>
          <div className={styles.content}>
            <img src={courses.image} alt={courses.title} />
            <div className={styles.wrapperText}>
              <h3>{courses.title}</h3>
              <p>{courses.description}</p>

              {courses.length === 0 ? (
                ''
              ) : (
                <Link to={`/`}>Volte para efetuar a comprar</Link>
              )}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>
}
