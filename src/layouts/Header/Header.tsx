import { menuItems } from './header.constants'
import styles from './Header.module.css'
import logoDark from '@/assets/icons/logo-dark.png'


const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.brand}>
      <img src={logoDark} className={styles.logo} alt="Logo" />
      <span className={styles.name}>Mihajlo Stojanovic</span>
    </div>
    <nav className={styles.menu}>
      {menuItems.map((item) => (
        <a key={item.label} href={item.href} className={styles.menuItem}>
          {item.label}
        </a>
      ))}
    </nav>
    <a className={styles.cvButton} href="/documents/Mihajlo-Stojanovic.pdf" target="_blank" > CV </a>
    </header>
  ) 
}
  export default Header