import styles from './navbar-styles.module.css';
import MeliLogo from '@/assets/images/meli-logo.png';
import { LanguageButton } from '@/components/language-button/language-button';

export const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <img src={MeliLogo} alt="Meli Logo" className={styles['logo']} />
      <LanguageButton />
    </nav>
  );
};
