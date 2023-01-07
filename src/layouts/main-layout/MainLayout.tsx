import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={styles['l-layout']}>
      <header className={styles['l-layout__header']}>
        <Navbar />
      </header>

      <main className={styles['l-layout__main']}>
        <Outlet />
      </main>

      <footer className={styles['l-layout__footer']}>footer here</footer>
    </div>
  )
}
