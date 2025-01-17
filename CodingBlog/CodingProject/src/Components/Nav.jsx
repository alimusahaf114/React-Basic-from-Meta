import Logo from "./Logo";
import styles from "./Heading.module.css";
function Nav() {
  return (
    <div className={styles.mainnav}>
      <Logo></Logo>
      <ul>
        <li>
          <a href="#" className={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Articles
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
