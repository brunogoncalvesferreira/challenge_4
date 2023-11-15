import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'

export function LayoutDefault() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
