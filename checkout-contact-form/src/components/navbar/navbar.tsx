import styles from './navbar-styles.module.css';
import MeliLogo from '@/assets/images/meli-logo.png';

export const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <img src={MeliLogo} alt="Meli Logo" className={styles['logo']} />
    </nav>
  );
};
