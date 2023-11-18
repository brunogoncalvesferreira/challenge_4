import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Courses } from './pages/courses/Courses'
import { LayoutDefault } from './layout/layoutDefault'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/cursos/:id" element={<Courses />} />
      </Route>
    </Routes>
  )
}
