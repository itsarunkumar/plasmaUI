import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1>PDA</h1>
        <ul className={styles.list}>
          <Link href="/">Home</Link>
          <Link href="/login/Login">Login</Link>
          <Link href="/register/Register">Register</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
