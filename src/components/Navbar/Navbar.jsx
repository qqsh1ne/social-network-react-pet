import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Nav = () =>
    <nav className={styles.nav}>
        <ul>
            <li className={styles.item}>
                <NavLink to="/profile" className={link => link.isActive ? styles.active : styles.link}>Profile</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/dialogs" className={link => link.isActive ? styles.active : styles.link}>Messages</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/feed" className={link => link.isActive ? styles.active : styles.link}>News</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/music" className={link => link.isActive ? styles.active : styles.link}>Music</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/settings" className={link => link.isActive ? styles.active : styles.link}>Settings</NavLink>
            </li>
        </ul>
    </nav>


export default Nav;
