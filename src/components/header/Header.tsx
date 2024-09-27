import Link from "next/link";
import NavBar from "./NavBar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
      <div className={styles.right}>
        <Link href="/login" className={styles.btn}>
          Login
        </Link>
        <Link href="/register" className={styles.btn}>
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
