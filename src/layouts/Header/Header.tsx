import { menuItems } from './header.constants'
import styles from './Header.module.css'
import logoDark from '@/assets/icons/logo-dark.png'


const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.brand}>
      <img src={logoDark} className={styles.logo} alt="Logo Image" />
      <span className={styles.name}>Mihajlo Stojanović</span>
    </div>
    <nav className={styles.menu}>
      {menuItems.map((item, index) => (
        <div key={index}>
        <a href={item.href} className={styles.menuItem}>
          {item.label}
        </a>
        </div>
        
      ))}
    </nav>
    <a className={styles.cvButton} href="/documents/Mihajlo-Stojanovic.pdf" download='Mihajlo-Stojanovic.pdf' > Download CV </a>
    </header>
  ) 
}
  export default Header