import styles from "../../styles/home/Navbar.module.css";
import NavbarItem from "./NavbarItem";
import { GiHumanPyramid } from "react-icons/gi";

const Navbar = (props: any) => {
  return (
    <div className={`${styles.colourBg} colourWhite ${styles.navbar}`}>
      <ul className="flex">
        <li className={styles.logo}>
          <span>
            <GiHumanPyramid />
          </span>
          <NavbarItem href="/" name="Human Database" />
        </li>
        <li>{props.children}</li>
      </ul>
    </div>
  );
};

export default Navbar;
