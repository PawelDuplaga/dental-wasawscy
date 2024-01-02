import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
		<nav className={styles.navbarContainer}>
      <div className={styles.textLogo}>
        <span>stomatologia</span>
        wąsowscy
      </div>
		</nav>
  );
};

export default Navbar